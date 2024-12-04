const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medcienSchema = new Schema({
  nom_prenom: {
    type: String,
    required: true
  },
  photo:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mot_de_passe: {
    type: String,
    required: true
  },
  spacialite: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    unique: true,
    required: true
  },
  genre: {
    type: String,
    enum: ['f', 'm'],
    required: true
  },
  adresse_cabinet: {
    type: String,
    required: true
  }
});

const Medcien = mongoose.model('medcien', medcienSchema);

module.exports = Medcien;
