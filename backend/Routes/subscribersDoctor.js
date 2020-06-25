const express = require('express')
const router = express.Router()
const subscriber = require('../models/subscribersDoctor')
const bcrypt = require('bcrypt')

// Getting all
router.get('/', async (req,res) => {
    try{
        const subscribers = await subscriber.find()
        res.json(subscribers)
    } catch(err){
        res.status(500).json({message : err.message })
    }
})

// Getting one
router.get('/:id', getsubscriber, (req,res) => {
    res.json(res.user)
})

// Creating one
router.post('/', async (req,res) => {
    try{
        const hashedpassword = await bcrypt.hash(req.body.password , 10)
        const user = new subscriber({
            firstname: req.body.firstname,
            lastname : req.body.lastname,
            _id : req.body._id,
            age : req.body.age,
            email:req.body.email,
            phone : req.body.phone,
            address: req.body.address,
            specialization: req.body.specialization,
            hospital : req.body.hospital,
            password : hashedpassword,
    })
         await user.save()
        res.status(201).send('you are registered successfully')
        
    } catch (err){
        res.status(400).json({message : err.message})
    }
})

// this route is to authenticate the user
router.post('/login', async (req,res) => {
    const user = await subscriber.findById({ _id : req.body.user_id})
    if (user == null){
        return res.send('unsucessfull')
    }
    else {
        try{
            if (await bcrypt.compare(req.body.password , user.password)){

                res.json(user)
            } else {
                res.send('unsucessfull')
            }
        } catch(err){
            res.status(500)
        }
    }
    
        
    
})
// Updating one
router.patch('/:id', getsubscriber, (req,res) => {
    
})

// Deleting one
router.delete('/:id', (req,res) => {

})

// my middleware -- calls each time when a specific data is to retrieve from database

async function getsubscriber(req , res , next){
    let user
    try{
        user = await subscriber.findById(req.params.id)
        if(user == null){
            return res.send('cannot find the subscriber')
        }
    } catch(err){
        return res.status(500).json({message:err.message})
    }
    res.user = user
    next()
    
}

module.exports = router
