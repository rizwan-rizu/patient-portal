import React from 'react'
import {Fade, Box, Button, Typography,Link, Grid} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import RadioInput from '../common/radio'
const RegisterForm = () => {

    const radioData = [
        {radioVal: 'doctor', label: 'Doctor'},
        {radioVal: 'patient', label: 'Patient'}
    ]

    return(
        <Box>
            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <TextField 
                                        className="textfield"
                                        id="outlined-basic"
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        autoComplete="off"
                                    />
                                </Grid>
                                <Grid item md={6} >
                                    <TextField 
                                        className="textfield" 
                                        id="outlined-basic" 
                                        label="Last Name" 
                                        variant="outlined" 
                                        autoComplete="off"
                                        fullWidth 
                                        required
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField 
                                        className="textfield"
                                        id="outlined-basic"
                                        label="CNIC"
                                        variant="outlined"
                                        autoComplete="off"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item md={6} >
                                <TextField 
                                        className="textfield"
                                        id="outlined-basic"
                                        label="Age"
                                        variant="outlined"
                                        autoComplete="off"
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField 
                                        className="textfield"
                                        id="outlined-basic"
                                        label="email"
                                        type="email"
                                        variant="outlined" 
                                        autoComplete="off"
                                        fullWidth 
                                    />

                                </Grid>
                                <Grid item md={6}>
                                    <TextField 
                                        className="textfield"
                                        id="outlined-basic"
                                        label="Contact No"
                                        variant="outlined" 
                                        autoComplete="off"
                                        fullWidth 
                                    />

                                </Grid>
                                <Grid item md={12}>
                                    <TextField 
                                        className="textfield"
                                        id="outlined-basic"
                                        label="Adress"
                                        variant="outlined" 
                                        autoComplete="off"
                                        fullWidth 
                                    />

                                </Grid>
                                <Grid item md={12}>
                                    <RadioInput 
                                        groupLabel="Login as" 
                                        groupName="loginType"
                                        radioArray={radioData} 
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TextField 
                                        className="textfield"
                                        id="outlined-basic"
                                        label="Speacialization"
                                        variant="outlined" 
                                        autoComplete="off"
                                        fullWidth 
                                    />

                                </Grid>
                                <Grid item md={6}>
                                    <TextField 
                                        className="textfield"
                                        id="outlined-basic"
                                        label="Hospital/Clinic"
                                        variant="outlined" 
                                        autoComplete="off"
                                        fullWidth 
                                    />

                                </Grid>
                            </Grid>
                            <Box className="sign-up-btn">
                                <Button  size="large" variant="contained" color="primary">
                                    Sign up
                                </Button>
                                <Typography id="login-label">
                                    Already have an account ?
                                    <Link href="/login"> Login</Link>
                                </Typography>
                            </Box>
                            
        </Box>
    )
}
export default RegisterForm