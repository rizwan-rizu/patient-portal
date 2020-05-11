import React ,{ useEffect} from 'react'
import {Fade, Box, Button, Typography,Link, Paper} from '@material-ui/core'
import LoginForm from './LoginForm'
import {useDispatch} from 'react-redux'
import {User_action} from '../../redux/actions'

const Login  = () =>{

 const dispatch = useDispatch()

 const storeUserInRedux = () =>{
     const user = sessionStorage.getItem('token')
     dispatch(User_action({name : "hadi"}))
 }

    return(
        <Fade in>
            <Box className="login">
                <Paper className="inner-content" elevation={3}>

                    <Box className="form-container">
                        <Typography id="sign-label" variant="h4">Sign In</Typography>

                        <LoginForm />

                        <Typography id="signup-label">Not Registered?
                        <Link href="/register"> Create an account</Link>
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Fade>
    )
}
export default Login