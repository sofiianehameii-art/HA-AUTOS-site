const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// 🔧 Configuration
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// 📦 Import des routes
const vehicleRoutes = require('./routes/vehicleRoutes');

// 🌐 Utilisation des routes
app.use('/api/vehicles', vehicleRoutes);

// 🔌 Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connecté à MongoDB'))
.catch((err) => console.error('❌ Erreur MongoDB :', err));

// 🧪 Route de test
app.get('/', (req, res) => {
  res.send('Serveur HA AUTOS opérationnel !');
});

// 🚀 Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
