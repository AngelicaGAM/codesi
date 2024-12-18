import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import image2 from '../assets/images/services/image2.jpg';
import image1 from '../assets/images/services/cel-2.jpg';
import image3 from '../assets/images/admin.jpg';
import image5 from '../assets/images/services/web-1.jpg';
import BasicList from './BasicList'
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
      {...other}
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
  ]

  const legales = [
    'Consultoría',
    '     Elaboración de contratos',
    '     Registro de Marca ante el IMPI',
    '     Gestión de tramites federales, estatales y municipales',
    ' Constitución empresarial',
    ' Elaboración de poderes legales',
  ]

  const contables = [
    '   Consultoría ',
    ' Procesos y registros contables',
    ' Administración de nómina',
    ' Generación de facturas',
  ]

  const fiscales = [
    '   Consultoría',
    ' Calculo de impuestos',
    ' Presentación de Declaraciones Federales (Impuestos DIOT)',
    ' Presentación de Impuestos Estatales (Impuestos sobre la Nomina, Hospedaje, Libre Profesión e Impuesto. Sobre Venta de Bebidas Alcohólicas). ',
    ' Presentación de Declaraciones Anuales ',
    ' Recuperación de Saldos a Favor ',

  ]

  const consSocial = [
    ' Registro y procedimientos de obra en SIROC ',
    '    Presentación de REPSE /ICSOE y SISUR  ',
    '  Calcullo de contribuciones de Seguridad Social (SIPARE)  ',

  ]

  return (
    <Box  id="serviciosRef" sx={{ width: '100%', marginTop: '3rem' }}>
      <h2  className='servicesBottom'> Nuestros Servicios</h2>


      <Box className='tabsC' sx={{ width: '100%' }}>
        <Tabs
          className='tabs-menu'
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          
          role="navigation"
        >
          <Tab wrapped label="Administrativos" />
          <Tab wrapped label="Legales" />
          <Tab wrapped label="Contables" />
          <Tab wrapped label="Fiscales" />

          <Tab wrapped label="Servicios de Contribución Social" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <div className='corpSolutions'>
            <div className='text-corp'>
              <BasicList items={servicioSocial} />
            </div>
              <img className='image' src={image3} alt="Service 1" style={{ width: '100%' }} />
          </div>

        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className='corpSolutions'>
            <img className='image' src={image5} alt="Service 1" style={{ width: '100%' }} />
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

            <img className='image' src={image1} alt="Service 1" style={{ width: '100%' }} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className='corpSolutions'>
            <img className='image' src={image2} alt="Service 1" style={{ width: '100%' }} />
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
            <img className='image' src={image5} alt="Service 1" style={{ width: '100%' }} />
          </div>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default OurServices;
