import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import image from '../../assets/images/home-mobile.jpg'
import video from '../../assets/images/video/videoBanner.mp4'

const Home: React.FC = () => {
  const isMobile = true;

  return (
    <div style={containerStyles}>
      {isMobile ? (
        <img
          src={image}
          alt="Mobile Image"
          style={mediaStyles}
        />
      ) : (
        <video
          src={video}
          style={mediaStyles}
          autoPlay
          loop
          muted
        />
      )}
      <div style={overlayStyles}>
        <div style={textstylesDiv}>
        <h1 style={textStyles}>CODESI</h1>
        <p>  Somos un equipo de profesionales especializados en contabilidad, derecho y tecnología, dedicados a impulsar el crecimiento y éxito de tu empresa. </p>
        </div>
    
      </div>
    </div>
  );
};

// Estilos en línea
const containerStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '80vh',
  overflow: 'hidden',
};

const mediaStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const overlayStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
};

const textstylesDiv: React.CSSProperties = {
    color: 'white', 
    fontWeight: 'bold',
    display: 'grid',
        gap: '2rem',
        padding: '3rem',

      }
const textStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '3rem',
  textAlign: 'center',
  // textShadow: '0px 4px 8px #152347', // Efecto difuminado en el texto
};


export default Home;

