import React from 'react'
import {connect} from 'react-redux'
import { Paper, Typography, TextField, Button, Container, Box , Link } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { patientStates } from '../../redux/selectors'
import {patientid_action} from '../../redux/actions'

const PatientID = () => {

    const dispatch = useDispatch();
    const handleChange = (e) =>{
        dispatch(patientid_action(e.target.name , e.target.value))
        
    }

    const PatientIDState= useSelector(patientStates)

    return(
        
        <Box>
            <h2> {PatientIDState.patientreducer.patient_id}</h2>
            <Paper elevation={3} className="id-container">
                <Box className="head" >
                    <Typography variant="h6" id="id-head">
                        Please enter the patient ID
                    </Typography>
                    <Container fixed>
                        <Box id="id-textbox">
                            <TextField
                                id="outlined-textarea"
                                label="Patient ID"
                                placeholder="Numbers between two dashes of CNIC"
                                name="patient_id"
                                multiline
                                variant="outlined"
                                onChange={e => handleChange(e)}
                            />
                        </Box>
                        <Box id="id-button">
                            <Button  variant="contained">Submit</Button>
                            <Link href="/dashboard/patientsection">click</Link>
                        </Box>
                    </Container>
                    
                    
                </Box>
            </Paper>
        </Box>

    )
}
export default connect()(PatientID)