import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';
import logoFooter from '/images/logoFooter.png';
import './footer.css';
const Footer = () => {
    return (_jsxs("footer", { className: 'footer', style: footerStyles, children: [_jsxs("div", { className: 'logophone', style: divStyles, children: [_jsx("div", { className: 'columnFooter', style: columnStyles, children: _jsx(motion.img, { src: logoFooter, alt: "Company Logo", style: logoStyles, transition: { duration: 1 } }) }), _jsxs("div", { className: 'columnFooter mail-phone', style: columnStyles, children: [_jsxs(motion.div, { style: contactItemStyles, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(MdMailOutline, { style: iconStyles }), _jsx("span", { style: textStyles, children: " contacto@grupocodesi.com.mx" })] }), _jsxs("div", { className: 'footerS', children: [_jsxs(motion.div, { style: contactItemStyles, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(FiPhone, { style: iconStyles }), _jsx("span", { style: textStyles, children: "998 303 0726" })] }), _jsx(motion.a, { href: 'https://www.instagram.com/codesimx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', style: iconStyles, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(FaInstagram, { style: iconStyles }) })] })] })] }), _jsxs("div", { className: 'footerLocation', style: columnStylesDown, children: [_jsxs(motion.div, { className: 'locationItem', style: contactItemStyles, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(TfiLocationPin, { style: iconStyles }), _jsx("span", { className: 'textMaps', style: textStylesMap, children: " Supermanzana 96, Mz.8 Lt.1 CP 77535, Benito Juarez, Quintana Roo." })] }), _jsxs(motion.div, { className: 'locationItem', style: contactItemStyles, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(TfiLocationPin, { style: iconStyles }), _jsx("span", { className: 'textMaps', style: textStylesMap, children: "Montecito N\u00FAmero 38, Piso 28, Oficina 16, Colonia Napoles CP 03810, Benito Juarez, Wtc Cdmx" })] }), _jsxs(motion.div, { className: 'locationItem', style: contactItemStyles, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(TfiLocationPin, { style: iconStyles }), _jsx("span", { className: 'textMaps', style: textStylesMap, children: "Calle 22 N\u00FAmero 290 x 31 Poliginon 108. CP 97143" })] })] })] }));
};
// Estilos en línea
const footerStyles = {
    display: 'grid',
    justifyContent: 'normal',
    padding: '1rem 4rem',
    backgroundColor: 'rgb(4 21 64)',
    flexWrap: 'wrap',
};
const columnStyles = {
    padding: '0px',
};
const divStyles = {
    display: 'flex',
};
const columnStylesDown = {
    display: 'flex',
    justifyContent: 'space-between'
};
const logoStyles = {
    height: '7rem',
};
const contactItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    margin: '10px 0',
    transition: 'transform 0.3s ease',
};
const iconStyles = {
    color: 'white', // Azul
    fontSize: '1.5rem',
};
const textStyles = {
    fontSize: '1rem',
    color: 'white',
    fontWeight: '100',
    alignSelf: 'center',
    textAlign: 'justify'
};
const textStylesMap = {
    fontSize: '1rem',
    color: 'white',
    fontWeight: '100',
    alignSelf: 'flex-start',
    textAlign: 'justify',
    maxWidth: '220px'
};
export default Footer;
