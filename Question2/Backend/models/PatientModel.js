const mongoose = require('mongoose');


const patientSchema = new mongoose.Schema({
    name : String,
    birthday : Date , 
    contactNo : String,
    photo : String , 
    nic : String , 
    notes : String,
});

const Patient = mongoose.model('Patient' , patientSchema);

module.exports = Patient;
