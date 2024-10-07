import React, { useState } from 'react';
import { Tabs, Tab, Box, TabContext, Typography } from '@mui/material';
import image2 from '../assets/images/services/image2.jpg';
import image from '../assets/images/services/cel-1.jpg';
import image1 from '../assets/images/services/cel-2.jpg';
import image3 from '../assets/images/services/cel-3.jpg';
import image4 from '../assets/images/services/cel-4.jpg';
import image5 from '../assets/images/services/web-1.jpg';



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
    <Box id="serviciosRef" sx={{ width: '100%', marginTop: '3rem' }}>
      <h2 className='servicesBottom'> Nuestros Servicios</h2>
      {/* <div className='circleDiv'>
        <div className='circleServices'> Administrativos </div>
        <div  className='circleServices'> Legales </div>
        <div  className='circleServices'> Fiscal </div>
        <div  className='circleServices'> Contables </div>
        <div  className='circleServices'> Servicios de Contribución Social </div>
      </div> */}

      <Box className='tabsC' sx={{ width: '100%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          centered
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
            <img className='image' src={image3} alt="Service 1" style={{ width: '100%' }} />
          </div>

        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className='corpSolutions'>
            <img className='image' src={image5} alt="Service 1" style={{ width: '100%' }} />
            <div className='text-corp'>
              <ul>
                <li> Consultoría</li>
                <li>      Elaboración de contratos</li>
                <li>      Registro de Marca ante el IMPI</li>
                <li>      Gestión de tramites federales, estatales y municipales</li>
                <li>  Constitución empresarial</li>
                <li>  Elaboración de poderes legales</li>
              </ul>
            </div>

          </div>

        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className='corpSolutions'>
            <div className='text-corp'>
              <ul>
                <li>   Consultoría  </li>
                <li> Procesos y registros contables </li>
                <li> Administración de nómina </li>
                <li> Generación de facturas </li>
              </ul>
            </div>

            <img className='image' src={image1} alt="Service 1" style={{ width: '100%' }} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className='corpSolutions'>
            <img className='image' src={image2} alt="Service 1" style={{ width: '100%' }} />
            <div className='text-corp'>
              <ul>
                <li>   Consultoría</li>
                <li> Calculo de impuestos</li>
                <li> Presentación de Declaraciones Federales <br></br> (Impuestos DIOT)</li>
                <li> Presentación de Impuestos Estatales (Impuestos  <br></br>sobre la Nomina, Hospedaje, Libre Profesión e Impuesto <br></br> Sobre Venta de Bebidas Alcohólicas). </li>
                <li> Presentación de Declaraciones Anuales </li>
                <li> Recuperación de Saldos a Favor </li>
              </ul>
            </div>
          </div>
        </TabPanel>


        <TabPanel value={value} index={4}>
          <div className='corpSolutions'>

            <div className='text-corp'>
              <ul>
                <li> Registro y procedimientos de obra en SIROC </li>
                <li>    Presentación de REPSE /ICSOE y SISUR  </li>
                <li>  Calcullo de contribuciones de Seguridad Social (SIPARE)  </li>
              </ul>
            </div>
            <img className='image' src={image5} alt="Service 1" style={{ width: '100%' }} />
          </div>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default OurServices;
