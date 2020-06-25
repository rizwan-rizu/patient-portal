import React from 'react'
import { Box , Grid, Typography, Avatar, Divider,List, ListItem, ListItemText, Paper,IconButton } from '@material-ui/core';
import blank from '../../Assets/images/blank.png';
import pp from '../../Assets/images/pp.jpg'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const DoctorProfile = () => {
    return(
        <Box className="profile">

            {/* <h1>{user.name},{user.firstname},{user.password},{user.lastname},{user.phone},{user.speacialization}</h1> */}
            <Paper elevation={3}>
            <Box id="profile-head">
                <Typography variant="h6">Doctor Profile</Typography>
                <IconButton style={{float: "right" , top:" -38px"}}> 
                    <EditOutlinedIcon fontSize="small" style={{color:"white"}}/>
                </IconButton>
            </Box>
                <Grid container spacing={2}>
                    <Grid item md={5}  style={{ textAlign: "center"}}>
                        <img id="profile-pic" alt="pic" src={blank}></img>
                    </Grid>
                    <Grid item md={7} style={{marginBottom:"25px"}}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>First Name :</Grid>
                            <Grid item xs={8}></Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>Last Name :</Grid>
                            <Grid item xs={8}></Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>CNIC :</Grid>
                            <Grid item xs={8}></Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>Age :</Grid>
                            <Grid item xs={8}></Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>Mobile No :</Grid>
                            <Grid item xs={8}></Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>Email :</Grid>
                            <Grid item xs={8}></Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>Address:</Grid>
                            <Grid item xs={8}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            
            
        </Box>
    )
}
export default DoctorProfile