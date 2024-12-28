import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {   FaBusinessTime, FaProjectDiagram, FaRegLightbulb } from 'react-icons/fa';
import { BiWorld } from "react-icons/bi";

const services = [
  { name: "Empresas Internacionales", icon: <BiWorld size={40} /> },
  { name: "Emprendedores", icon: <FaRegLightbulb size={40} /> },
  { name: "Empresas en Expansión", icon: <FaBusinessTime size={40} /> },
  { name: "Matriz y Sucursales", icon: <FaProjectDiagram size={40} /> },
  { name: "Franquicias", icon: <FaRegLightbulb size={40} /> }
];

const DesignedServices: React.FC = () => {
  return (
    <Box 
    className='boxServices'
     sx={{ textAlign: 'center', padding: '40px 20px' }}>
      <p className='titleServices'>  
        Nuestros  <h2> Servicios Profesionales </h2> están diseñados para: </p>
    

      <div className='gridServices'>
        {services.map((service, index) => (
          <div  key={index}>
            <Box
              sx={{
                width: 170,
                height: 170,
                backgroundColor: '#051d40',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow:'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)'
                }
              }}
            >
              {service.icon}
              <Typography variant="body1" sx={{ textAlign: 'center', marginTop: '10px' }}>
                {service.name}
              </Typography>
            </Box>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default DesignedServices;
