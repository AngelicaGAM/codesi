import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import socialContri from '/images/services/clients.png';
import image3 from '/images/services/admin2.png';
import image5 from '/images/services/web-1.jpg';
import contabilidadImg from '/images/services/contabilidad.jpg';
import taxes from '/images/services/taxes.png';
import BasicList from './BasicList';
import './OurServices.css';
const TabPanel = ({ children, value, index, ...other }) => {
    return (_jsx("div", { role: "tabpanel", hidden: value !== index, id: `full-width-tabpanel-${index}`, ...other, children: value === index && (_jsx(Box, { sx: { p: 3 }, children: _jsx(Typography, { children: children }) })) }));
};
const OurServices = () => {
    const [value, setValue] = useState(0);
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const servicioSocial = [
        'Consultoría ',
        'Administración de negocios',
        'Elaboración de manuales de procesos',
        'Elaboración de programas internos y planes de emergencia',
        'Elaboración de Programas internos',
        'Elaboración de Planes de Emergencia',
        'Elaboración de Dictámenes Eléctricos',
        'Constancias de Primeros Auxilios y Evacuación',
    ];
    const legales = [
        'Consultoría',
        '     Elaboración de contratos',
        '     Registro de Marca ante el IMPI',
        '     Gestión de tramites federales, estatales y municipales',
        ' Constitución empresarial',
        ' Elaboración de poderes legales',
    ];
    const contables = [
        '   Consultoría ',
        ' Procesos y registros contables',
        ' Administración de nómina',
        ' Generación de facturas',
    ];
    const fiscales = [
        '   Consultoría',
        ' Calculo de impuestos',
        ' Presentación de Declaraciones Federales (Impuestos DIOT)',
        ' Presentación de Impuestos Estatales (Impuestos sobre la Nomina, Hospedaje, Libre Profesión e Impuesto. Sobre Venta de Bebidas Alcohólicas). ',
        ' Presentación de Declaraciones Anuales ',
        ' Recuperación de Saldos a Favor ',
    ];
    const consSocial = [
        ' Registro y procedimientos de obra en SIROC ',
        '    Presentación de REPSE /ICSOE y SISUR  ',
        '  Calcullo de contribuciones de Seguridad Social (SIPARE)  ',
    ];
    return (_jsxs(Box, { id: "serviciosRef", sx: { width: '100%', marginTop: '3rem' }, children: [_jsx("h2", { className: 'servicesBottom', children: " Nuestros Servicios" }), _jsxs(Box, { className: 'tabsC', sx: { width: '100%' }, children: [_jsxs(Tabs, { className: 'tabs-menu', value: value, onChange: handleChange, indicatorColor: "secondary", textColor: "inherit", variant: "scrollable", scrollButtons: false, allowScrollButtonsMobile: true, role: "navigation", children: [_jsx(Tab, { wrapped: true, label: "Administrativos" }), _jsx(Tab, { wrapped: true, label: "Legales" }), _jsx(Tab, { wrapped: true, label: "Contables" }), _jsx(Tab, { wrapped: true, label: "Fiscales" }), _jsx(Tab, { wrapped: true, label: "Servicios de Contribuci\u00F3n Social" })] }), _jsx(TabPanel, { value: value, index: 0, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: servicioSocial }) }), _jsx("img", { className: 'image', src: image3, alt: "Service 1", style: { width: '100%' } })] }) }), _jsx(TabPanel, { value: value, index: 1, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("img", { className: 'image', src: image5, alt: "Service 1", style: { width: '100%' } }), _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: legales }) })] }) }), _jsx(TabPanel, { value: value, index: 2, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: contables }) }), _jsx("img", { className: 'image', src: contabilidadImg, alt: "Service 1", style: { width: '100%' } })] }) }), _jsx(TabPanel, { value: value, index: 3, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("img", { className: 'image', src: taxes, alt: "Service 1", style: { width: '100%' } }), _jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: fiscales }) })] }) }), _jsx(TabPanel, { value: value, index: 4, children: _jsxs("div", { className: 'corpSolutions', children: [_jsx("div", { className: 'text-corp', children: _jsx(BasicList, { items: consSocial }) }), _jsx("img", { className: 'image', src: socialContri, alt: "Service 1", style: { width: '100%' } })] }) })] })] }));
};
export default OurServices;
