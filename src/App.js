import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent } from '@mui/material';

function App() {
  return (
    <Router basename="/my-portfolio">
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cristina's Portfolio
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
          </Toolbar>
        </AppBar>

        <Container style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <Typography variant="h4" gutterBottom>
    Welcome to My Portfolio!
    <Typography variant="body1">
      Hi, I'm Cristina, a data scientist and cybersecurity expert. Explore my work below!
    </Typography>
  </Typography>
);

const AboutPage = () => (
  <Typography variant="h4" gutterBottom>About Me</Typography>
);

const ProjectsPage = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5">Project 1</Typography>
          <Typography>Details about your project.</Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default App;
