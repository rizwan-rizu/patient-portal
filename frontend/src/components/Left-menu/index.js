import React from 'react';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PersonIcon from '@material-ui/icons/Person';
import SubjectIcon from '@material-ui/icons/Subject';
import HotelIcon from '@material-ui/icons/Hotel';
import {List, ListItem, ListItemText, Box, ListItemIcon, Typography, Divider, IconButton} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux'
import {RegisterState} from '../../redux/selectors'
import {userstate} from '../../redux/selectors'
import { toggle_action } from '../../redux/actions';
import blank from '../../Assets/images/blank.png';
import hospital from '../../Assets/images/hospital.svg';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';



const LeftMenu = () =>{
  const dispatch = useDispatch()

  const openDrawer = () =>{
    dispatch(toggle_action(true))
    
  }

  const closeDrawer = () =>{
    dispatch(toggle_action(false))
  }

  const Loginstate= useSelector(RegisterState).RegisterReducer
  const userdata = useSelector(userstate).userReducer

  return(
    
    <Box className={Loginstate.toggle === true ? ("left-bar open") : ("left-bar")}>
      <Box id="drawer-btn"> 
        {
          Loginstate.toggle === true ? 
            (<ArrowBackIosOutlinedIcon onClick={closeDrawer}/> ) : 
            (<ArrowForwardIosOutlinedIcon onClick={openDrawer} />)
        } 
      </Box>
      <div className="inner">
      <img id="logo" alt="pic" src={hospital} />
        <Box className="left-bar-head">
          <Box id="Name-heading">
            <Typography variant="body1">{userdata.firstname}</Typography>
            <Typography variant="body2">{Loginstate.type}</Typography>
          </Box>
          <Box id="user-pic">
            <img id="profile-pic" alt="pic" src={blank}></img>
          </Box>
        </Box>
        <Box className="left-bar-list">
      
        <ul>
          <li>
            <NavLink to="/dashboard/profile" color="inherit">
              <PersonIcon /> Profile
            </NavLink> 
          </li>

          {
            Loginstate.type === 'doctor' && (
              <div>
                <li>
                  <NavLink to="/dashboard/patientid" color="inherit">
                    <HotelIcon /> Patient
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dashboard/Prescription" color="inherit">
                    <SubjectIcon /> Prescription
                  </NavLink>
                </li>
              </div>
            )
          }

          {
            Loginstate.type === 'patient' && (
              <div>
                <li>
                    <NavLink to="/dashboard/patient-history" color="inherit">
                    <SubjectIcon /> History
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/doctors" color="inherit">
                      <LocalHospitalIcon /> Doctor
                    </NavLink>
                  </li>
                </div>
                
            )
          }

        </ul>
        <List>
          

          
        </List>

      </Box>
      </div>
    </Box>
  )
}
export default LeftMenu

