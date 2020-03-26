import React from 'react'
import Header from '../Header';
import LeftMenu from '../Left-menu';
import Footer from '../Footer';
import { Box } from '@material-ui/core';
import Profile from '../Profile';
import Patient from '../Patient'
import { Route } from 'react-router';
import {BrowserRouter as Router, Switch,} from 'react-router-dom';
import PatientSection from '../Patient/PatientSection';
import Prescription from '../Prescription'
import PatientID from '../Patient';


const Dashboard = () => {

    return(
        <Router>
            <Header />
            <LeftMenu />
            <Box className="content">
                <Switch>
                    <Route exact path="/dashboard/profile" component={Profile} />
                    <Route exact path="/dashboard/patientid" component={PatientID} />
                    <Route exact path="/dashboard/patientsection" component={PatientSection} />
                    <Route exact path="/dashboard/Prescription" component={Prescription} />
                </Switch>
            </Box>
        </Router>
        
    )
}
export default Dashboard