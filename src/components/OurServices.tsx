// @ts-nocheck

import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import socialContri from '/images/services/clients.png';
import image3 from '/images/services/admin3.jpg';
import image5 from '/images/services/web-1.jpg';
import contabilidadImg from '/images/services/contabilidad.jpg'
import taxes from '/images/services/taxes.png';
import BasicList from './BasicList';
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive';
import './OurServices.css';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      style={{ transition: "opacity 0.5s ease-in-out" }}
      {...other}
      style={{
        opacity: value === index ? 1 : 0, // Transición de opacidad
        transform: value === index ? "translateX(0)" : "translateX(-100%)", // Desplazamiento hacia la izquierda
        transition: "opacity 0.5s ease, transform 0.5s ease", // Transición de opacidad y desplazamiento
      }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const OurServices: React.FC = () => {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
  ]

  const legales = [
    'Consultoría.',
    'Elaboración de contratos.',
    'Registro de Marca ante el IMPI.',
    'Gestión de tramites federales, estatales y municipales.',
    'Constitución empresarial.',
    'Elaboración de poderes legales.',
  ]

  const contables = [
    '   Consultoría. ',
    ' Procesos y registros contables.',
    ' Administración de nómina.',
    ' Generación de facturas.',
  ]

  const fiscales = [
    ' Consultoría.',
    ' Cálculo de impuestos.',
    ' Presentación de Declaraciones Federales (Impuestos DIOT).',
    ' Presentación de Impuestos Estatales (Impuestos sobre la Nomina, Hospedaje, Libre Profesión e Impuesto). ',
    ' Presentación de Declaraciones Anuales. ',
    ' Recuperación de Saldos a Favor. ',

  ]

  const consSocial = [
    ' Registro y procedimientos de obra en SIROC. ',
    '    Presentación de REPSE /ICSOE y SISUR.  ',
    '  Calcullo de contribuciones de Seguridad Social (SIPARE).  ',

  ]

  return (
    <Box id="servicios" sx={{ width: '100%', marginTop: '3rem' }}>
      <p className='titlesGC servicesBottom'> Nuestros Servicios</p>
      { !isMobile ? 
       <Box className='tabsC'
       sx={{
         width: "100%",
         overflowX: "auto",
         WebkitOverflowScrolling: "touch",
       }}>
       <Tabs
         className='tabs-menu'
         value={value}
         onChange={handleChange}
         variant="scrollable" // Habilita desplazamiento horizontal
         scrollButtons="auto" // Botones visibles si el scroll es necesario
         allowScrollButtonsMobile // Activa botones en dispositivos móviles
         sx={{
           borderLeft: 1,
           "& .MuiTabs-scrollButtons": {
             "&.Mui-disabled": { opacity: 0.3 }, // Mejora la visibilidad de los botones
           },
         }}
       >

         <Tab label="Administrativos" />
         <Tab label="Legales" />
         <Tab label="Contables" />
         <Tab label="Fiscales" />

         <Tab label="Servicios de Contribución Social" />
       </Tabs>

       <TabPanel value={value} index={0}>
         <div className='corpSolutions'>
           <div className='text-corp'>
             <BasicList items={servicioSocial} />
           </div>
           <img style={{
             transition: "opacity 0.5s ease-in-out",
           }}

             className='image' src={image3} alt="Service 1" style={{ width: '50%' }} />
         </div>

       </TabPanel>

       <TabPanel value={value} index={1}>
         <div className='corpSolutions'>
           <img style={{
             transition: "opacity 0.5s ease-in-out",
           }}
             className='image' src={image5} alt="Service 1" style={{ width: '50%' }} />
           <div className='text-corp'>
             <BasicList items={legales} />
           </div>

         </div>

       </TabPanel>

       <TabPanel value={value} index={2}>
         <div className='corpSolutions'>
           <div className='text-corp'>
             <BasicList items={contables} />
           </div>

           <img style={{
             transition: "opacity 0.5s ease-in-out",
           }}
             className='image' src={contabilidadImg} alt="Service 1" style={{ width: '50%' }} />
         </div>
       </TabPanel>
       <TabPanel value={value} index={3}>
         <div className='corpSolutions'>
           <img style={{
             transition: "opacity 0.5s ease-in-out",
           }}
             className='image' src={taxes} alt="Service 1" style={{ width: '50%' }} />
           <div className='text-corp'>
             <BasicList items={fiscales} />
           </div>
         </div>
       </TabPanel>


       <TabPanel value={value} index={4}>
         <div className='corpSolutions'>

           <div className='text-corp'>
             <BasicList items={consSocial} />
           </div>
           <img style={{
             transition: "opacity 0.5s ease-in-out",
           }}
             className='image' src={socialContri} alt="Service 1" style={{ width: '50%' }} />
         </div>
       </TabPanel>
     </Box>
      :
      <Slider {...settings}>
         <TabPanel key={0}>
          <p className='TextP'>Administrativos</p>
          <div className='corpSolutions'>
            <div className='text-corp'>
              <BasicList items={servicioSocial} />
            </div>
         </div>
       </TabPanel>
       <TabPanel key={0}>
          <p className='TextP'>Legales</p>
          <div className='corpSolutions'>
            <div className='text-corp'>
              <BasicList items={legales} />
            </div>
         </div>
       </TabPanel>
       <TabPanel key={1}>
          <p className='TextP'>Contables</p>
          <div className='corpSolutions'>
            <div className='text-corp'>
              <BasicList items={contables} />
            </div>
         </div>
       </TabPanel>
       <TabPanel key={2}>
          <p className='TextP'>Fiscales</p>
          <div className='corpSolutions'>
            <div className='text-corp'>
              <BasicList items={fiscales} />
            </div>
         </div>
       </TabPanel>
       <TabPanel key={3}>
          <p className='TextP'> Servicios de Contribución Social</p>
          <div className='corpSolutions'>
            <div className='text-corp'>
              <BasicList items={consSocial} />
            </div>
         </div>
       </TabPanel>
      
      </Slider>
      }
     
      
    </Box>
  );
};

export default OurServices;
