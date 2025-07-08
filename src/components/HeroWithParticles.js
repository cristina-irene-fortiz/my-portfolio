// src/components/HeroWithParticles.js
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
        // give yourself plenty of vertical breathing room
        minHeight: { xs: 'auto', md: '80vh' },
        py: { xs: 6, md: 0 },
        px: { xs: 2, md: 8 },
        display: 'flex',
        alignItems: 'flex-end'
      }}
    >
      {/* background effects */}
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
      <ParticleStorm />

      {/* content + image */}
      <Grid
        container
        spacing={4}
        alignItems="flex-end"            // bottom-align both items
        justifyContent="space-between"  // push to edges
        sx={{ position: 'relative', zIndex: 2 }}
        direction={{ xs: 'column', md: 'row-reverse' }} // text on right on desktop
      >
        {/* IMAGE */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="/profile.jpg"
            alt="Cristina Fortiz"
            sx={{
              width: '100%',
              maxWidth: 350,           // cap the width
              height: 'auto',
              display: 'block',
              borderRadius: 2,
              alignSelf: 'flex-end'    // reinforce bottom align
            }}
          />
        </Grid>

        {/* TEXT + BUTTON */}
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
      </Grid>
    </Box>
  );
}
