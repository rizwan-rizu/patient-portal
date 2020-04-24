import React from 'react'
import {Fade, Box, Button, Typography,Link, Grid} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import RadioInput from '../common/radio'
const RegisterForm = () => {

    const radioData = [
        {radioVal: 'doctor', label: 'Doctor'},
        {radioVal: 'patient', label: 'Patient'}
    ]

    return(
        <Box>
            <form onSubmit={(e)=>Register(e)}>
                <Grid container spacing={2}>
                                    <Grid item md={6}>
                                        <TextField 
                                            className="textfield"
                                            id="fname"
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
                                            id="lname" 
                                            label="Last Name" 
                                            variant="outlined" 
                                            autoComplete="off"
                                            fullWidth 
                                            required
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            id="user_id"
                                            label="CNIC"
                                            placeholder="This will be your user id"
                                            name="patient_id"
                                            multiline
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={6} >
                                    <TextField 
                                            className="textfield"
                                            id="age"
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
                                            id="email"
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
                                            id="phone"
                                            label="Contact No"
                                            variant="outlined" 
                                            autoComplete="off"
                                            fullWidth 
                                        />

                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField 
                                            className="textfield"
                                            id="adress"
                                            label="Adress"
                                            variant="outlined" 
                                            autoComplete="off"
                                            fullWidth 
                                        />

                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            className="textfield" 
                                            name="password"
                                            id="password" 
                                            type="password" 
                                            label="Password" 
                                            variant="outlined" 
                                            autoComplete="off"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField
                                            className="textfield" 
                                            name="password"
                                            id="conform-password" 
                                            type="password" 
                                            label="Confirm Password" 
                                            variant="outlined" 
                                            autoComplete="off"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item md={12}>
                                        <RadioInput 
                                            groupLabel="Login As" 
                                            groupName="loginType"
                                            radioArray={radioData}
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField 
                                            className="textfield"
                                            id="docspec"
                                            label="Speacialization"
                                            variant="outlined" 
                                            autoComplete="off"
                                            fullWidth 
                                        />

                                    </Grid>
                                    <Grid item md={6}>
                                        <TextField 
                                            className="textfield"
                                            id="clinic"
                                            label="Hospital/Clinic"
                                            variant="outlined" 
                                            autoComplete="off"
                                            fullWidth 
                                        />

                                    </Grid>
                                </Grid>
                                <Box className="sign-up-btn">
                                    <Button type="submit" size="large" variant="contained" color="primary">
                                        Sign up
                                    </Button>
                                    <Typography id="login-label">
                                        Already have an account ?
                                        <Link href="/login"> Login</Link>
                                    </Typography>
                                </Box>
            </form>
                            
        </Box>
    )
};

function Register(e) {
    e.preventDefault()
    let request = {
        firstname : document.getElementById('fname').value,
        lastname : document.getElementById('lname').value,
        _id : document.getElementById('user_id').value,
        age :document.getElementById('age').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        address :document.getElementById('adress').value,
        specialization : document.getElementById('docspec').value,
        password : document.getElementById('conform-password').value,
    }
    // let requestAPI = '';
    // if (radio.value === 'doctor') {
    //     requestAPI = 'http://localhost:5000/subscribers/user_doctors'
    // }
    // else {
    //     requestAPI = 'http://localhost:5000/subscribers/user_patients'
    // }
    axios.post("http://localhost:5000/subscribers", request)
    .then (res =>{
        alert(res.data)
    })
    .catch(err => console.log("unable to login"))
    
}
export default RegisterForm