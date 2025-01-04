import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import * as Joi from 'joi';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Estilos mejorados
import banner1 from '/images/banner1.jpg';
import { useMediaQuery } from 'react-responsive';
import Swal from 'sweetalert2';
const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.empty': 'El nombre es requerido',
        'string.min': 'El nombre debe tener al menos 3 caracteres',
        'string.max': 'El nombre no puede tener más de 30 caracteres',
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.empty': 'El email es requerido',
        'string.email': 'Formato de email inválido',
    }),
    phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required().messages({
        'string.empty': 'El teléfono es requerido',
        'string.pattern.base': 'Formato de teléfono inválido',
        'string.min': 'El teléfono debe tener al menos 10 caracteres',
        'string.max': 'El teléfono no puede tener más de 15 caracteres',
    }),
    message: Joi.string().min(10).required().messages({
        'string.empty': 'El mensaje es requerido',
        'string.min': 'El mensaje debe tener al menos 10 caracteres',
    }),
});
const ContactForm = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: joiResolver(schema),
    });
    const onSubmit = (data) => {
        emailjs.send('service_rfzvygg', //  SERVICE_ID
        'template_zphh3rv', // TEMPLATE_ID
        {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
        }, '4Ip8_xEQ11eTtJ6oO' // USER_ID
        ).then(() => {
            reset();
            Swal.fire({
                title: " ¡Recibimos tu mensaje!  ",
                html: "Nuestro equipo se pondra en contacto contigo pronto.",
                showConfirmButton: false,
                icon: "success",
                showClass: {
                    popup: 'swal2-show',
                    backdrop: 'swal2-backdrop-show',
                    icon: 'swal2-icon-show'
                },
                hideClass: {
                    popup: 'swal2-hide',
                    backdrop: 'swal2-backdrop-hide',
                    icon: 'swal2-icon-hide'
                }
            });
        }).catch(() => {
            Swal.fire({
                title: " ¡Oh no!  ",
                html: "Lo sentimos, hubo un error al enviar tu correo. <br/> Intenta más tarde.",
                showConfirmButton: false,
                icon: "error",
                showClass: {
                    popup: 'swal2-show',
                    backdrop: 'swal2-backdrop-show',
                    icon: 'swal2-icon-show'
                },
                hideClass: {
                    popup: 'swal2-hide',
                    backdrop: 'swal2-backdrop-hide',
                    icon: 'swal2-icon-hide'
                }
            });
        });
    };
    return (_jsxs("div", { id: "contacto", className: "contact-container", children: [_jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "contact-form", children: [_jsx("h2", { className: 'servicesBottom', children: "Cont\u00E1ctanos" }), _jsxs("div", { className: 'container-div', children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Nombre" }), _jsx("input", { id: "name", ...register('name') })] }), _jsx("div", { className: 'div-error', children: errors.name && _jsx("p", { className: "error-message", children: errors.name.message }) })] }), _jsxs("div", { className: 'container-div', children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { id: "email", ...register('email') })] }), _jsx("div", { className: 'div-error', children: errors.email && _jsx("p", { className: "error-message", children: errors.email.message }) })] }), _jsxs("div", { className: 'container-div', children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "phone", children: "Tel\u00E9fono" }), _jsx("input", { id: "phone", ...register('phone') })] }), _jsx("div", { className: 'div-error', children: errors.phone && _jsx("p", { className: "error-message", children: errors.phone.message }) })] }), _jsxs("div", { className: 'container-div', children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "message", children: "Mensaje" }), _jsx("textarea", { id: "message", ...register('message') })] }), _jsx("div", { className: 'div-error', children: errors.message && _jsx("p", { className: "error-message", children: errors.message.message }) })] }), _jsx("button", { type: "submit", children: "Enviar Mensaje" })] }), !isMobile &&
                _jsxs("div", { className: "contact-banner", children: [_jsx("img", { src: banner1, alt: "Banner" }), " "] })] }));
};
export default ContactForm;
