const express = require('express');
const path = require('path'); 
const router = express.Router();
const medcienController=require('../Controllers/medecienController')
const verifyToken = require('../Middleware/verifyToken'); 
const logoutMiddelware=require('../Middleware/logoutMiddelware')
router.get('/auth',logoutMiddelware, (req, res) => {
    res.status(200).render('login');});
router.post('/auth', medcienController.auth)

// Dashboard
router.get('/dashboard', verifyToken,medcienController.dashboard)
router.get('/profil',verifyToken,medcienController.profil);
//gestio du compte
router.post('/update',verifyToken,medcienController.update)
// Gestion des Rendez-vous
router.get('/rendez_vous',verifyToken,medcienController.rdvs);
router.post('/rendez_vous', (req, res) => {
    res.status(200).send('rdv ajouter avec succées');
});
router.get('/rendez_vous/:userId', (req, res) => {
    res.status(200).send('Liste des rendez-vous d’un patient');
});
router.delete('/rendez_vous/:id', (req, res) => {
    res.status(200).send('suppression réussie');
});
router.put('/rendez_vous/:id', (req, res) => {
    res.status(200).send('mise à jour réussie');
});

// Gestion des Consultations
router.get('/consultations', (req, res) => {
    res.status(200).render('appointments.ejs')
});
router.post('/consulations', (req, res) => {
    res.status(200).send('consultation ajouter avec succées');
});
router.get('/consultations/:id', (req, res) => {
    res.status(200).send('Détails de la consultation');
});
router.delete('/consultations/:id', (req, res) => {
    res.status(200).send('suppression réussie');
});
router.put('/consultations/:id', (req, res) => {
    res.status(200).send('mise à jour réussie');
});


// Gestion des Prescriptions
router.get('/prescriptions', (req, res) => {
    res.status(200).send('Historique des prescriptions');
});

router.post('/prescriptions', (req, res) => {
    res.status(201).send('Nouvelle prescription créée');
});

router.put('/prescriptions/:id', (req, res) => {
    res.status(200).send(`Prescription ${req.params.id} mise à jour`);
});

// Gestion des Patients
router.get('/patients',verifyToken,medcienController.patients);

router.get('/patients/:id', (req, res) => {
    res.status(200).send(`Détails du patient ${req.params.id}`);
});

router.post('/patients', (req, res) => {
    res.status(201).send('Nouveau patient ajouté');
});

router.put('/patients/:id', (req, res) => {
    res.status(200).send(`Informations du patient ${req.params.id} mises à jour`);
});

router.delete('/patients/:id', (req, res) => {
    res.status(200).send(`Patient ${req.params.id} supprimé`);
});


module.exports = router;
