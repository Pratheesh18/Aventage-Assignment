const Patient = require('../models/PatientModel');


const createPatient = async (req,res) => {
    try{
        const newPatient = new Patient(req.body);
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    }catch(error){
        res.status(500).json({error : 'Unable to create a new patient'});
    }
};

const searchPatient = async (req,res) => {
    try{
        const {name} = req.query;
        const searchResults = await Patient.find({
            name : { $regex : new RegExp(name , "i")},
        });

        res.json(searchResults);
        console.log(searchResults)
    }catch(error){
        console.error("Error searching for patients " , error);
        res.status(500).json({error : "Server error"});
    }
};


const getAllPatients = async (req,res) => {
    try{
        const patients = await Patient.find();
        res.json(patients);
    }catch(error){
        res.status(500).json({error : 'Unable to fetch patients'});
    }
};


const getOnePatient = async(req,res) => {
    try{
        const patient = await Patient.findById(req.params.patientId);
        if(!patient){
            return res.status(404).json({error : 'Patient Not Found'});
        }
        res.json(patient);
    }catch(error){
        res.status(500).json({error : 'Unable to fetch the patient'});
    }
};


const updatePatientDetails = async(req,res) => {
    try{
        const updatePatientDetails = await Patient.findByIdAndUpdate(
            req.params.patientId,
            req.body,
            {new : true}
        );
        if(!updatePatientDetails){
            return res.status(404).json({error : "Patient not found"});
        }
        res.json(updatePatientDetails);
    }catch(error){
        res.status(500).json({error : 'Unable to update the patient'});
    }
};

const deletePatient = async (req,res) => {
    try{
        const deletePatient = await Patient.findByIdAndRemove(req.params.patientId);
        if(!deletePatient){
            return res.status(404).json({error : "Patient Not Found"});
        }
        res.json({message : 'Patient deleted success'});
    }catch(error){
        res.status(500).json({error : "Unable to delete the patient"});
    }
};

module.exports = {
    createPatient , 
    searchPatient,
    getAllPatients,
    getOnePatient,
    updatePatientDetails,
    deletePatient,
};