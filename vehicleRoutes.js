const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// GET – Voir tous les véhicules
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find().sort({ createdAt: -1 });
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des véhicules' });
  }
});

// POST – Ajouter un véhicule
router.post('/', async (req, res) => {
  try {
    const newVehicle = new Vehicle(req.body);
    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (err) {
    res.status(400).json({ error: 'Erreur lors de l’ajout du véhicule' });
  }
});

// DELETE – Supprimer un véhicule par ID
router.delete('/:id', async (req, res) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.json({ message: 'Véhicule supprimé' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  }
});

module.exports = router;
