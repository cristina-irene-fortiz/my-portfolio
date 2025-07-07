// src/components/Resume.js
import React from 'react';
import { Container, Typography, Link } from '@mui/material';

export default function Resume() {
  return (
    <Container id="resume" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Resume
      </Typography>
      <Link href="/Cristina_Fortiz_Resume.pdf" target="_blank" underline="hover">
        Download PDF
      </Link>
    </Container>
  );
}
