import React from 'react';
import Tilt from 'react-parallax-tilt';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';
import products from '../data/products';

/**
 * Products grid with 3D-tilt hover effect.
 * Requires: npm install react-parallax-tilt
 */
export default function Products() {
  return (
    <Container id="products" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.title}>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.2}
              style={{ width: '100%' }}
            >
              <Card elevation={4}>
                <CardActionArea
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={p.image}
                    alt={p.title}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {p.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Tilt>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
