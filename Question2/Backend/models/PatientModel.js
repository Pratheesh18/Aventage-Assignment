const mongoose = require('mongoose');


const patientSchema = new mongoose.Schema({
    name : String,
    birthday : String , 
    contactNo : String, 
    nic : String , 
    notes : String,
});

const Patient = mongoose.model('Patient' , patientSchema);

module.exports = Patient;
