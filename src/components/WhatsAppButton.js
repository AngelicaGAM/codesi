import { jsx as _jsx } from "react/jsx-runtime";
import { Fab } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
const WhatsAppButton = () => {
    const handleClick = () => {

        const url = "https://wa.me/message/BZEQK43VJOIZF1";
        window.open(url, '_blank');
    };
    return (_jsx(Fab, { onClick: handleClick, sx: {
            position: 'fixed',
            bottom: 16,
            right: 16,
            backgroundColor: '#25D366',
            boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#1DA851'
            }
        }, "aria-label": "Contactar por WhatsApp", children: _jsx(FaWhatsapp, { size: 24 }) }));
};
export default WhatsAppButton;
