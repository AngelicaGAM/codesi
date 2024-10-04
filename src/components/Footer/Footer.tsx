import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import logoFooter from '../../assets/images/footer.png'

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <div style={divStyles}>
        <div style={columnStyles}>
          <motion.img
            src={logoFooter}
            alt="Company Logo"
            style={logoStyles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        
        </div>
        <div style={columnStyles}>
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
      <div style={columnStylesDown}>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt style={iconStyles} />
          <span style={textStylesMap}> Supermanzana 96, Mz.8 Lt.1
          CP 77535, Benito Juarez, Quintana Roo.</span>
        </motion.div>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt style={iconStyles} />
          <span style={textStylesMap}>Montecito Número 38, Piso 28, Oficina 16, Colonia
          Napoles CP 03810, Benito Juarez, Wtc Cdmx</span>
        </motion.div>
        <motion.div
          style={contactItemStyles}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaMapMarkerAlt style={iconStyles} />
          <span style={textStylesMap}>Calle 22 Número 290 x 31 Poliginon 108.
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
  padding: '20px',
  backgroundColor: '#152347',
  flexWrap: 'wrap',
};

const columnStyles: React.CSSProperties = {
  width: '50%',
  padding: '10px',
};


const divStyles: React.CSSProperties = {
  display: 'flex',
  background: 'red'
 };

const columnStylesDown: React.CSSProperties = {
 display: 'flex',
 justifyContent: 'space-around'
};

const logoStyles: React.CSSProperties = {
  height: '60px',
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
  alignSelf: 'center',
  textAlign: 'justify',
  maxWidth: '250px'
};

export default Footer;
