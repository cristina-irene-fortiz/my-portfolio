// src/components/Contact.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ level: 'INFO', action: 'submit_contact', data: form }));
    alert('Thanks for your message!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container id="contact" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'grid', gap: 2, maxWidth: 600 }}
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
        <Button variant="contained" type="submit">
          Send Message
        </Button>
      </Box>
    </Container>
  );
}
