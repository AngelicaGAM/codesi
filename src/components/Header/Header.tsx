// @ts-nocheck
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '/images/gcodesi.png';
import './header.css';
import { FaWhatsapp } from 'react-icons/fa';



const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const headerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: isMobile ? 'space-between' : 'space-around',
    alignItems: 'center',
    padding: '0.5rem 2rem',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderBottom: '2px solid #ff6100',
    
  };


  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const mobileClick = (text) =>{
    toggleMenu();
  }

  const scrollToSection = (id: string) => {
    toggleMenu();
    setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300);
  };

  return (
    <header   style={headerStyles}>
      <div>
        <img
          src={logo}
          alt="Logo"
          style={logoStyles}
        />
      </div>
      <div
        className='textWhats'>
        {!isMobile && (
          <nav className='menu-header' style={navStyles}>
            <motion.a
              href="#servicios"
              style={navLinkStyles}
              whileHover={{ scale: 1.1 }}
              initial="hidden"
              animate="visible"
              variants={menuVariants}
              onClick={() => onScroll('servicios')}
            >
              Servicios
            </motion.a>
            <motion.a
              href="#clientes"
              style={navLinkStyles}
              whileHover={{ scale: 1.1 }}
              initial="hidden"
              animate="visible"
              variants={menuVariants}
              onClick={() => onScroll('clientes')}
            >
              Clientes
            </motion.a>
            <motion.a
              href="#contacto"
              style={navLinkStyles}
              whileHover={{ scale: 1.1 }}
              initial="hidden"
              animate="visible"
              variants={menuVariants}
              onClick={() => onScroll('contacto')}
            >
              Contacto

            </motion.a>
          </nav>
        )}

        {/* Botón de WhatsApp (solo en Desktop) */}
        {!isMobile && (
          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyles}
            whileHover={{ scale: 1.1 }}

            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 }
            }}
          >
            <FaWhatsapp style={iconStyles} />

          </motion.a>
        )}
      </div>
      {/* Menú Sandwich para Mobile */}
      {isMobile && (
        <>
          <div style={menuIconStyles} onClick={toggleMenu}>
            <FiMenu size={24} />
          </div>

          {isMenuOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={mobileMenuContainerStyles}
            ><div className='divmobile'>
                <img
                  src={logo}
                  alt="Logo"
                  style={logoStyles}
                />
                <div style={menuCloseIconStyles} onClick={toggleMenu}>
                  <FiX size={34} />
                </div>
              </div>

              <nav style={mobileMenuStyles}>
             

                <div style={mobileNavLinkStyles} onClick={() => scrollToSection('servicios')}>Servicios</div>
                <div style={mobileNavLinkStyles} onClick={() => scrollToSection('clientes')}>Clientes</div>
                <div style={mobileNavLinkStyles} onClick={() => scrollToSection('contacto')}>Contacto</div>
              </nav>
            </motion.div>
          )}
        </>
      )}
    </header>
  );


};

// Estilos en línea


const logoStyles: React.CSSProperties = {
  height: '80px',
  width: '100px',
  cursor: 'pointer',
};

const navStyles: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
};

const navLinkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#090554 !important',
  fontWeight: 'bold',
  cursor: 'pointer',
  position: 'relative',
  fontSize: '1rem'
};





const menuIconStyles: React.CSSProperties = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const mobileMenuContainerStyles: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: '#fff',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingTop: '20px',
};

const menuCloseIconStyles: React.CSSProperties = {
  alignSelf: 'flex-end',
  padding: '10px',
  cursor: 'pointer',
  color: 'rgb(4, 21, 64)',

};

const mobileMenuStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4rem',
  marginTop: '40px',
  width: '100%'
};

const mobileNavLinkStyles: React.CSSProperties = {
  textDecoration: 'none',
  color: '#737373',
  fontWeight: 500,
  fontSize: '24px',
};


const buttonStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '48px',
  backgroundColor: '#25D366',
  color: '#fff',
  borderRadius: '50%',
  textDecoration: 'none',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
};

const iconStyles: React.CSSProperties = {
  fontSize: '32px'
};


export default Header;
