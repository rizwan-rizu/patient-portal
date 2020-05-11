import React, { Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {RegisterState} from '../../redux/selectors'
import {useSelector} from 'react-redux'





const Header = () => {

  const Loginstate= useSelector(RegisterState).RegisterReducer
  
    return(
      <div>

        <AppBar  color="default"  className={Loginstate.toggle === true ? ("open") : ("")}>
          <Toolbar>
            <Typography variant="h6" style={{fontWeight: "600",opacity: "0.9"}}>
              DOCTOR PATIENT PORTAL
            </Typography> 
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Header;
