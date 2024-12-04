const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consultationSchema = new Schema({
  heure_debut: {
    type: String,  
    required: true
  },
  heure_fin: {
    type: String, 
    required: true   
  },
  duree: {
    type: Number,
    required: true,
    min: 0,
    max: 60
  },
  rdv: {
    type: Schema.Types.ObjectId,
    ref: 'Rdv',
    required: true
  },
  medcien: {
    type: Schema.Types.ObjectId,
    ref: 'Medcien',
    required: true
  },
  description: {
    type: String,
    required: true,
  }
});

const Consultation = mongoose.model('Consultation', consultationSchema);

module.exports = Consultation;
