const express = require('express')
const router = express.Router()
const subscriberhistory = require('../models/History')

// getting all
router.get('/', async (req, res) => {
    try{
        const user = await subscriberhistory.find()
        res.json(user)
    } catch(err){
        res.status(500).json({message : err.message })
    }
})

//getting one
router.get('/:id', gethistory , (req, res) => {
    res.send(res.user)
})

//creating one
router.post('/', async (req, res) => {
    let user
    try{
        user = await new subscriberhistory({
            patientid : req.body.patientid,
            date : req.body.date,
            diagnose: req.body.diagnose,
            bloodpressure : req.body.bloodpressure,
            temperature :req.body.temperature,
            pulserate : req.body.pulserate,
            bloodgulucose : req.body.bloodgulucose,
            medicine : req.body.medicine,
            type : req.body.type,
            dosage : req.body.dosage,
            usagetime : req.body.usagetime,
            tests : req.body.tests,
            comments: req.body.comments,
            doctorname : req.body.doctorname,
            specialization : req.body.specialization,
            hospital : req.body.hospital
            })
        await user.save()
        res.status(201).send("created succesfully")
    } catch (err){
        res.status(400).json({message : err.message})
    }
    
})

// updating one
router.patch('/:id',gethistory, (req, res) => {
})

// deleting one
router.delete('/:id',gethistory, (req, res) => {
})

// my middleware

async function gethistory(req , res , next){
    let user
    try{
        user = await subscriberhistory.find({patientid : req.params.id})

        if(user == null){
            return res.status(404).json({message: 'cannot find the subscriber'})
        }
    } catch(err){
        return res.status(500).jason({message:err.message})
    }
    res.user = user
    next()
    
}

module.exports = router ;