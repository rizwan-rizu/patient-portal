import React from 'react'
import { Box , Grid, Typography, Avatar, Divider,List, ListItem, ListItemText, Paper,IconButton } from '@material-ui/core';
import blank from '../../Assets/images/blank.png';
import pp from '../../Assets/images/pp.jpg'
import EditIcon from '@material-ui/icons/Edit';
const Profile =({
    user_firstName,
    user_lastName,
    user_age,
    user_email,
    user_cnic,
    user_mobile,
    user_address,
}) =>{
    return(
        <Box className="profile">
            {/* <h1>{user.name},{user.firstname},{user.password},{user.lastname},{user.phone},{user.speacialization}</h1> */}
            <Paper elevation={3}>
            <Box id="profile-head">
                <Typography variant="h5">{user_firstName}'s Profile</Typography>
                <IconButton size="small" style={{float: "right" , top:" -30px"}}> 
                    <EditIcon />
                </IconButton>
            </Box>
                <Grid container spacing={2}>
                    <Grid item md={4}  style={{ textAlign: "center"}}>
                        <img id="profile-pic" alt="pic" src={blank}></img>
                    </Grid>
                    <Grid item md={8}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>First Name :</Grid>
                            <Grid item xs={6}>{user_firstName}</Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>Last Name :</Grid>
                            <Grid item xs={6}>{user_lastName}</Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>CNIC :</Grid>
                            <Grid item xs={6}>{user_cnic}</Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>Age :</Grid>
                            <Grid item xs={6}>{user_age}</Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>Mobile No :</Grid>
                            <Grid item xs={6}>{user_mobile}</Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>Email :</Grid>
                            <Grid item xs={6}>{user_email}</Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>Address:</Grid>
                            <Grid item xs={6}>{user_address}</Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Paper>
            
            
        </Box>
    )
}
export default Profile