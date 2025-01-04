import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoClients.css';
const LogoClients = ({ logos }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, // Desplazarse de una en una
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const cardStyle = {
        width: "180px", // Tamaño de la card
        height: "180px", // Altura de la card
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px auto", // Centrando las cards con margen
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Sombra de la card
        borderRadius: "8px", // Borde redondeado
        backgroundColor: "red", // Fondo blanco para la card
        padding: "10px",
    };
    const logoStyle = {
        width: "130px", // Fijar el ancho de la imagen
        height: "140px", // Fijar la altura de la imagen
        objectFit: "contain", // Asegura que la imagen se ajuste sin distorsionar
    };
    // const titleStyle: React.CSSProperties = {
    //   textAlign: "center", // Centramos el texto
    //   marginBottom: "20px", // Margen inferior para separar del contenido
    //   fontSize: "24px", // Tamaño de fuente para el título
    //   fontWeight: "bold", // Negrita para el título
    // };
    return (_jsxs("div", { style: { width: "80%", margin: " 4rem auto 3rem auto ", }, children: [_jsx("h2", { className: 'servicesBottom', id: "clientes", children: "Nuestros Clientes" }), _jsx(Slider, { ...settings, children: logos.map((logo, index) => (_jsx("div", { className: "div-logo", style: cardStyle, children: _jsx("img", { src: logo, alt: `logo-cliente-${index}`, style: logoStyle }) }, index))) })] }));
};
export default LogoClients;