import express from 'express';
import mongoose from 'mongoose';

const Usuarios = mongoose.model('Usuarios', new mongoose.Schema({
  usuario: String,
  correo: String,
  clave: String,
}));

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://root:r0O7@mongohmgz:27017/mibd?authSource=admin')
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Rutas
app.get('/', async (_req, res) => {
  console.log("listado de usuarios ...");
  const usuarios = await Usuarios.find();
  return res.send(usuarios);
});

app.get('/crear', async (_req, res) => {
  console.log("Insertando ...");
  await Usuarios.create({
    usuario: 'harol',
    correo: 'hmgomezz@sena.edu.co',
    clave: '12345'
  });
  return res.send("OK");
});

app.get('/nueva', (_req, res) => {
  return res.send("ruta creada en desarrollo OK");
});

app.get('/otra', (_req, res) => {
  return res.send("ruta creada en desarrollo OK");
});

app.get('/de_nuevo', (_req, res) => {
  return res.send("ruta creada en desarrollo OK");
});

// ✅ Usar el puerto dinámico de Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Escuchando en el puerto: ${PORT}`));
