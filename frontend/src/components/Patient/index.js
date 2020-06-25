import React, { useState } from 'react'
import { Paper, Typography, TextField, Button, Container, Box , Link } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import {patientInfo_action} from '../../redux/actions'
import axios from 'axios'
import PageHeader from '../../components/common/header'
import {Formik} from 'formik'
import * as Yup from "yup";
import { connect } from 'react-redux'




class PatientID  extends React.Component {
    constructor(props){
        super(props)
        this.state={
             isUser: false
        }
   

    
    }
    // const dispatch = useDispatch();

render(){

    if (this.state.isUser){
        return <Redirect to="/dashboard/patientsection" />
    }

    return(
        
        <Box>
            <PageHeader title="GET PATIENT HISTORY" />
            <Paper elevation={3} className="id-container">
                <Box className="head" >
                    <Typography variant="body1" id="id-head">
                        PLEASE ENTER PATIENT ID
                    </Typography>
                    <Container fixed>
                        <Formik
                                    initialValues = {{
                                        _id: "", 

                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        axios.get( 'http://localhost:5000/subscriberspatient/'+ values._id)
                                        .then ((res) =>{
                                            if (typeof res.data === "string"){
                                                alert("user not found")
                                            }
                                            else if(typeof res.data === "object"){
                                               this.props.dispatch(patientInfo_action(res.data))
                                                this.setState({
                                                    isUser : true
                                                })
                                            }
                                            
                                        }).catch(Error =>{
                                                console.log(Error)
                                            })
                                    
                                    }}
                                    validationSchema = {Yup.object().shape({
                                        _id: Yup.string().required("Patient ID is required"),
                                    })}
                                >
                            {
                                props => {
                                    const {values , touched, errors, handleChange, handleBlur, handleSubmit}= props;
                                    return (
                                    <form onSubmit={handleSubmit}>
                                    <Box id="id-textbox">
                                        <TextField
                                            id="outlined-textarea"
                                            label="Patient ID"
                                            placeholder="CNIC of patient"
                                            name="_id"
                                            multiline
                                            variant="outlined"
                                            value={ values._id}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors._id && touched._id && "error"}
                                        />
                                        {errors._id && touched._id && (
                                                <div className="error-message">{errors._id}</div>
                                            )}
                                    </Box>
                                    <Box id="id-button">
                                        {/* <NavLink to="/dashboard/patientsection" style={{textDecoration:"none", color:"black"}}> */}
                                            <Button
                                                type="submit"
                                                className="custom_btn"
                                                variant="contained" 
                                                
                                            > Submit
                                            </Button>
                                        {/* </NavLink> */}
                                    </Box>
                                    </form>
                                    )
                                }
                            }
                        </Formik>
                    </Container>
                </Box>
            </Paper>
        </Box>

    )
 
    }
}
const mapDispatchToprops = (dispatch) =>{
    return{
        dispatch : (user) => dispatch(patientInfo_action(user))
        
    }
    
}
export default connect(mapDispatchToprops)(PatientID)