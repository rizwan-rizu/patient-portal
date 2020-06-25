const mongoose = require('mongoose')

const subscribersPatientSchema = new mongoose.Schema({
    
    firstname : String,
    lastname : String,
    _id : Number,
    password : String,
    age :Number,
    email :String,
    phone :Number ,
    address :String,
})

module.exports = mongoose.model('usersPatients', subscribersPatientSchema)