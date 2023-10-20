const express = require('express');
const router = express.Router();
const patientController = require('../controllers/PatientController');


router.post('/' , patientController.createPatient);
router.get('/' , patientController.getAllPatients);
router.get('/search' , patientController.searchPatient)
router.get('/:patientId' , patientController.getOnePatient);
router.put('/:patientId' , patientController.updatePatientDetails);
router.delete('/:patientId' , patientController.deletePatient);


module.exports = router;