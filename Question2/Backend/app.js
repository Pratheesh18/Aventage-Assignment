const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser : true , 
    useUnifiedTopology : true
}) .then(() => {
    console.log("Database Connected");
})


const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})