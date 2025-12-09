// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connecté ✅'))
.catch(err => console.error('Erreur MongoDB ❌', err));

// Exemple de route
app.get('/', (req, res) => {
    res.send('HA AUTOS backend fonctionne !');
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT} 🚀`);
});
