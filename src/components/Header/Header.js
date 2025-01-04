import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '/images/gcodesi.png';
import './header.css';
import { FaWhatsapp } from 'react-icons/fa';
const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);
    const headerStyles = {
        display: 'flex',
        justifyContent: isMobile ? 'space-between' : 'space-around',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        borderBottom: '2px solid #ff6100'
    };
    const menuVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };
    return (_jsxs("header", { style: headerStyles, children: [_jsx("div", { children: _jsx("img", { src: logo, alt: "Logo", style: logoStyles }) }), _jsxs("div", { className: 'textWhats', children: [!isMobile && (_jsxs("nav", { className: 'menu-header', style: navStyles, children: [_jsx(motion.a, { href: "#serviciosRef", style: navLinkStyles, whileHover: { scale: 1.1 }, initial: "hidden", animate: "visible", variants: menuVariants, onClick: () => onScroll('servicios'), children: "Servicios" }), _jsx(motion.a, { href: "#clientes", style: navLinkStyles, whileHover: { scale: 1.1 }, initial: "hidden", animate: "visible", variants: menuVariants, onClick: () => onScroll('clientes'), children: "Clientes" }), _jsx(motion.a, { href: "#contacto", style: navLinkStyles, whileHover: { scale: 1.1 }, initial: "hidden", animate: "visible", variants: menuVariants, onClick: () => onScroll('contacto'), children: "Contacto" })] })), !isMobile && (_jsx(motion.a, { href: "https://wa.me/1234567890", target: "_blank", rel: "noopener noreferrer", style: buttonStyles, whileHover: { scale: 1.1 }, transition: {
                            ease: "linear",
                            duration: 2,
                            x: { duration: 1 }
                        }, children: _jsx(FaWhatsapp, { style: iconStyles }) }))] }), isMobile && (_jsxs(_Fragment, { children: [_jsx("div", { style: menuIconStyles, onClick: toggleMenu, children: _jsx(FiMenu, { size: 24 }) }), isMenuOpen && (_jsxs(motion.div, { initial: { x: '-100%' }, animate: { x: 0 }, transition: { duration: 0.3 }, style: mobileMenuContainerStyles, children: [_jsx("div", { style: menuCloseIconStyles, onClick: toggleMenu, children: _jsx(FiX, { size: 24 }) }), _jsxs("nav", { style: mobileMenuStyles, children: [_jsx("a", { href: "#section1", style: mobileNavLinkStyles, onClick: toggleMenu, children: "Secci\u00F3n 1" }), _jsx("a", { href: "#section2", style: mobileNavLinkStyles, onClick: toggleMenu, children: "Secci\u00F3n 2" }), _jsx("a", { href: "#section3", style: mobileNavLinkStyles, onClick: toggleMenu, children: "Secci\u00F3n 3" })] })] }))] }))] }));
};
// Estilos en línea
const logoStyles = {
    height: '80px',
    width: '100px',
    cursor: 'pointer',
};
const navStyles = {
    display: 'flex',
    gap: '20px',
};
const navLinkStyles = {
    textDecoration: 'none',
    color: '#090554 !important',
    fontWeight: 'bold',
    cursor: 'pointer',
    position: 'relative',
    fontSize: '1rem'
};
const menuIconStyles = {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
};
const mobileMenuContainerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '50vh',
    backgroundColor: '#fff',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '20px',
};
const menuCloseIconStyles = {
    alignSelf: 'flex-end',
    padding: '10px',
    cursor: 'pointer',
};
const mobileMenuStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
    marginTop: '20px',
};
const mobileNavLinkStyles = {
    textDecoration: 'none',
    color: '#737373',
    fontWeight: 500,
    fontSize: '24px',
};
const buttonStyles = {
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
const iconStyles = {
    fontSize: '32px'
};
export default Header;
