import React , {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios'
import { Grid ,Box} from '@material-ui/core';
import { patientstate } from '../../redux/selectors';
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function History({patientID}) {

  const [History, setHistory] = React.useState([]);
  
  // const PatientIDState= useSelector(patientstate).PatientReducer
  useEffect(() => {
    axios.get("http://localhost:5000/history/" + patientID)
    .then ((res) =>{
      
      if (!res.data){
          console.log("user not found")
          }
      else if(res.data){
          // historyArr = res.data;
          // localStorage.setItem("history",JSON.stringify(res.data))
            setHistory(res.data)
      }  
    })
    .catch(Error =>{
        console.log(Error)
    })
  },[])

  // const historyArr = JSON.parse(localStorage.getItem("history"))

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {/* {console.log('islamabad ', History)} */}
      {History.map((item, i) => (
        <ExpansionPanel key={i} expanded={expanded === (item._id)} onChange={handleChange(item._id)}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className={classes.heading}>{item.diagnose}</Typography>
            <Typography className={classes.secondaryHeading} >{item.date}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{display:"block"}}>
              <Box className="doctor-details">
                <Grid container style={{padding: "10px 25px"}} >
                  <Grid style={{background: "#f7f7f7",width: "100%",padding: "10px"}} item xs={12}>
                    <Typography variant="h6">DR {item.doctorname}</Typography>
                    <Typography style={{paddingLeft:"10px"}} variant="body1">[ {item.specialization} ]</Typography>
                    <Typography style={{paddingLeft:"10px"}} variant="body1">[ {item.hospital} ]</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="doctors-review">
                  <Grid container style={{padding: "10px 25px"}} >
                    <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                      <Typography variant="body1">DIAGNOSE WITH:</Typography>
                    </Grid>
                    <Grid item xs={12} style={{padding:"15px"}} >
                      <Typography variant="subtitle1">
                      [ {item.diagnose} ]
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
                    <Typography variant="subtitle2">[ {item.bloodpressure} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Temperture :</Typography>
                    <Typography variant="subtitle2">[ {item.temperature} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Blood Glucose :</Typography>
                    <Typography variant="subtitle2">[ {item.bloodgulucose} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Pulse Rate :</Typography>
                    <Typography variant="subtitle2">[ {item.pulserate} ]</Typography>
                  </Grid>
                </Grid>
            </Box>
            <Box className="medication">
              <Grid container style={{padding: "10px 25px"}} >
                  <Grid  item xs={12} style={{background: "#f7f7f7",width: "100%",padding: "10px"}}>
                    <Typography variant="body1">MEDICATIONS :</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}} >
                    <Typography variant="subtitle1">Medicine name :</Typography>
                    <Typography variant="subtitle2">[ {item.medicine} ]</Typography>
                    <Typography variant="subtitle2">[ Brufen ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Type :</Typography>
                    <Typography variant="subtitle2">[ {item.type} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Dosage :</Typography>
                    <Typography variant="subtitle2">[ {item.dosage} ]</Typography>
                  </Grid>
                  <Grid item xs={3} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Duration :</Typography>
                    <Typography variant="subtitle2">[ {item.usagetime} ]</Typography>
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
                    <Typography variant="subtitle2">[ {item.tests} ]</Typography>
                  </Grid>
                  <Grid item xs={6} style={{padding:"15px"}}>
                    <Typography variant="subtitle1">Test Name :</Typography>
                    <Typography variant="subtitle2"></Typography>
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
                      [ {item.comments} ]
                      </Typography>
                    </Grid>
                  </Grid>
              </Box>
          
          
             {/* <Grid container spacing={3}>
              <Grid item >Medicines</Grid>
              <Grid item md={6}>
                <ul>
                  {
                    item.medicines.map((med, index) => (
                      <li key={index}>{med}</li>
                    ))
                  }
                </ul>
              </Grid>
            </Grid> */}

          
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))} 
      
      
    </div>
  );
}
