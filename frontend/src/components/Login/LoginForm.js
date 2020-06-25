import React from 'react'
import { Box, TextField, Button } from '@material-ui/core'
import axios from 'axios'
import {Redirect, Route} from 'react-router-dom'
import {RegisterState} from "../../redux/selectors"
import { connect } from 'react-redux'
import {User_action} from '../../redux/actions'
import RadioInput from '../common/radio'
import {Formik} from 'formik'
import * as Yup from "yup";

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            user_id : '',
            password : '',
            loggedIn,
            radioData : [
                {radioVal: 'doctor', label: 'Doctor'},
                {radioVal: 'patient', label: 'Patient'}
            ]
    }

    // this.onChange = this.onChange.bind(this)
    // this.onSubmit = this.onSubmit.bind(this)

    }
    
    
    // onChange(e){
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // }
    // onSubmit(e){
    //     e.preventDefault()
    //     const request = {
    //         user_id : this.state.user_id,
    //         password : this.state.password
    //     }

    //     axios.post('http://localhost:5000/subscribers/login', request)
    //     .then ((res) =>{
                
    //             if (typeof res.data === "object"){
    //                 const user = JSON.stringify(res.data) 
    //                 // localStorage.setItem('user', user)
    //                 this.props.dispatch(res.data)
    //                 sessionStorage.setItem('token', "auth successfull , user session created")
    //                 this.setState({
    //                     loggedIn : true
    //                 })
    //             }
    //             if(typeof res.data === "string"){
    //                 alert("username or password is incorrect")
    //             }
            
    //     })
    //     .catch(Error =>{
    //         console.log(Error)
    //     })
    // }

    
    render(){
        if (this.state.loggedIn){
            return <Redirect to="/dashboard/profile" />
        }
        if (sessionStorage.getItem("token")){
            return <Redirect to="/dashboard/profile" />
        }

        return(
            <Formik
                    initialValues = {{
                        user_id: "", 
                        password: "",

                 }}
                    onSubmit={(values, { setSubmitting }) => {
                        axios.post('http://localhost:5000/subscribers' +this.props.LoginState.type+'/login' , values)
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
                                    alert("username or password is incorrect")
                                }
                            
                        })
                        .catch(Error =>{
                            console.log(Error)
                        })
                    }}
                    validationSchema = {Yup.object().shape({
                        user_id: Yup.string().required("User ID is required").min(3).max(15),
                        password: Yup.string().required("Password is required")
                    })}
                >
                {
                    props => {
                        const {values , touched, errors, handleChange, handleBlur, handleSubmit}= props;
                        return (

            
                                <form onSubmit={handleSubmit}>
                                    <Box className="textfield">
                                        <TextField 
                                            name="user_id" 
                                            id="login-id" 
                                            label="User ID" 
                                            variant="outlined" 
                                            autoComplete="off"
                                            value={ values.user_id}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.user_id && touched.user_id && "error"}
                                            fullWidth
                                        />
                                        {errors.user_id && touched.user_id && (
                                                <div className="error-message">{errors.user_id}</div>
                                            )}
    
                                    </Box>
                                    <Box className="textfield">
                                        <TextField
                                            name="password"
                                            id="login-password" 
                                            type="password" 
                                            label="Password" 
                                            variant="outlined" 
                                            value={ values.password}
                                            onChange={ handleChange}
                                            onBlur={handleBlur}
                                            className={errors.password && touched.password && "error"}
                                            autoComplete="off"
                                            fullWidth
                                        />
                                        {errors.password && touched.password && (
                                                <div className="error-message">{errors.password}</div>
                                            )}
    
                                    </Box>
                                    <Box id="radio_btn">
                                        <RadioInput
                                            groupLabel="Login As" 
                                            groupName="loginType"
                                            radioArray={this.state.radioData}
                                            initialValue="patient"
                                        />
                                    </Box>
                                    <Box>
                                        <Button id="login-btn" type="submit" size="large" variant="contained" color="primary">Login</Button>
                                    </Box>

                                </form>
                        )
                    }
                }
            </Formik>     
        
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
       LoginState : RegisterState(state).RegisterReducer
    }
}
const mapDispatchToprops = (dispatch) =>{
    return{
        dispatch : (user) => dispatch(User_action(user))
        
    }
    
}
export default connect(mapStateToProps,mapDispatchToprops)(LoginForm)
