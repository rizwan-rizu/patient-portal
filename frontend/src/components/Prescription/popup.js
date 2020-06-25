import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Box, Grid, TextField } from '@material-ui/core';
import {useSelector} from 'react-redux'
import {prescriptionstate, userstate, patientstate} from '../../redux/selectors'
import axios from 'axios'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import PageHeader from '../../components/common/header'
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import HistoryContent from '../historyContent'



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const prescriptionData = useSelector(prescriptionstate).prescriptionReducer
  const doctorsData = useSelector(userstate).userReducer
  const PatientIDState= useSelector(patientstate).PatientReducer

  let request = {
    patientid : PatientIDState._id,
    date : prescriptionData.date,
    diagnose : prescriptionData.diagnose,
    bloodpressure : prescriptionData.bloodpressure,
    temperature :prescriptionData.temperature,
    pulserate : prescriptionData.pulserate,
    bloodgulucose :prescriptionData.bloodgulucose,
    medicine :prescriptionData.medicine,
    type :prescriptionData.type,
    dosage : prescriptionData.dosage,
    usagetime : prescriptionData.usagetime,
    tests :prescriptionData.tests ,
    comments :prescriptionData.comments ,
    doctorname : doctorsData.firstname + doctorsData.lastname,
    specialization : doctorsData.specialization,
    hospital : doctorsData.hospital,
}
  
  const handleSave = () =>{
    let data = request
    console.log( "rizu", data)
        axios.post('http://localhost:5000/history', data)
        .then (res =>{
            alert(res.data)
        })
        .catch(err => console.log(err))
  }

  return (
    <div>
      <Button variant="contained" style={{padding: "13px 40px",background: "#0e1b25" ,color: "#fff"}} onClick={handleClickOpen}>
        Continue
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} style={{zIndex:"10000000000"}}>
        <AppBar className={classes.appBar} color="default">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Prescription
            </Typography>
            <IconButton onClick={handleClose} style={{float: "right"}}> 
                <EditOutlinedIcon fontSize="small" />
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleSave}>
              Save
              <SaveOutlinedIcon style={{marginLeft: "2px",marginBottom:"2px"}} fontSize="small" />
            </Button>
          </Toolbar>
        </AppBar>

        <PageHeader title="MEDICLE PRESCRIPTION" headingData= {request.patientid}  heading="Patient ID : " />

        <HistoryContent
          date = {request.date}
          diagnose = {request.diagnose}
          bloodpressure = {request.bloodpressure}
          temperature = {request.temperature}
          pulserate ={request.pulserate}
          bloodgulucose ={request.bloodgulucose}
          medicine ={request.medicine}
          type ={request.type}
          dosage = {request.dosage}
          usagetime = {request.usagetime}
          tests ={request.tests} 
          comments ={request.comments} 
          doctorname = {request.doctorname}
          specialization = {request.specialization}
          hospital = {request.hospital}
        />
          {/* <Box className="popup-content" style={{padding: "30px 200px 30px 200px"}}>
            <Box className="doctor-details">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid style={{background: "#f7f7f7",width: "100%",padding: "10px"}} item xs={8}>
                    <Typography variant="h6">DR {request.doctorname}</Typography>
                    <Typography style={{paddingLeft:"10px"}} variant="body1">[ {request.specialization} ]</Typography>
                    <Typography style={{paddingLeft:"10px"}} variant="body1">[ {request.hospital} ]</Typography>
                  </Grid>
                  <Grid style={{background: "#f7f7f7",width: "100%",padding: "10px"}} item xs={4}>
                    <Typography style={{textAlign:"right"}} variant="body1">Dated : {request.date}</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="doctors-review">
                  <Grid container style={{padding: "10px 25px"}} >
                    <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                      <Typography variant="body1">DIAGNOSE WITH :</Typography>
                    </Grid>
                    <Grid item xs={12} style={{padding:"15px"}} >
                      <Typography variant="subtitle1">
                      [ {request.diagnose} ]
                      </Typography>
                    </Grid>
                  </Grid>
            </Box>
            <Box className="regular-checkup-details">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid style={{background: "#f7f7f7",width: "100%",padding: "10px"}} item xs={12}>
                    <Typography variant="body1">REGULAR CHECKUP DETAILS :</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">Blood pressure :</Typography>
                    <Typography variant="subtitle2">[ {request.bloodpressure} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Temperture :</Typography>
                    <Typography variant="subtitle2">[ {request.temperature} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Blood Glucose :</Typography>
                    <Typography variant="subtitle2">[ {request.bloodgulucose} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Pulse Rate :</Typography>
                    <Typography variant="subtitle2">[ {request.pulserate} ]</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="medication">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                    <Typography variant="body1">MEDICATIONS :</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">Name :</Typography>
                    <Typography variant="subtitle2">[ {request.medicine} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Type :</Typography>
                    <Typography variant="subtitle2">[ {request.type} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Dosage :</Typography>
                    <Typography variant="subtitle2">[ {request.dosage} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Duration :</Typography>
                    <Typography variant="subtitle2">[ {request.usagetime} ]</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="laboratory-test">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                    <Typography variant="body1">LABORATORY TESTS :</Typography>
                  </Grid>
                  <Grid item xs={6} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">Test Name :</Typography>
                    <Typography variant="subtitle2">[ {request.tests} ]</Typography>
                  </Grid>
                  <Grid item xs={6} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Test Name :</Typography>
                    <Typography variant="subtitle2">[ Blood Complete picture ]</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="doctors-review">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                    <Typography variant="body1">DOCTOR'S REVIEW :</Typography>
                  </Grid>
                  <Grid item xs={12} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">
                    [ {request.comments} ]
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
            <Divider/>
          </Box> */}
      </Dialog>
    </div>
  );
}
