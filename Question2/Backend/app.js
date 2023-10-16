const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})