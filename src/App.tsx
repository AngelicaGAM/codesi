// @ts-nocheck
import React from 'react';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/Home/AboutUs';
import ContactForm from './components/ContactForm';
import OurServices from './components/OurServices';
import DesignedServices from './components/DesignedServices';
import LogoClients from './components/LogoClients';
import WhatsAppButton from './components/WhatsAppButton';
import PartnerCompany from './components/PartnerCompany';
import './font.css';
import './App.css';

import sukarne from '/images/logosClientes/suKarne.png';
import laCostena from '/images/logosClientes/laCostena.png';
import concienti from '/images/logosClientes/adriana2.jpg';
import genera from '/images/logosClientes/generaLux.png';
import kraken2 from '/images/logosClientes/kraken2.png';
import suites2 from '/images/logosClientes/suites2.jpg';
import octavio from '/images/logosClientes/santiago.png';
import capillasNegro from '/images/logosClientes/capillasNegro.png';
import TROPICAL2 from '/images/logosClientes/TROPICAL2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";


const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])


  const logos = [
    capillasNegro,
    kraken2,
    laCostena,
    sukarne,
    concienti,
    genera,
    octavio,
    suites2,
    TROPICAL2
  ]

  // const title = "Ofrecemos soluciones corporativas integrales";
  // const content = [
  //   "Que incluyen consultoría de negocios para alta dirección de empresa, consultoría financiera, consultoría de marketing, consultoría de gestión, consultoría contable y fiscal, consultoría de capital humano y consultoría jurídica.",
  //   "Nuestros servicios están diseñados para otorgarlos de manera presencial y en línea."
  // ];



  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <DesignedServices />
      <OurServices />
      <PartnerCompany />
      <LogoClients logos={logos} />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
