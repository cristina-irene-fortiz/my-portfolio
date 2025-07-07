// src/components/Products.js
import React from 'react';
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

export default function Products() {
  return (
    <Container id="products" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.title}>
            <Card>
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
                  <Typography variant="h6">{p.title}</Typography>
                  <Typography variant="body2">{p.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
