// src/App.js
import React, { useState, useMemo, createContext, useContext } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  useTheme 
} from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/HeroWithSparkles';
import Resume from './components/Resume';
import Products from './components/Products';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Context to expose toggleColorMode()
 */
const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }),
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
        }
      }),
    [mode]
  );

  // Simple fade-up variants for all sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
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

// Custom hook to grab toggle from context
export const useColorMode = () => useContext(ColorModeContext);
