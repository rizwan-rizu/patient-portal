import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PersonIcon from '@material-ui/icons/Person';
import SubjectIcon from '@material-ui/icons/Subject';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import {List, ListItem, ListItemText, Box, ListItemIcon, Typography, Divider, Link } from '@material-ui/core';

const LeftMenu = () =>{

  return(
    <Box className="left-bar"  >
      <Box className="left-bar-head">
        <Typography variant="h6">
          <Link href="#" id="head-label">
            Doctor patient portal
          </Link>
        </Typography>
      </Box>
      <Box className="left-bar-list">
        <List>
          <Link href="/dashboard/profile" color="inherit" style={{textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText>
                profile
              </ListItemText>
            </ListItem>
          </Link>
          <Divider component="li" />
          <Link href="/dashboard/patientid" color="inherit" style={{textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon><HotelIcon /></ListItemIcon>
              <ListItemText >
                patient
              </ListItemText>
            </ListItem>
          </Link>
          <Divider component="li" />
          <ListItem button>
          <ListItemIcon><LocalHospitalIcon /></ListItemIcon>
            <ListItemText>Doctor</ListItemText>
          </ListItem>
          <Divider component="li" />
          <Link href="/dashboard/Prescription" color="inherit" style={{textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon><SubjectIcon /></ListItemIcon>
              <ListItemText>Prescription</ListItemText>
           </ListItem>
          </Link>
          <Divider component="li" />
        </List>

      </Box>
      
    </Box>
  )
}
export default LeftMenu

