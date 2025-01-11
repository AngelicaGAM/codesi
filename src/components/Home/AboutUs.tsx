
const AboutUs: React.FC = () => {

  return (
    <section

      style={{
        padding: '50px 20px',
        backgroundColor: '#04154012',
        color: '#333',
        overflow: "hidden",
        textAlign: 'center'
      }}
    >
      <p className='titlesGC servicesBottom'> Nuestra Misión</p>
      <p style={{ maxWidth: '900px', margin: '20px auto', color: '#555', fontWeight:'600' }}>
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
