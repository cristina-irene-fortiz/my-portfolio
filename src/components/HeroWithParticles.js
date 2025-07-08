// src/components/HeroWithParticles.js
import React from 'react';
import Sparkles from 'react-sparkle';
import ParticleStorm from './ParticleStorm';
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroWithParticles() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // slide-in animation for the portrait
  const imageVariant = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } }
  };

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default'
      }}
    >
      {isDesktop && (
        <>
          {/* Random twinkles */}
          <Sparkles
            color="#ff41b5"
            count={25}
            minSize={6}
            maxSize={14}
            fadeOutSpeed={25}
            flicker
            overflowPx={30}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '66%',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />

          {/* Swirling particles */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '66%',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          >
            <ParticleStorm />
          </Box>
        </>
      )}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row' }}
        >
          {/* TEXT & BUTTON */}
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="primary" gutterBottom>
              HI!
            </Typography>
            <Typography variant="h3" component="h1" gutterBottom>
              I’m{' '}
              <Box component="span" color="primary" sx={{ fontWeight: 600 }}>
                Cristina Fortiz
              </Box>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#contact"
              onClick={() => console.log('navigate→#contact')}
            >
              Hire Me
            </Button>
          </Grid>

          {/* ANIMATED PORTRAIT */}
          <Grid item xs={12} md={5}>
            <Box
              component={motion.img}
              src="./profile.jpg"              /* use absolute path to public/ */
              alt="Cristina Fortiz"
              loading="lazy"                  /* native lazy-load */
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              sx={{
                width: '100%',
                maxWidth: 300,
                borderRadius: 2,
                display: 'block',
                mx: { xs: 'auto', md: 0 }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
