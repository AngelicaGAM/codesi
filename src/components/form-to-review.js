import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import emailjs from 'emailjs-com';

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'El nombre es requerido',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.empty': 'El correo es requerido',
    'string.email': 'El correo debe ser válido',
  }),
  phone: Joi.string().required().messages({
    'string.empty': 'El teléfono es requerido',
  }),
  message: Joi.string().required().messages({
    'string.empty': 'El mensaje es requerido',
  }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Reemplaza con tu ID de servicio de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplaza con tu ID de plantilla de EmailJS
        data,
        'YOUR_USER_ID' // Reemplaza con tu ID de usuario de EmailJS
      );
      alert('Mensaje enviado exitosamente');
      reset(); // Limpiar los campos del formulario después de un envío exitoso
    } catch (error) {
      console.error('Error al enviar el mensaje', error);
      alert('Hubo un problema al enviar el mensaje, inténtalo de nuevo');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nombre" {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}
      
      <input type="email" placeholder="Correo" {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input type="text" placeholder="Teléfono" {...register('phone')} />
      {errors.phone && <p>{errors.phone.message}</p>}
      
      <textarea placeholder="Mensaje" {...register('message')} />
      {errors.message && <p>{errors.message.message}</p>}
      
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
