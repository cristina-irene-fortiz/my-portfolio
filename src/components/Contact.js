// src/components/Contact.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material';

/**
 * Contact form that opens the user’s email client via mailto:
 */
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    // Replace with your actual email address:
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <Container id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'grid',
          gap: 2,
          maxWidth: 600,
          mx: 'auto'  /* center the form */
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button variant="contained" type="submit" size="large">
          Send Message
        </Button>
      </Box>
    </Container>
  );
}
