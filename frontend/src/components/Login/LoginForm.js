import React from 'react'
import { Box, TextField, Button } from '@material-ui/core'
import axios from 'axios'
import {Redirect, Route} from 'react-router-dom'
import { patientstate } from '../../redux/selectors'
import { connect } from 'react-redux'
import {User_action} from '../../redux/actions'

let globalvariable = null
class LoginForm extends React.Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            user_id : '',
            password : '',
            loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    }
    
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        const request = {
            user_id : this.state.user_id,
            password : this.state.password
        }

        axios.post('http://localhost:5000/subscribers/login', request)
        .then ((res) =>{
                
                if (typeof res.data === "object"){
                    const user = JSON.stringify(res.data) 
                    // localStorage.setItem('user', user)
                    this.props.dispatch(res.data)
                    sessionStorage.setItem('token', "auth successfull , user session created")
                    this.setState({
                        loggedIn : true
                    })
                }
                if(typeof res.data === "string"){
                    alert("username or password is incorrect ")
                }
            
        })
        .catch(Error =>{
            console.log(Error)
        })
    }

    
    render(){
        if (this.state.loggedIn){
            return <Redirect to="/dashboard/profile" />
        }
        if (sessionStorage.getItem("token")){
            return <Redirect to="/dashboard/profile" />
        }

        return(
            
            <form onSubmit={this.onSubmit} >
                <Box>
                    <TextField 
                        className="textfield" 
                        name="user_id" 
                        id="login-id" 
                        label="User ID" 
                        variant="outlined" 
                        autoComplete="off"
                        value={this.state.user_id}
                        onChange={this.onChange}
                        fullWidth 
                        required
                    />
                </Box>
                <Box>
                    <TextField
                        className="textfield" 
                        name="password"
                        id="login-password" 
                        type="password" 
                        label="Password" 
                        variant="outlined" 
                        value={this.state.password}
                        onChange={this.onChange}
                        autoComplete="off"
                        fullWidth
                        required
                    />
                </Box>
                <Box>
                    <Button id="login-btn" type="submit" size="large" variant="contained" color="primary">Login</Button>
                </Box>

            </form>
        
        )
    }
        
}
// function login(e){
//     e.preventDefault()
    
//     let request = {
//         _id : document.getElementById('login-id').value,
//         password :document.getElementById('login-password').value
//     }
//     axios.post('http://localhost:5000/subscribers/login', request)
//     .then ((res) =>{
//             console.log(res.data);
            
//             // return window.location.href = "http://localhost:3000/dashboard";
        
//     })
//     .catch(Error =>{
//         console.log(Error)
//     })
    
// }
function mapStateToProps(state){
    return{
       patient : patientstate(state).PatientReducer
    }
}
const mapDispatchToprops = (dispatch) =>{
    return{
        dispatch : (user) => dispatch(User_action(user))
        
    }
    
}
export default connect(mapStateToProps,mapDispatchToprops)(LoginForm)
