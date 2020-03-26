import React from 'react'
import { Box , Grid, Typography, Avatar, Divider,List, ListItem, ListItemText, Paper,IconButton } from '@material-ui/core';
import ProfileInfo from './ProfileInfo';
import blank from '../../Assets/images/blank.png';
import pp from '../../Assets/images/pp.jpg'
import EditIcon from '@material-ui/icons/Edit';
const Profile =() =>{
    
    return(
        <Box className="profile">
            
            <Paper elevation={3}>
            <Box id="profile-head">
                <Typography variant="h5">MY PROFILE</Typography>
                <IconButton size="small" style={{float: "right" , top:" -30px"}}> 
                    <EditIcon />
                </IconButton>
            </Box>
                <Grid container spacing={2}>
                    <Grid item md={4}  style={{ textAlign: "center"}}>
                        <img id="profile-pic" alt="pic" src={pp}></img>
                    </Grid>
                    <Grid item md={8}>
                        <ProfileInfo />
                    </Grid>

                </Grid>
            </Paper>
            
            
        </Box>
    )
}
export default Profile