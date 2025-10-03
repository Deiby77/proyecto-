import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carga variables de entorno desde .env
dotenv.config();

const Usuarios = mongoose.model('Usuarios', new mongoose.Schema({
    usuario: String,
    correo: String,
    clave: String,
}));

const app = express();

// Conexión a MongoDB usando la URI de Atlas desde variable de entorno
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Rutas
app.get('/', async (_req, res) => {
    console.log("listado de usuarios ...");
    try {
        const usuarios = await Usuarios.find();
        return res.send(usuarios);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Error interno del servidor");
    }
});

app.get('/crear', async (_req, res) => {
    console.log("Insertando ...");
    try {
        await Usuarios.create({
            usuario: 'harol',
            correo: 'hmgomezz@sena.edu.co',
            clave: '12345'
        });
        return res.send("OK");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Error interno del servidor");
    }
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

// Puerto dinámico para Render u otro entorno
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Escuchando en el puerto: ${PORT}`));
