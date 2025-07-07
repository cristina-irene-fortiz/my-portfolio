import React from 'react';
import Sparkles from 'react-sparkle';
import ParticleStorm from './ParticleStorm';
import { Box, Grid, Typography, Button } from '@mui/material';

export default function HeroWithParticles() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 8 }
      }}
    >
      {/* Random twinkles */}
      <Sparkles
        color="#ff41b5"
        count={30}
        minSize={8}
        maxSize={16}
        fadeOutSpeed={20}
        flicker
        overflowPx={50}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Swirling particle storm */}
      <ParticleStorm />

      {/* Main content above effects */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ position: 'relative', zIndex: 2 }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" color="primary" gutterBottom>
            HI!
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            I’m <Box component="span" color="primary">Cristina Fortiz</Box>
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
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="./profile.jpg"
            alt="Photo of Cristina Fortiz"
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
