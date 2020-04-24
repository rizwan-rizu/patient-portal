import React from 'react'
import {Fade, Box, Button, Typography,Link, Grid, Paper} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import RadioInput from '../common/radio'
import RegisterForm from './RegisterForm'

const Register  = () =>{

    


    return(
        <Fade in>
            
            <Box className="Register">
                <Paper className="inner-content" elevation={3}>

                    <Box className="form-container">
                        <Typography id="register-label" variant="h4">Register</Typography>

                        <Box>
                            <RegisterForm />
                        </Box>
                        
                        
                    </Box>
                </Paper>
            </Box>
        </Fade>
    )
}
export default Register