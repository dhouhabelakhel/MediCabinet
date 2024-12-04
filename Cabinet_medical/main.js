const express=require('express')
const bodyParser=require('body-parser')
const path = require('path'); 
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app=express()
const PORT=3000;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/medicabinet', {
  }).then(() => {
    console.log('Connecté à MongoDB');
  }).catch(err => {
    console.error('Erreur de connexion à MongoDB :', err);
  });

app.use(express.static(path.join(__dirname, 'assets'))); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser()); 
const MedcienRouter=require('./Routes/MedcienRoutes');
const PatientRouter=require('./Routes/PatientRoutes');
app.set('views', path.join(__dirname, 'views')); 
 app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',MedcienRouter);
app.use('/api/patients',PatientRouter);

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}/`);

})