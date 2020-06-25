const mongoose = require('mongoose')

const subscribersDoctorSchema = new mongoose.Schema({
    
    firstname : String,
    lastname : String,
    _id : Number,
    password : String,
    age :Number,
    email :String,
    phone :Number ,
    address :String,
    specialization :String ,
    hospital : String,
})

module.exports = mongoose.model('usersDoctors', subscribersDoctorSchema)