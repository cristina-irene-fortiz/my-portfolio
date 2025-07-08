// src/components/Hero.js
import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box component="section" sx={{ py: 8, px: 2 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle2" color="primary" gutterBottom>
            HI!
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            I’m <Box component="span" color="primary">Cristina</Box>
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
            alt="Cristina Fortiz"
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
