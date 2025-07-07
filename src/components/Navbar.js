// src/components/Navbar.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { href: '#resume', label: 'See Resume' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Get in Contact' }
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Cristina Irene Fortiz
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navLinks.map(({ href, label }) => (
              <Button
                key={href}
                color="inherit"
                href={href}
                onClick={() => console.log(`navigate→${href}`)}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map(({ href, label }) => (
            <ListItemButton
              key={href}
              component="a"
              href={href}
              onClick={() => {
                console.log(`navigate→${href}`);
                setOpen(false);
              }}
            >
              {label}
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
