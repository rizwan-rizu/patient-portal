import React from 'react'
import Header from '../Header';
import LeftMenu from '../Left-menu';
import Footer from '../Footer';
import { Box , Button } from '@material-ui/core';
import Profile from '../Profile';
import Patient from '../Patient'
import { Route } from 'react-router';
import {BrowserRouter as Router, Redirect, Switch,} from 'react-router-dom';
import PatientSection from '../Patient/PatientSection';
import Prescription from '../Prescription'
import PatientID from '../Patient';
import ProfileInfo from './profileinfo'
import PatientHistory from '../history';
import {RegisterState} from '../../redux/selectors'
import { connect } from 'react-redux'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



class Dashboard extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            loggedIn : false
        }
        this.logout= this.logout.bind(this)
    }

    UNSAFE_componentWillMount(){
        if (sessionStorage.getItem("token")){
            console.log("session is present")
        }
        else{
            this.setState({loggedIn : true})
        }
    }

    logout() {
        sessionStorage.setItem("token","");
        sessionStorage.clear();
        this.setState({loggedIn : true})
      }

    render(){

        if (this.state.loggedIn){
            return <Redirect to="/" />
        }
        
        return(
            <div>
                <Router>
                    <Header />
                    <LeftMenu />
                    <Box className={this.props.Loginstate.toggle === true ?  ('content expended') : ('content')}>
                        <Button type="button" id="logout-btn" onClick={this.logout} color="inherit">
                            logout
                            <ExitToAppIcon style={{marginLeft: "2px",marginBottom:"2px"}} fontSize="small" />
                        </Button>
                            <Switch>
                                <Route exact path="/dashboard/profile" component={ProfileInfo} />
                                <Route exact path="/dashboard/patientid" component={PatientID} />
                                <Route exact path="/dashboard/patientsection" component={PatientSection} />
                                <Route exact path="/dashboard/Prescription" component={Prescription} />
                                <Route exact path="/dashboard/patient-history" component={PatientHistory} />
                            </Switch>
                    </Box>
                </Router>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return{
        Loginstate : RegisterState(state).RegisterReducer
        
    }
    
}

export default connect(mapStateToProps)(Dashboard)