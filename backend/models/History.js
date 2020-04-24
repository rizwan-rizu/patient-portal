const mongoose = require('mongoose')
const PatientHistorySchema = new mongoose.Schema({

    patientid : Number,
    date : String,
    diagnose : String,
    bloodpressure : Number,
    temperature :Number,
    pulserate : Number,
    bloodgulucose : Number,
    medicine : String,
    type : String,
    dosage : String,
    usagetime : String,
    tests : String,
    comments: String

})

module.exports = mongoose.model('PatientHistory', PatientHistorySchema)