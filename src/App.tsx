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

import crystal from './assets/images/logosClientes/CRYSTAL.webp';
import yeahSmile from './assets/images/logosClientes/yeahsmile.png';
import hospital from './assets/images/logosClientes/hospitalAngels.jpeg';
import kratz from './assets/images/logosClientes/krastz.jpg';
import sukarne from './assets/images/logosClientes/suKarne.png';
import santaClara from './assets/images/logosClientes/santaClara.jpg';
import laCostena from './assets/images/logosClientes/laCostena.png';
import AOS from "aos";
import "aos/dist/aos.css";


const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  const people = [
    { name: 'Erik Axel Rangel Alvarez', position: 'L.C', photoUrl: 'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person(pp_w480_h610).jpg' },
    { name: 'Jonathan Oswaldo Álvarez Flores ', position: 'CP & L.D', photoUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { name: 'David Castillo Garcia', position: 'L.C & MBA', photoUrl: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
  ];

  const logos = [
    crystal,
    yeahSmile,
    hospital,
    kratz,
    sukarne,
    santaClara,
    laCostena
  ]

  const title = "Ofrecemos soluciones corporativas integrales";
  const content = [
    "Que incluyen consultoría de negocios para alta dirección de empresa, consultoría financiera, consultoría de marketing, consultoría de gestión, consultoría contable y fiscal, consultoría de capital humano y consultoría jurídica.",
    "Nuestros servicios están diseñados para otorgarlos de manera presencial y en línea."
  ];



  return (
    <div className="App">
      <Header />
      <Home />


      <AboutUs />
      <DesignedServices />
      <OurServices title={title} content={content} />

    
      <PartnerCompany />
      <LogoClients logos={logos} />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;
