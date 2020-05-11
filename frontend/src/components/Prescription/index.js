import React from 'react'
import { Box, Paper, Typography, Button , TextField, Container, Grid, IconButton } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {useSelector, useDispatch} from 'react-redux'
import {patientstate} from '../../redux/selectors'
import { makeStyles } from '@material-ui/core/styles';
import FullScreenDialog from '../../components/Prescription/popup'
import {prescription_action} from '../../redux/actions'
import PageHeader from '../../components/common/header'



const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
  }));

const Prescription = () => {
    const classes = useStyles();
    const [type, settype] = React.useState('');
    const [dosage, setdosage] = React.useState('');
    const [usageTime, setusageTime] = React.useState('');
    let [AddMoreMEdicine, setAddMoreMEdicine] = React.useState('false');

  
    
    const date = new Date();
    const fullDate =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    const PatientIDState= useSelector(patientstate).PatientReducer

    const dispatch= useDispatch()
    
    const handleFormChange = (e) =>{
        dispatch(prescription_action(e.target.name , e.target.value))
    }
    const onTypeChange=(e)=>{
        settype(e.target.value)
        dispatch(prescription_action(e.target.name , e.target.value))
    }
    const onUsageTimeChange =(e)=>{
        setusageTime(e.target.value)
        dispatch(prescription_action(e.target.name, e.target.value))
    } 
    const onDosageChange = (e) => {
        setdosage(e.target.value);
        dispatch(prescription_action(e.target.name, e.target.value))
    }

    // function prescription_data(e) {
    //     e.preventDefault()
    //     let request = {
    //         patientid : document.getElementById('patient-id').value,
    //         date : document.getElementById('date').value,
    //         diagnose : document.getElementById('diagnose').value,
    //         bloodpressure : document.getElementById('blood-pressure').value,
    //         temperature :document.getElementById('temperature').value,
    //         pulserate : document.getElementById('pulse-rate').value,
    //         bloodgulucose : document.getElementById('blood-glucose').value,
    //         medicine :document.getElementById('medicine').value,
    //         type : type,
    //         dosage : dosage,
    //         usagetime : usageTime,
    //         tests : document.getElementById('tests').value,
    //         comments : document.getElementById('comments').value,
    //         doctorName : doctorDetails.firstname +''+ doctorDetails.lastname,
    //         speacialization : doctorDetails.speacialization,
    //         hospital : doctorDetails.hospital
    //     }
    //     console.log(request)
    //     // axios.post('http://localhost:5000/history', request)
    //     // .then (res =>{
    //     //     alert(res.data)
    //     // })
    //     // .catch(err => console.log(err))
        
    // }
    
    return(
        <div>
            <PageHeader title="PRESCRIPTION" />
            <Box className="prescription">
            <Paper elevation={3}>
                <Box className="head">
                    <Typography variant="h6">Prescription Form</Typography>
                </Box>
                <Container>
                <Box className="prescrtionForm">
                    <form onChange={e => handleFormChange(e)}>
                        <Grid container spacing={3}>
                            <Grid item xs={6} >
                                <TextField 
                                    id="patient-id" 
                                    label="Patient ID" 
                                    name="patientid" 
                                    variant="outlined" 
                                    autoComplete="off" 
                                    fullWidth 
                                    defaultValue={PatientIDState._id}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={6} >
                                
                                <TextField
                                    disabled
                                    id="date"
                                    defaultValue={fullDate}
                                    label="Date"
                                    variant="outlined"
                                    name="date"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <Typography variant="subtitle2">DIAGNOSE</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item md={12} >
                                <TextField 
                                    id="diagnose" 
                                    name="diagnose" 
                                    label="Diagnosis/complaints" 
                                    variant="outlined" 
                                    autoComplete="off" 
                                    fullWidth 
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <Typography variant="subtitle2">REGULAR CHECKUP</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={3} >
                                <TextField
                                        id="blood-pressure"
                                        label="Blood Pressure"
                                        placeholder="mmhg"
                                        name="bloodpressure"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item xs={3} >
                                <TextField
                                        id="temperature"
                                        label="Temperaute"
                                        placeholder="Fahrenheit"
                                        name="temperature"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item xs={3} >
                                <TextField
                                        id="pulse-rate"
                                        label="Pulse Rate"
                                        placeholder="Pulses per minute"
                                        name="pulserate"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item xs={3} >
                                <TextField
                                        id="blood-glucose"
                                        label="Blood Glucose"
                                        name="bloodgulucose"
                                        placeholder="mg/dl"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <Typography variant="subtitle2">MEDICATION</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <TextField id="medicine" name="medicine" label="Medicine" variant="outlined" autoComplete="off"  fullWidth />
                            </Grid>
                            <Grid item xs={2} >
                                <FormControl variant="outlined" className={classes.formControl} style={{margin:"0px"}} fullWidth>
                                    <InputLabel >Type</InputLabel>
                                    <Select
                                        id="med-type"
                                        label="Type"
                                        value={type}
                                        onChange={onTypeChange}
                                        name="type"
                                    >
                                    <MenuItem value="tablet">Tablet</MenuItem>
                                    <MenuItem value="injection">Injection</MenuItem>
                                    <MenuItem value="syrup">Syrup</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2} >
                                <FormControl variant="outlined" className={classes.formControl} style={{margin:"0px"}} fullWidth>
                                    <InputLabel >Dosage</InputLabel>
                                    <Select
                                        id="dosage"
                                        label="Dosage"
                                        value={dosage}
                                        onChange={onDosageChange}
                                        name="dosage"
                                    >
                                    <MenuItem value="1 times a day">1 times a day</MenuItem>
                                    <MenuItem value="2 times a day">2 times a day</MenuItem>
                                    <MenuItem value="3 times a day">3 times a day</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3} >
                                <FormControl variant="outlined" className={classes.formControl} style={{margin:"0px"}} fullWidth>
                                    <InputLabel >Usage time</InputLabel>
                                    <Select 
                                        id="usage-time" 
                                        label="Usage time"
                                        value={usageTime} 
                                        onChange={onUsageTimeChange}
                                        name="usagetime"
                                        
                                    >
                                    <MenuItem value="for 3 days">for 3 days</MenuItem>
                                    <MenuItem value="for 5 days">for 5 days</MenuItem>
                                    <MenuItem value="for a week">for a week</MenuItem>
                                    <MenuItem value="for 2 weeks">for 2 weeks</MenuItem>
                                    <MenuItem value="for a month">for a month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton>
                                    <AddBoxIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <Typography variant="subtitle2">RECOMMENDED LABORATORY TESTS</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={5} >
                                <TextField id="tests" name="tests" label="Laboratory test" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            {/* <Grid item xs={5} >
                                <TextField id="tests" label="Laboratory test" variant="outlined" autoComplete="off" fullWidth />
                            </Grid> */}
                            <Grid item xs={2} >
                                <IconButton>
                                    <AddBoxIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <Typography variant="subtitle2">DOCTOR'S REVIEW</Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} >
                                <TextField id="comments" name="comments" label="Comments/suggestions" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                        </Grid>
                            <Box id="submit" >
                                <FullScreenDialog />
                            </Box>
                    </form>
                    
                    
                </Box>
                </Container>

            </Paper>
        </Box>
        </div>
        
    )
}

export default Prescription