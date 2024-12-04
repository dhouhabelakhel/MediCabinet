const Medcien = require('../Models/Medcien');
const jwt = require('jsonwebtoken');
const patient=require('../Models/Patient');
const rdv=require('../Models/Rdv');
const moment = require('moment');
const startOfDay = moment().startOf('day').toDate();
 const endOfDay = moment().endOf('day').toDate();
exports.dashboard=async (req, res) => {
    const listeRdvs = await rdv.find({
        date_rdv: {
            $gte: startOfDay,
            $lte: endOfDay
        }
    }).populate('patient');
     const totalPatients = await patient.countDocuments();
    const totalRdvs = await rdv.countDocuments(
      {  date_rdv: {
            $gte: startOfDay,
            $lte: endOfDay
        }}
    );
    res.status(200).render('layout',{body:"dashboard",admin:req.admin,listeRdvs,totalPatients,totalRdvs});
};

exports.auth = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        const listeRdvs = await rdv.find({
            date_rdv: {
                $gte: startOfDay,
                $lte: endOfDay
            }
        }).populate('patient');
       const totalPatients = await patient.countDocuments();
        const totalRdvs = await rdv.countDocuments(
          {  date_rdv: {
                $gte: startOfDay,
                $lte: endOfDay
            }}
        );
        const med = await Medcien.findOne({ email });
        if (!med) {
            return res.status(401).send('Invalid credentials');
        }

        const isMatch = password === med.mot_de_passe; 
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        const token = jwt.sign({ id: med._id }, 'secretkey', { expiresIn: '1h' });
        res.cookie('auth_token', token, { httpOnly: true });
        res.status(200).render('layout',{ body: "dashboard" ,admin:med,listeRdvs,totalPatients,totalRdvs});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Error logging in');
    }
};
exports.patients=async(req,res)=>{
    listePatients= await patient.find()
    res.status(200).render('layout',{body:"Patients",listePatients,admin: req.admin});
}
exports.profil=async(req,res)=>{
    res.status(200).render('layout',{body:"profil",admin: req.admin});
}
exports.rdvs=async (req, res) => {
    listeRdvs=await rdv.find( {  date_rdv: {
        $gte: startOfDay,
    }}).populate('patient');
    res.status(200).render('layout',{body:"appointments",listeRdvs,admin:req.admin});
}
exports.update = async (req, res) => { 
    try { 
    const medecinId = req.id;
    console.log(req.body);
     const updates = req.body; 
      const options = { new: true }; 
      const updatedMedecin = await Medcien.findByIdAndUpdate(medecinId, updates, options);
       if (!updatedMedecin) {
         return res.status(404).send('Medecin not found'); 
       } 
       res.status(200).send(updatedMedecin);
     } 
       catch (error) { 
        console.error('Error updating medecin:', error); 
        res.status(500).send('Error updating medecin');
     } 
    };
