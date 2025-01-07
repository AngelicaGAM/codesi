import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoFooter from '/images/logoFooter.png'
import './footer.css';


const Footer: React.FC = () => {
  return (
    <footer className='footer' style={footerStyles}>
      <div className='logophone' style={divStyles}>
        <div className='columnFooter' style={columnStyles}>
          <motion.img
            src={logoFooter}
            alt="Company Logo"
            style={logoStyles}
            transition={{ duration: 1 }}
          />
        
        </div>
        <div className='columnFooter mail-phone' style={columnStyles}>
          <motion.div
            style={contactItemStyles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope style={iconStyles} />
            <span style={textStyles}> contacto@grupocodesi.com.mx
            </span>
          </motion.div>
          <motion.div
            style={contactItemStyles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone style={iconStyles} />
            <span style={textStyles}>998 303 072 6</span>
          </motion.div>
        </div>
      </div>
      <div className='footerLocation' style={columnStylesDown}>
        <motion.div
        className='locationItem'
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt style={iconStyles} />
          <span className='textMaps' style={textStylesMap}> Supermanzana 96, Mz.8 Lt.1
          CP 77535, Benito Juarez, Quintana Roo.</span>
        </motion.div>
        <motion.div
        className='locationItem'
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt style={iconStyles} />
          <span className='textMaps' style={textStylesMap}>Montecito Número 38, Piso 28, Oficina 16, Colonia
          Napoles CP 03810, Benito Juarez, Wtc Cdmx</span>
        </motion.div>
        <motion.div
        className='locationItem'
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt style={iconStyles} />
          <span className='textMaps' style={textStylesMap}>Calle 22 Número 290 x 31 Poliginon 108.
          CP 97143</span>
        </motion.div>

      </div>

    </footer>
  );
};

// Estilos en línea
const footerStyles: React.CSSProperties = {
  display: 'grid',
  justifyContent: 'normal',
  padding: '1rem 4rem',
  backgroundColor: 'rgb(4 21 64)',
  flexWrap: 'wrap',
};

const columnStyles: React.CSSProperties = {
  padding: '0px',
};


const divStyles: React.CSSProperties = {
  display: 'flex',
 };

const columnStylesDown: React.CSSProperties = {
 display: 'flex',
 justifyContent: 'space-between'
};

const logoStyles: React.CSSProperties = {
  height: '7rem',
};

const contactItemStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  margin: '10px 0',
  transition: 'transform 0.3s ease',

};

const iconStyles: React.CSSProperties = {
  color: 'white', // Azul
  fontSize: '1.5rem',
};

const textStyles: React.CSSProperties = {
  fontSize: '1rem',
  color: 'white',
  fontWeight: '100',
  alignSelf: 'center',
  textAlign: 'justify'
};

const textStylesMap: React.CSSProperties = {
  fontSize: '1rem',
  color: 'white',
  fontWeight: '100',
  alignSelf: 'flex-start',
  textAlign: 'justify',
  maxWidth: '220px'
};

export default Footer;
