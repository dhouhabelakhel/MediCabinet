const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  contenu_prescription: {
    type: String,
    required: true
  },
  date_debut: {
    type: Date,
    required: true,
  },
  date_fin: {
    type: Date,
    required: true,
  },
  consultation: {
    type: Schema.Types.ObjectId,
    ref: 'Consultation',
    required: true
  }
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

module.exports = Prescription;
