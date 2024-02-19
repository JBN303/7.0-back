// appointmentModel.js

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  age: Number,
  
  date: {
    type: String, // Change type to Date
    
  },
  day: {
    type: String, // Add a field for the day
    
  },
  purpose: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
