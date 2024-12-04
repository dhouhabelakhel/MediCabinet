const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
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
  tel: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    enum: ['f', 'm'],
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  groupe_sanguin: {
    type: String,
    enum: ['a_positif', 'b_positif', 'a_negative', 'b_negative', 'ab_postif', 'ab_negative', 'o_postif', 'o_negative'],
    required: true
  },
  num_dossier: {
    type: String,
    required: true
  },
  date_debut: {
    type: Date,
    required: true
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
