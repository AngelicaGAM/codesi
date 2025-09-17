import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, AppBar } from '@mui/material';
import image from '/images/banner1.jpg'
import Header from '../Header/Header';

const images = [
    image, image,image
];

const FullScreenSlider: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Header Overlay */}
      <AppBar position="absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: 10 }}>
      <Header />
      </AppBar>

      {/* Slider */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: '100vh',
              background: `url(${image}) center/cover no-repeat`,
            }}
          >
            {/* Overlay content */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // oscurece la imagen
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                Bienvenido a Mi Sitio
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default FullScreenSlider;
