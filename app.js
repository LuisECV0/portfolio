const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(cors());

// Configuración de transporte de nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'luiscv1719@gmail.com',
    pass: 'szvqqkehmgqrdqkz'
  }
});

app.post('/enviar-correo', async (req, res) => {
  const { nombres, correo, mensaje } = req.body;

  if (!nombres) {
    return res.status(400).json({ success: false, message: 'Debe proporcionar un nombre' });
  }

  if (!correo) {
    return res.status(400).json({ success: false, message: 'Debe proporcionar un correo' });
  }

  if (!mensaje) {
    return res.status(400).json({ success: false, message: 'Debe proporcionar un mensaje' });
  }

  const texto = `${nombres}\n${correo}\n${mensaje}`;

  const mensajeCorreo = {
    from: 'luiscv1719@gmail.com',
    to: correo,
    subject: 'Mensaje de contacto',
    text: texto
  };

  try {
    await transporter.sendMail(mensajeCorreo);
    console.log('Correo enviado con éxito');
    res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor se encuentra corriendo en el puerto: ${PORT}`);
});
