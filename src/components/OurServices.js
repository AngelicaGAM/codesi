import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import socialContri from '/images/services/clients.png';
import image3 from '/images/services/admin3.jpg';
import image5 from '/images/services/web-1.jpg';
import contabilidadImg from '/images/services/contabilidad.jpg';
import taxes from '/images/services/taxes.png';
import BasicList from './BasicList';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import './OurServices.css';
const TabPanel = ({ children, value, index, ...other }) => {
    return (_jsx("div", { role: "tabpanel", hidden: value !== index, id: `full-width-tabpanel-${index}`, style: { transition: "opacity 0.5s ease-in-out" }, ...other, style: {
            opacity: value === index ? 1 : 0, // Transición de opacidad
            transform: value === index ? "translateX(0)" : "translateX(-100%)", // Desplazamiento hacia la izquierda
            transition: "opacity 0.5s ease, transform 0.5s ease", // Transición de opacidad y desplazamiento
        }, children: value === index && (_jsx(Box, { sx: { p: 3 }, children: _jsx(Typography, { children: children }) })) }));
};
const OurServices = () => {
    const [value, setValue] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };
    const servicioSocial = [
        'Consultoría. ',
        'Administración de negocios.',
        'Elaboración de manuales de procesos.',
        'Elaboración de Programas internos.',
        'Elaboración de Planes de Emergencia.',
        'Elaboración de Dictámenes Eléctricos.',
        'Constancias de Primeros Auxilios y Evacuación.',
    ];
    const legales = [
        'Consultoría.',
        'Elaboración de contratos.',
        'Registro de Marca ante el IMPI.',
        'Gestión de tramites federales, estatales y municipales.',
        'Constitución empresarial.',
        'Elaboración de poderes legales.',
    ];
    const contables = [
        '   Consultoría. ',
        ' Procesos y registros contables.',
        ' Administración de nómina.',
        ' Generación de facturas.',
    ];
    const fiscales = [
        ' Consultoría.',
        ' Cálculo de impuestos.',
        ' Presentación de Declaraciones Federales (Impuestos DIOT).',
        ' Presentación de Impuestos Estatales (Impuestos sobre la Nomina, Hospedaje, Libre Profesión e Impuesto). ',
        ' Presentación de Declaraciones Anuales. ',
        ' Recuperación de Saldos a Favor. ',
    ];
    const consSocial = [
        ' Registro y procedimientos de obra en SIROC. ',
        '    Presentación de REPSE /ICSOE y SISUR.  ',
        '  Calcullo de contribuciones de Seguridad Social (SIPARE).  ',
    ];
    return (_jsxs(Box, { id: "servicios", sx: { width: '100%', marginTop: '3rem' }, children: [_jsx("p", { className: 'titlesGC servicesBottom', children: " Nuestros Servicios" }), !isMobile ?
                _jsxs(Box, { className: 'tabsC', sx: {
                        width: "100%",
                        overflowX: "auto",
                        WebkitOverflowScrolling: "touch",
                    }, children: [_jsxs(Tabs, { className: 'tabs-menu', value: value, onChange: handleChange, variant: "scrollable" // Habilita desplazamiento horizontal
                            , scrollButtons: "auto" // Botones visibles si el scroll es necesario
                            , allowScrollButtonsMobile // Activa botones en dispositivos móviles
                            : true, sx: {
                                borderLeft: 1,
                                "& .MuiTabs-scrollButtons": {
                                    "&.Mui-disabled": { opacity: 0.3 }, // Mejora la visibilidad de los botones
                                },
                            }, children: [_jsx(Tab, { label: "Administrativos" }), _jsx(Tab, { label: "Legales" }), _jsx(Tab, { label: "Contables" }), _jsx(Tab, { label: "Fiscales" }), _jsx(Tab, { label: "Servicios de Contribuci\u00F3n Social" })] }), _jsx(TabPanel, { value: value, index: 0, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: servicioSocial }) }), _jsx("img", { style: {
                                            transition: "opacity 0.5s ease-in-out",
                                        }, className: 'image', src: image3, alt: "Service 1", style: { width: '50%' } })] }) }), _jsx(TabPanel, { value: value, index: 1, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("img", { style: {
                                            transition: "opacity 0.5s ease-in-out",
                                        }, className: 'image', src: image5, alt: "Service 1", style: { width: '50%' } }), _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: legales }) })] }) }), _jsx(TabPanel, { value: value, index: 2, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: contables }) }), _jsx("img", { style: {
                                            transition: "opacity 0.5s ease-in-out",
                                        }, className: 'image', src: contabilidadImg, alt: "Service 1", style: { width: '50%' } })] }) }), _jsx(TabPanel, { value: value, index: 3, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("img", { style: {
                                            transition: "opacity 0.5s ease-in-out",
                                        }, className: 'image', src: taxes, alt: "Service 1", style: { width: '50%' } }), _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: fiscales }) })] }) }), _jsx(TabPanel, { value: value, index: 4, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: consSocial }) }), _jsx("img", { style: {
                                            transition: "opacity 0.5s ease-in-out",
                                        }, className: 'image', src: socialContri, alt: "Service 1", style: { width: '50%' } })] }) })] })
                :
                    _jsxs(Slider, { ...settings, children: [_jsxs(TabPanel, { children: [_jsx("p", { className: 'TextP', children: "Administrativos" }), _jsx("div", { className: 'corpSolutions', children: _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: servicioSocial }) }) })] }, 0), _jsxs(TabPanel, { children: [_jsx("p", { className: 'TextP', children: "Legales" }), _jsx("div", { className: 'corpSolutions', children: _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: legales }) }) })] }, 0), _jsxs(TabPanel, { children: [_jsx("p", { className: 'TextP', children: "Contables" }), _jsx("div", { className: 'corpSolutions', children: _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: contables }) }) })] }, 1), _jsxs(TabPanel, { children: [_jsx("p", { className: 'TextP', children: "Fiscales" }), _jsx("div", { className: 'corpSolutions', children: _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: fiscales }) }) })] }, 2), _jsxs(TabPanel, { children: [_jsx("p", { className: 'TextP', children: " Servicios de Contribuci\u00F3n Social" }), _jsx("div", { className: 'corpSolutions', children: _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: consSocial }) }) })] }, 3)] })] }));
};
export default OurServices;
