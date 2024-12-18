import React from 'react';

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

      <h2  className='servicesBottom'> Nuestra Misión</h2>
      <p style={{ maxWidth: '900px', margin: '20px auto', color: '#555' }}>
        Proporcionar servicios profesionales
        de alta calidad y soluciones
        corporativas, brindando un soporte
        excepcional y personalizado a las
        necesidades de nuestros clientes lo
        que nos permite llegar a los objetivos
        deseados y maximizar sus recursos.
      </p>

    </section>
  );
};

export default AboutUs;
