const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rdvSchema = new Schema({
  date_rdv: {
    type: Date,
    required: true,
  },
  etat_rdv: {
    type: Boolean,
    required: true,
    default: false
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  consultation: {
    type: Schema.Types.ObjectId,
    ref: 'Consultation',
    required: false
  }
});

const rdv = mongoose.model('rdv', rdvSchema);

module.exports = rdv;
