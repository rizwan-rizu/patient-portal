import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import PatientID from './PatientID'
import Profile from '../Profile';
import SimpleTable from './PatientHistoryTable'
import { Paper} from '@material-ui/core';
import PatientHistoryTable from './PatientHistoryTable';
import {useSelector} from 'react-redux'
import {patientstate} from '../../redux/selectors'
import PageHeader from '../../components/common/header'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function PatientSection() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let patient = useSelector(patientstate).PatientReducer

  return (
    
    <div className={classes.root} >
      <PageHeader title="PATIENT SECTION" />
      <AppBar position="static" color="default" >
        <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Patient Profile" {...a11yProps(0)} />
          <Tab label="Patient History" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} className="patienSection-tab" index={0} >
        <Profile 
          user_firstName = {patient.firstname}
          user_lastName = {patient.lastname}
          user_cnic = {patient._id}
          user_age = {patient.age}
          user_address= {patient.address}
          user_mobile= {patient.phone}
          user_email = {patient.email}
        />
      </TabPanel>
      <TabPanel value={value} className="patienSection-tab" index={1} >
        <PatientHistoryTable patientID={patient._id}/>
      </TabPanel>
    </div>
    
  );
}
export default PatientSection
