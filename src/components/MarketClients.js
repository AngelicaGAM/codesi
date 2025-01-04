import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import './MarketClients.css';
import aviacion from '/images/clientes/aviacion.jpg';
import bienes from '/images/clientes/bienesRaices.jpg';
import hotels from '/images/clientes/hotels.jpg';
import concierge from '/images/clientes/concierge.jpg';
import finanzas from '/images/clientes/finanzas.jpg';
// import finanzas from '/images/clientes/concierge.jpg'
const MarketClients = () => {
    const services = [
        { name: 'Atención médica', image: 'https://3.bp.blogspot.com/-BQEEvw68Y_8/Ut6BeruTbxI/AAAAAAAACho/NnlM-PkQ1hs/s1600/avionA320.jpg', link: '#atencion-medica' },
        { name: 'Aviación privada', image: aviacion, link: '#aviacion-privada' },
        { name: 'Bienes raíces', image: bienes, link: '#bienes-raices' },
        { name: 'Hoteles', image: hotels, link: '#hoteles' },
        { name: 'Conserjería', image: concierge, link: '#conserjeria' },
        { name: 'Finanzas', image: finanzas, link: '#finanzas' },
    ];
    return (_jsxs("section", { className: "market-clients", children: [_jsxs(motion.div, { className: "header", initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: 'servicesBottom', children: "Mercado y Clientes" }), _jsx("p", { children: "Atendemos diversos segmentos del mercado, incluidos:" })] }), _jsx("div", { className: "services-grid", children: services.map((service, index) => (_jsx(motion.a, { href: service.link, className: "service-card", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: index * 0.1 }, whileHover: { scale: 1.05 }, children: _jsxs("div", { className: "card-content", children: [_jsx("img", { src: service.image, alt: service.name, className: "service-image" }), _jsx("div", { className: "service-text", children: _jsx("h3", { children: service.name }) })] }) }, index))) }), _jsx(motion.p, { className: "footer-text", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, children: "Hemos construido s\u00F3lidas relaciones con los clientes en varias regiones del mundo." })] }));
};
export default MarketClients;
