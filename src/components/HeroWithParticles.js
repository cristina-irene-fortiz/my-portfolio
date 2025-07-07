// src/components/HeroWithParticles.js
import React from 'react';
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
      {/* Sparkles overlay */}
      <Sparkles
        color="#ff41b5"        // your pink
        count={30}             // how many at once
        minSize={8}
        maxSize={16}
        fadeOutSpeed={20}
        flicker={true}
        overflowPx={50}        // allow them to drift a bit outside
        style={{ zIndex: 1 }}  // make sure they sit *above* background but *below* text
      />
+     {/* Particle storm overlay */}
+     <ParticleStorm />

      {/* Your existing Hero content */}
      <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
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
            src="/profile.jpg"
            alt="Cristina Fortiz"
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
