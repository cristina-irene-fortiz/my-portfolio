// src/App.js (or wherever you create your theme)

import React, { useState, useMemo, createContext, useContext } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/HeroWithParticles';
import Resume from './components/Resume';
import Products from './components/Products';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({ toggleColorMode: () => setMode(m => (m === 'light' ? 'dark' : 'light')) }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: '#ff41b5' },
          secondary: { main: '#000000' }
        },
        typography: {
          fontFamily: 'Poppins, sans-serif',
          h4: { fontWeight: 600 },
          button: { textTransform: 'none', fontWeight: 600 }
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                // animate background and text color
                transition: 'background-color 0.5s ease, color 0.5s ease'
              }
            }
          }
        }
      }),
    [mode]
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline will now include our body transition */}
        <CssBaseline />

        <Navbar />

        <main>
          {[Hero, Resume, Products, Contact].map((Section, idx) => (
            <AnimatePresence key={idx}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
              >
                <Section />
              </motion.div>
            </AnimatePresence>
          ))}
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export const useColorMode = () => useContext(ColorModeContext);
