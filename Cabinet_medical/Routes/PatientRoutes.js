const express = require('express');
const path = require('path'); 
const router = express.Router();
// Authentification 
router.post('/auth', 
    (req, res) => { res.status(200).send({ message: 'Authentification réussie' }); }); 
// Gestion des Patients
 router.get('/:id',
     (req, res) => { res.status(200).send({ message: `Informations du patient ${req.params.id} récupérées` }); }); 
 router.put('/:id',
     (req, res) => { res.status(200).send({ message: `Informations du patient ${req.params.id} mises à jour` }); }); 
 // Gestion des Rendez-vous 
 router.get('/rendez_vous', 
    (req, res) => { res.status(200).send({ message: `Liste des rendez-vous pour l'utilisateur ${req.query.user}` }); }); 
 router.post('/rendez_vous',
     (req, res) => { res.status(201).send({ message: 'Nouveau rendez-vous créé' }); });
  router.put('/rendez_vous/:id', 
    (req, res) => { res.status(200).send({ message: `Rendez-vous ${req.params.id} mis à jour` }); }); 
  router.delete('/rendez_vous/:id',
     (req, res) => { res.status(200).send({ message: `Rendez-vous ${req.params.id} supprimé` }); }); 
  // Gestion des Prescriptions 
  router.get('/prescriptions',
     (req, res) => {  res.status(200).send({ message: `Liste des prescriptions pour l'utilisateur ${req.query.user}` })})
  module.exports = router;
