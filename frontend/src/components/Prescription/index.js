import React from 'react'
import { Box, Paper, Typography, Button , TextField, Container, Grid, IconButton } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from 'axios'
import {useSelector} from 'react-redux'
import {patientstate} from '../../redux/selectors'

const Prescription = () => {
    
    const date = new Date();
    const fullDate =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    const PatientIDState= useSelector(patientstate).PatientReducer
    
    return(
        <Box className="prescription">
            <Paper elevation={3}>
                <Box className="head">
                    <Typography variant="h5">Prescription Form</Typography>
                </Box>
                <Container>
                <Box className="prescrtionForm">
                    <form onSubmit={(e) => prescription_data(e)}>
                        <Grid container spacing={3}>
                            <Grid item md={6} >
                                <TextField id="patient-id" label="Patient ID" variant="outlined" autoComplete="off" fullWidth defaultValue={PatientIDState._id}/>
                            </Grid>
                            <Grid item md={6} >
                                
                                <TextField
                                    disabled
                                    id="date"
                                    defaultValue={fullDate}
                                    label="Date"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12} >
                                <TextField id="diagnose" label="Diagnosis/complaints" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Grid item md={3} >
                                <TextField
                                        id="blood-pressure"
                                        label="Blood Pressure"
                                        placeholder="mmhg"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item md={3} >
                                <TextField
                                        id="temperature"
                                        label="Temperaute"
                                        placeholder="Fahrenheit"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item md={3} >
                                <TextField
                                        id="pulse-rate"
                                        label="Pulse Rate"
                                        placeholder="Pulses per minute"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item md={3} >
                                <TextField
                                        id="blood-glucose"
                                        label="Blood Glucose"
                                        placeholder="mg/dl"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item md={4} >
                                <TextField id="medicine" label="Medication" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Grid item md={2} >
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel >Type</InputLabel>
                                    <Select id="med-type" label="Type" >
                                        
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="tablet">Tablet</MenuItem>
                                    <MenuItem value="injection">Injection</MenuItem>
                                    <MenuItem value="syrup">Syrup</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={2} >
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel >Dosage</InputLabel>
                                    <Select
                                    id="dosage"
                                    label="Dosage"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>1 times a day</MenuItem>
                                    <MenuItem value={20}>2 times a day</MenuItem>
                                    <MenuItem value={30}>3 times a day</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={3} >
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel >Usage time</InputLabel>
                                    <Select id="usage-time" label="Usage time">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>for 3 days</MenuItem>
                                    <MenuItem value={20}>for 5 days</MenuItem>
                                    <MenuItem value={30}>for a week</MenuItem>
                                    <MenuItem value={40}>for a  2 weeks</MenuItem>
                                    <MenuItem value={50}>for a month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={1}>
                                <IconButton>
                                    <AddBoxIcon />
                                </IconButton>
                            </Grid>
                            <Grid item md={6} >
                                <TextField id="tests" label="Suggested laboratory tests" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Grid item md={1} >
                                <IconButton>
                                    <AddBoxIcon />
                                </IconButton>
                            </Grid>
                            <Grid item md={12} >
                                <TextField id="comments" label="Comments/suggestions" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Box id="submit" >
                                <Button type="submit" variant="contained" id="submitbtn" >Submit</Button>
                            </Box>
                            
                            
                        </Grid>
                    </form>
                    
                    
                </Box>
                </Container>

            </Paper>
        </Box>
    )
}
    


function prescription_data(e) {
    e.preventDefault()
    let request = {
        patientid : document.getElementById('patient-id').value,
        date : document.getElementById('date').value,
        diagnose : document.getElementById('diagnose').value,
        bloodpressure : document.getElementById('blood-pressure').value,
        temperature :document.getElementById('temperature').value,
        pulserate : document.getElementById('pulse-rate').value,
        bloodgulucose : document.getElementById('blood-glucose').value,
        medicine :document.getElementById('medicine').value,
        type : document.getElementById('med-type').value,
        dosage : document.getElementById('dosage').value,
        usagetime : document.getElementById('usage-time').value,
        tests : document.getElementById('tests').value,
        comments : document.getElementById('comments').value,
    }
    console.log(request.type)
    axios.post('http://localhost:5000/history', request)
    .then (res =>{
        alert(res.data)
    })
    .catch(err => console.log(err))
    
}

export default Prescription