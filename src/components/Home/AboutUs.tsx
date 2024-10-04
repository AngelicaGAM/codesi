import React from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section
      style={{
        padding: '50px 20px',
        backgroundColor: '#f7f7f7',
        color: '#333',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         <h2 style={{ color: '#0056b3', marginBottom: '1rem' }}>Nuestra Misión</h2>
        <p style={{ maxWidth: '900px', margin: '20px auto', color: '#555' }}>
        Proporcionar servicios profesionales
de alta calidad y soluciones
corporativas, brindando un soporte
excepcional y personalizado a las
necesidades de nuestros clientes lo
que nos permite llegar a los objetivos
deseados y maximizar sus recursos.
        </p>
      </motion.div>
    
    </section>
  );
};

export default AboutUs;
