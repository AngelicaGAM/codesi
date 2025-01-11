import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useMediaQuery } from 'react-responsive';
import image from '/images/services/image2.jpg';
import './home.css';
const Home = () => {
    const isMobile = true;
    return (_jsxs("div", { className: 'homeWrapper', style: containerStyles, children: [isMobile ? (_jsx("img", { src: image, alt: "Mobile Image", style: mediaStyles })) : (_jsx("img", { src: image, alt: "Mobile Image", style: mediaStyles })), _jsx("div", { className: 'divTextBanner', style: overlayStyles, children: _jsxs("div", { className: 'wrapperText', style: textstylesDiv, children: [_jsx("div", { className: 'servicesBottomLast', children: _jsx("h1", { style: textStyles, children: "CODESI" }) }), _jsx("p", { className: 'textP', children: "  Somos un equipo de profesionales especializados en contabilidad, derecho y tecnolog\u00EDa, dedicados a impulsar el crecimiento y \u00E9xito de tu empresa. " })] }) })] }));
};
// Estilos en línea
const containerStyles = {
    position: 'relative',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
};
const mediaStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};
const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    background: '#00000078'
};
const textstylesDiv = {
    color: 'white',
    fontWeight: 'bold',
    display: 'grid',
    // gap: '1rem',
    padding: '1rem 5rem',
    textAlign: 'justify'
};
const textStyles = {
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center',
    // textShadow: '0px 4px 8px #152347', // Efecto difuminado en el texto
};
export default Home;
