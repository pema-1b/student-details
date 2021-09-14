const express = require("express");
const app = express();

const mongoose = require('mongoose');

const desuungRouter = require('./routes/desuung');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/desuung", desuungRouter);

const start = async () =>{
    const mongoURI = 'mongodb://localhost:27017';

    try{
        await mongoose.connect(mongoURI, {useNewUrlParser:true});

        app.listen(3000, () => console.log('Server started'));

    }catch(error){
        console.log("Error strating server", error);
    }
};
start();




