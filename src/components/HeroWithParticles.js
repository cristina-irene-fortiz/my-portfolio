// src/components/HeroWithParticles.js
import React from 'react';
import Sparkles from 'react-sparkle';
import ParticleStorm from './ParticleStorm';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroWithParticles() {
  // slide-in animation for the image
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
        minHeight: '80vh',              // fill most of viewport
        display: 'flex',
        alignItems: 'center',           // vertical center
        bgcolor: 'background.default'
      }}
    >
      {/* Top-layer sparkle (confined to upper 2/3) */}
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
          height: '66%',              // only top two-thirds
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Underlying swirl of particles, also upper two-thirds */}
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

      {/* content container */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row' }}
        >
          {/* Text & button */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="subtitle2"
              color="primary"
              gutterBottom
            >
              HI!
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
            >
              I’m{' '}
              <Box
                component="span"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
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

          {/* Animated portrait */}
          <Grid item xs={12} md={5}>
            <Box
              component={motion.img}
              src="./profile.jpg"
              alt="Cristina Fortiz"
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              sx={{
                width: '100%',
                maxWidth: 300,         // cap image size
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
