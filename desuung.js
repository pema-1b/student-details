const mongoose = require('mongoose');

const desuungSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    registeredOn:{
        type: Date,
        default: new Date(),

    },
});

const desuungModel = mongoose.model('desuungModel',
desuungSchema);

module.exports = desuungModel;