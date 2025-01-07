import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import crystal from '/images/logosClientes/CRYSTAL.webp';
import yeahSmile from '/images/logosClientes/yeahsmile.png';
import hospital from '/images/logosClientes/hospitalAngels.jpeg';
import kratz from '/images/logosClientes/krastz.jpg';
import sukarne from '/images/logosClientes/suKarne.png';
import santaClara from '/images/logosClientes/santaClara.jpg';
import laCostena from '/images/logosClientes/laCostena.png';
import concienti from '/images/logosClientes/adriana2.jpg';
import genera from '/images/logosClientes/genera2.jpg';
import kraken2 from '/images/logosClientes/kraken2.png';
import suites2 from '/images/logosClientes/suites2.jpg';
import octavio from '/images/logosClientes/octavio2.jpeg';
import therapy from '/images/logosClientes/therapy.png';
import TROPICAL2 from '/images/logosClientes/TROPICAL2.jpg';
import qprestige from '/images/logosClientes/qprestige.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    const logos = [
        kraken2,
        santaClara,
        laCostena,
        yeahSmile,
        hospital,
        kratz,
        therapy,
        sukarne,
        crystal,
        concienti,
        genera,
        qprestige,
        octavio,
        suites2,
        TROPICAL2
    ];
    // const title = "Ofrecemos soluciones corporativas integrales";
    // const content = [
    //   "Que incluyen consultoría de negocios para alta dirección de empresa, consultoría financiera, consultoría de marketing, consultoría de gestión, consultoría contable y fiscal, consultoría de capital humano y consultoría jurídica.",
    //   "Nuestros servicios están diseñados para otorgarlos de manera presencial y en línea."
    // ];
    return (_jsxs("div", { className: "App", children: [_jsx(Header, {}), _jsx(Home, {}), _jsx(AboutUs, {}), _jsx(DesignedServices, {}), _jsx(OurServices, {}), _jsx(PartnerCompany, {}), _jsx(LogoClients, { logos: logos }), _jsx(ContactForm, {}), _jsx(WhatsAppButton, {}), _jsx(Footer, {})] }));
};
export default App;
