import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PersonIcon from '@material-ui/icons/Person';
import SubjectIcon from '@material-ui/icons/Subject';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import {List, ListItem, ListItemText, Box, ListItemIcon, Typography, Divider} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const LeftMenu = () =>{

  return(
    <Box className="left-bar"  >
      <Box className="left-bar-head">
        <Typography variant="h6">
          <NavLink to="#" id="head-label">
            Doctor patient portal
          </NavLink>
        </Typography>
      </Box>
      <Box className="left-bar-list">
        <List>
          <NavLink to="/dashboard/profile" color="inherit" style={{textDecoration:"none", color:"black"}}>
            <ListItem button>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText>
                Profile
              </ListItemText>
            </ListItem>
          </NavLink>
          <Divider component="li" />
          <NavLink to="/dashboard/patientid" color="inherit" style={{textDecoration:"none", color:"black"}}>
            <ListItem button focusVisibleClassName="true" >
              <ListItemIcon><HotelIcon /></ListItemIcon>
              <ListItemText >
                Patient
              </ListItemText>
            </ListItem>
          </NavLink>
          <Divider component="li" />
          <NavLink to="#" style={{textDecoration:"none", color:"black"}}>
            <ListItem button>
            <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
              <ListItemText>Doctor</ListItemText>
            </ListItem>
          </NavLink>
          <Divider component="li" />
          <NavLink to="/dashboard/Prescription" color="inherit" style={{textDecoration:"none", color:"black"}}>
            <ListItem button>
              <ListItemIcon><SubjectIcon /></ListItemIcon>
              <ListItemText>Prescription</ListItemText>
           </ListItem>
          </NavLink>
          <Divider component="li" />
        </List>

      </Box>
      
    </Box>
  )
}
export default LeftMenu

