const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/PatientRoute');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser : true , 
    useUnifiedTopology : true
}) .then(() => {
    console.log("Database Connected");
});

app.use(express.json());
app.use('/api/patients' , patientRoutes);


const PORT = process.env.PORT;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})