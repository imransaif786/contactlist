const mongoose = require('mongoose');


const ContactSchema = mongoose.Schema({
first_name:{
    type: String,
    require:true
    },
Last_name:{
    type: String,
    require:true
    },
Phone:{
    type: String,
    require:true
    }
});

const Contact = module.exports = mongoose.model('contact', ContactSchema);