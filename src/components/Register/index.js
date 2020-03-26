import React from 'react'
import {Fade, Box, Button, Typography,Link, Grid} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import RadioInput from '../common/radio'
import RegisterForm from './RegisterForm'

const Register  = () =>{

    


    return(
        <Fade in>
            
            <Box className="Register">
                <Box className="inner-content">

                    <Box className="form-container">
                        <Typography id="register-label" variant="h4">Register</Typography>

                        <Box>
                            <RegisterForm />
                        </Box>
                        
                        
                    </Box>
                </Box>
            </Box>
        </Fade>
    )
}
export default Register