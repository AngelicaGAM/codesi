import { jsx as _jsx } from "react/jsx-runtime";
import { Fab } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppButton = () => {
    const handleClick = () => {
        //const phoneNumber = "+529983030726"; // Reemplaza con tu número de teléfono
        //const message = "¡Hola! Me gustaría obtener más información.";
        const url = "https://wa.me/message/BZEQK43VJOIZF1";
        window.open(url, '_blank');
    };
    return (_jsx(Fab, { onClick: handleClick, sx: {
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: '#25D366',
            color: 'white',
            '&:hover': {
                backgroundColor: '#1DA851'
            }
        }, "aria-label": "Contactar por WhatsApp", children: _jsx(FaWhatsapp, { size: 24 }) }));
};
export default WhatsAppButton;
