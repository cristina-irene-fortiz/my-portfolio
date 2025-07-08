// src/components/ProjectsCarousel.js
import React from 'react';
import { Container, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';  // ← Fix!
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import products from '../data/products';

export default function ProjectsCarousel() {
  return (
    <Container id="projects" sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        breakpoints={{
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 }
        }}
      >
        {products.map((p) => (
          <SwiperSlide key={p.title}>
            <Card elevation={4}>
              <CardActionArea href={p.link} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  height="180"
                  image={p.image}
                  alt={p.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {p.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
