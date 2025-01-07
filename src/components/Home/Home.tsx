import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import image from '/images/services/image2.jpg'
import video from '/images/video/videoBanner.mp4'
import './home.css';


const Home: React.FC = () => {


  const isMobile = true;

  return (
    <div className='homeWrapper' style={containerStyles}>
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
      <div className='divTextBanner' style={overlayStyles}>
        <div className='wrapperText' style={textstylesDiv}>
          <div className='servicesBottomLast'>
            <h1 style={textStyles}>CODESI</h1>

          </div>

          <p className='textP'>  Somos un equipo de profesionales especializados en contabilidad, derecho y tecnología, dedicados a impulsar el crecimiento y éxito de tu empresa. </p>

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
  background: '#00000078'
};

const textstylesDiv: React.CSSProperties = {
  color: 'white',
  fontWeight: 'bold',
  display: 'grid',
  // gap: '1rem',
  padding: '1rem 5rem',
  textAlign: 'justify'

}
const textStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '3rem',
  textAlign: 'center',
  // textShadow: '0px 4px 8px #152347', // Efecto difuminado en el texto
};


export default Home;

