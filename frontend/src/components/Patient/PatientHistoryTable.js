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
import HistoryContent from '../historyContent'
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
              
          <HistoryContent
            patientid = {item.patientid}
            date = {item.date}
            diagnose = {item.diagnose}
            bloodpressure = {item.bloodpressure}
            temperature = {item.temperature}
            pulserate ={item.pulserate}
            bloodgulucose ={item.bloodgulucose}
            medicine ={item.medicine}
            type ={item.type}
            dosage = {item.dosage}
            usagetime = {item.usagetime}
            tests ={item.tests} 
            comments ={item.comments} 
            doctorname = {item.doctorname}
            specialization = {item.specialization}
            hospital = {item.hospital}
        />
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
