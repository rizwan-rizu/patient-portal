import React, { useState } from 'react'
import { Paper, Typography, TextField, Button, Container, Box , Link } from '@material-ui/core'
// import FetchRandomUser from '../../ApiCall'
import { Redirect } from 'react-router'
import {useDispatch , useSelector} from 'react-redux'
import {patientid_action} from '../../redux/actions'
import {patientInfo_action} from '../../redux/actions'
import {patientstate} from '../../redux/selectors'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const PatientID = () => {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         user_id : ''
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    //     this.handleclick = this.handleclick.bind(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }

    // handleChange(e){
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }
    // handleclick(){
    //     localStorage.setItem("user_id", this.state.user_id)
    // }

    // handleSubmit(e){
    //     e.preventDefault()
    // }
    
    // render(){
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        dispatch(patientid_action(e.target.value))
        
    }
    const PatientIDState= useSelector(patientstate).PatientReducer

    const handleClick = () => {

            axios.get( "http://localhost:5000/subscribers/" + PatientIDState._id)

            .then ((res) =>{
                if (!res.data){
                    console.log("user not found")
                }
                else if(res.data){
                    dispatch(patientInfo_action(res.data))
                }
                
            }).catch(Error =>{
                    console.log(Error)
                })

                return <Redirect to="/dashboard/patientsection" push />
    }
    // console.log(post)
    // if(post){
        
    // }
    
    return(
        
        <Box>
            <Paper elevation={3} className="id-container">
                <Box className="head" >
                    <Typography variant="h6" id="id-head">
                        Please enter the patient ID
                    </Typography>
                    <Container fixed>
                        <form>
                        <Box id="id-textbox">
                            <TextField
                                id="outlined-textarea"
                                label="Patient ID"
                                placeholder="Numbers between two dashes of CNIC"
                                name="patient_id"
                                multiline
                                variant="outlined"
                                onChange={e=>handleChange(e)}
                                required
                            />
                        </Box>
                        <Box id="id-button">
                            <NavLink to="/dashboard/patientsection" style={{textDecoration:"none", color:"black"}}>
                                <Button onClick={handleClick} variant="contained">Submit</Button>
                            </NavLink>
                        </Box>
                        </form>
                    </Container>
                    
                    {/* <FetchRandomUser /> */}
                </Box>
            </Paper>
        </Box>

    )
    // }

    
}
export default PatientID