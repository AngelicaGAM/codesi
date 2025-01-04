import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from 'react-slick';
import { Box, Typography, AppBar } from '@mui/material';
import image from '/images/banner1.jpg';
import Header from '../Header/Header';
const images = [
    image, image, image
];
const FullScreenSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };
    return (_jsxs(Box, { sx: { position: 'relative', height: '100vh', overflow: 'hidden' }, children: [_jsx(AppBar, { position: "absolute", sx: { backgroundColor: 'transparent', boxShadow: 'none', zIndex: 10 }, children: _jsx(Header, {}) }), _jsx(Slider, { ...settings, children: images.map((image, index) => (_jsx(Box, { sx: {
                        height: '100vh',
                        background: `url(${image}) center/cover no-repeat`,
                    }, children: _jsx(Box, { sx: {
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
                        }, children: _jsx(Typography, { variant: "h2", sx: { fontWeight: 'bold' }, children: "Bienvenido a Mi Sitio" }) }) }, index))) })] }));
};
export default FullScreenSlider;
