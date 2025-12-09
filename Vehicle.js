const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  marque: { type: String, required: true },
  modele: { type: String, required: true },
  annee: { type: Number, required: true },
  prix: { type: Number, required: true },
  kilometrage: { type: Number },
  carburant: { type: String },
  boite: { type: String },
  description: { type: String },
  imageUrl: { type: String }, // URL de l'image de la voiture
}, {
  timestamps: true
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
