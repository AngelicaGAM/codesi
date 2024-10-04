import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import image2 from '../assets/images/services/image2.jpg';
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
 
  return (
    <Box sx={{ width: '100%', marginTop: '3rem' }}>
      <h2> Nuestros Servicios</h2>
      <div className='circleDiv'>
        <div className='circleServices'> Administrativos </div>
        <div  className='circleServices'> Legales </div>
        <div  className='circleServices'> Fiscal </div>
        <div  className='circleServices'> Contables </div>
        <div  className='circleServices'> Servicios de Contribución Social </div>
      </div>

      <div>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Administrativos" />
          <Tab label="Legales" />
          <Tab label="Fiscal" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <div className='corpSolutions'>
            <div className='text-corp'>
              <ul>
                <li>  Consultoría </li>
                <li>  Administración de negocios</li>
                <li>  Elaboración de manuales de procesos</li>
                <li>  Elaboración de programas internos y planes de emergencia</li>
                <li>  Elaboración de Programas internos</li>
                <li>  Elaboración de Planes de Emergencia</li>
                <li>  Elaboración de Dictámenes Eléctricos</li>
                <li>  Elaboración de Dictámenes de Gas</li>
                <li>  Constancias de Primeros Auxilios y Evacuación</li>
              </ul>
            </div>
            <img className='image' src={image2} alt="Service 1" style={{ width: '100%' }} />
          </div>

        </TabPanel>

        <TabPanel value={value} index={1}>
          <img className='image' src={image2} alt="Service 1" style={{ width: '100%' }} />
          <ul>
            <li> Consultoría</li>
            <li>      Elaboración de contratos</li>
            <li>      Registro de Marca ante el IMPI</li>
            <li>      Gestión de tramites federales, estatales y municipales</li>
            <li>  Constitución empresarial</li>
            <li>  Elaboración de poderes legales</li>
          </ul>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <ul>
            <li></li>
          </ul>
          <img className='image' src={image2} alt="Service 1" style={{ width: '100%' }} />
        </TabPanel>
      </div>
    </Box>
  );
};

export default OurServices;
