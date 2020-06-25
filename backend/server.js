require('dotenv').config()
const express = require('express')
const app=express()
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser:true , useUnifiedTopology: true });
const db=mongoose.connection;


db.on('error', (error) => console.error(error))
db.once('open', () => console.log("connected to Database"))

app.use(express.json())
app.use(cors())

const subscribersRouter = require("./Routes/subscribersDoctor")
app.use('/subscribersdoctor', subscribersRouter)

const subscriberPatientRouter = require("./Routes/subscribersPatient")
app.use('/subscriberspatient', subscriberPatientRouter)

const historyrouter = require('./Routes/patienthistory')
app.use('/history' , historyrouter)


//  const users = [
//     {
//         id : "1",
//         name : "rizu",
//         location : "islamabad"
//     }
//     {
//         id : "2",
//         name : "sufyan",
//         location : "islamabad"
//     },
//     {
//         id : "3",
//         name : "hadi",
//         location : "islamabad"
//     },
// ];


// // this is routing section

// app.get("/",(req , res)=>{
//     res.send("hello world");
// });

// app.get("/users/:Id?",(req , res)=>{
//     if(req.params.Id=== undefined){
//         user.exec(function(error,data){
//             if(error) 
//             throw error;
//             else 
//             res.send(data);
            
//         })
//     }
//    else{

//         userModel.find({name : req.params.Id}, function(error,data){
//             if (error) throw error;
//             else
//             res.send(data);
//         });
        
//     //     res.send("you have searched for the specific one :  " + req.params.Id);
//     //      let index = users.findIndex(function(x, index){
//     //         return x.id === req.params.Id;
//     //      })
//     //      console.log(users[index]);
//     //    res.end();
//    }
    
// });

// // routing section end

app.listen(process.env.Port ,()=>console.log("server is running on port " + process.env.Port));