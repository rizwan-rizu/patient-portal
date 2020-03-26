import React from 'react'
import {Fade, Box, Button, Typography,Link} from '@material-ui/core'
import LoginForm from './LoginForm'

const Login  = () =>{

    return(
        <Fade in>
            <Box className="login">
                <Box className="inner-content">

                    <Box className="form-container">
                        <Typography id="sign-label" variant="h4">Sign In</Typography>

                        <LoginForm />

                        <Typography id="signup-label">Not Registered?
                        <Link href="/register"> Create an account</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Fade>
    )
}
export default Login