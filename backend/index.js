const port = 3001;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Database connection with mongoDB
mongoose.connect('mongodb+srv://mahrukhdev:secret123@cluster0.i1eobyn.mongodb.net/glowcare');

//API Creation
app.get('/', (req, res) => {
    res.send('Express API is working');
});

//Image Storage Engine


app.listen(port, (error)=>{
    if(!error){
        console.log('Server is running on port: ', port);
    }
    else {
        console.log('Error: ', error);
    }
});