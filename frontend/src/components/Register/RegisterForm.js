import React from 'react'
import {Fade, Box, Button, Typography,Link, Grid} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import RadioInput from '../common/radio'
import {useDispatch , useSelector} from 'react-redux'
import {RegisterState} from '../../redux/selectors'
import {Formik} from 'formik'
import * as Yup from "yup";

const RegisterForm = () => {

    

    const radioData = [
        {radioVal: 'doctor', label: 'Doctor'},
        {radioVal: 'patient', label: 'Patient'}
    ]

    const registerstate = useSelector(RegisterState).RegisterReducer

    // const Register = () => {
        // let request = {
        //     firstname : document.getElementById('fname').value,
        //     lastname : document.getElementById('lname').value,
        //     _id : document.getElementById('user_id').value,
        //     age :document.getElementById('age').value,
        //     email : document.getElementById('email').value,
        //     phone : document.getElementById('phone').value,
        //     address :document.getElementById('adress').value,
        //     password : document.getElementById('conform-password').value,
        //     // specialization : document.getElementById('docspec').value,
        //     // hospital: document.getElementById('clinic').value,
        // }
        // if (status == 'doctor'){
        //     request.specialization = document.getElementById('docspec').value
        //     request.hospital = document.getElementById('clinic').value
        // }

        // let requestAPI = '';
        // if (radio.value === 'doctor') {
        //     requestAPI = 'http://localhost:5000/subscribers/user_doctors'
        // }
        // else {
        //     requestAPI = 'http://localhost:5000/subscribers/user_patients'
        // }
    //     axios.post("http://localhost:5000/subscribers", )
    //     .then (res =>{
    //         alert(res.data)
    //     })
    //     .catch(Error =>{
    //         console.log(Error)
    //     })
        
    // }
    return(
        <Box>
                <Formik
                    initialValues = {{
                        firstname: "", 
                        email: "", 
                        lastname:"",
                        _id:"",
                        age:"",
                        phone:"",
                        address:"",
                        password:"",
                        confirmedPassword:"",
                        specialization:"",
                        hospital:"",

                 }}
                    onSubmit={(values, { setSubmitting }) => {
                    console.log("Logging in", values)
                        axios.post("http://localhost:5000/subscribers", values)
                        .then (res =>{
                            alert(res.data)
                            window.location.href = "http://localhost:3000/login/";
                        })
                        .catch(Error =>{
                            console.log(Error)
                        })
                    }}
                    validationSchema = {Yup.object().shape({
                        firstname: Yup.string().required("firstname is required"),
                        email: Yup.string().email('please enter valid email').required("email is required"),
                        lastname: Yup.string().required("lastname is required"),
                        _id: Yup.string().required("CNIC is required").min(13).max(15),
                        age: Yup.number().required("age is required"),
                        phone: Yup.number().required("phone number is required"),
                        address: Yup.string().required("Address is required"),
                        specialization: Yup.string(),
                        hospital: Yup.string(),
                        password: Yup.string()
                            .required("Password is required")
                            .matches(
                            /^(?=.*\d).{4,8}$/,
                            "Password expression. Password must be between 4 and 8 digits long and include at least one numeric digit."
                            ),
                            confirmedPassword: Yup.string()
                            .required("Confirm password must be enter")
                            .min(4)
                            .max(8)
                            .test("password-match", "Password must match", function(value) {
                            return this.parent.password === value;
                            }),
                    })}
                >
                {
                    props => {
                        const {values , touched, errors, handleChange, handleBlur, handleSubmit}= props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                        <Grid item md={6}>
                                            <TextField 
                                                className="textfield"
                                                id="fname"
                                                name="firstname"
                                                label="First Name"
                                                variant="outlined"
                                                fullWidth
                                                autoComplete="off"
                                                value={values.firstname}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={errors.firstname && touched.firstname && "error"}

                                            />
                                            {errors.firstname && touched.firstname && (
                                                <div className="error-message">{errors.firstname}</div>
                                            )}
                                        </Grid>
                                        <Grid item md={6} >
                                            <TextField 
                                                className="textfield" 
                                                id="lname" 
                                                name="lastname"
                                                label="Last Name" 
                                                variant="outlined" 
                                                autoComplete="off"
                                                value={values.lastname}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={errors.lastname && touched.lastname && "error"}
                                                fullWidth 
                                            />
                                            {errors.lastname && touched.lastname && (
                                                <div className="error-message">{errors.lastname}</div>
                                            )}
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                id="user_id"
                                                label="CNIC"
                                                name="_id"
                                                placeholder="This will be your user id"
                                                multiline
                                                variant="outlined"
                                                value={values._id}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={errors._id && touched._id && "error"}
                                                fullWidth
                                            />
                                            {errors._id && touched._id && (
                                                <div className="error-message">{errors._id}</div>
                                            )}
                                        </Grid>
                                        <Grid item md={6} >
                                        <TextField 
                                                className="textfield"
                                                id="age"
                                                label="Age"
                                                name="age"
                                                variant="outlined"
                                                autoComplete="off"
                                                value={values.age}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={errors.age && touched.age && "error"}
                                                fullWidth
                                            />
                                            {errors.age && touched.age && (
                                                <div className="error-message">{errors.age}</div>
                                            )}
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField 
                                                id="email"
                                                label="email"
                                                type="email"
                                                name="email"
                                                variant="outlined" 
                                                autoComplete="off"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.email && touched.email && "error"}
                                                value={values.email}
                                                fullWidth 
                                            />

                                            {errors.email && touched.email && (
                                                <div className="error-message">{errors.email}</div>
                                            )}
    
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField 
                                                className="textfield"
                                                id="phone"
                                                name="phone"
                                                label="Contact No"
                                                variant="outlined" 
                                                autoComplete="off"
                                                value={values.phone}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={errors.phone && touched.phone && "error"}
                                                fullWidth 
                                            />
                                            {errors.phone && touched.phone && (
                                                <div className="error-message">{errors.phone}</div>
                                            )}
    
                                        </Grid>
                                        <Grid item md={12}>
                                            <TextField 
                                                className="textfield"
                                                id="adress"
                                                label="Adress"
                                                name="address"
                                                variant="outlined" 
                                                autoComplete="off"
                                                value={values.address}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={errors.address && touched.address && "error"}
                                                fullWidth 
                                            />
                                            {errors.address && touched.address && (
                                                <div className="error-message">{errors.address}</div>
                                            )}
    
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
                                                onBlur={handleBlur}
                                                value={values.password}
                                                className={errors.password && touched.password && "error"}
                                                onChange={handleChange}
                                                fullWidth
                                            />
                                            {errors.password && touched.password && (
                                                <div className="error-message">{errors.password}</div>
                                            )}
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField
                                                className="textfield"
                                                id="conform-password" 
                                                type="password" 
                                                label="Confirm Password" 
                                                variant="outlined"
                                                name="confirmedPassword"
                                                autoComplete="off"
                                                value={values.confirmedPassword}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                className={errors.confirmedPassword && touched.confirmedPassword && "error"}
                                                fullWidth
                                            />
                                            {errors.confirmedPassword && touched.confirmedPassword && (
                                                <div className="error-message">{errors.confirmedPassword}</div>
                                            )}
                                        </Grid>
                                        <Grid item md={12}>
                                            <RadioInput
                                                groupLabel="Register As" 
                                                groupName="loginType"
                                                radioArray={radioData}
                                                initialValue={registerstate.type}
                                            />
                                        </Grid>
                                    </Grid>
                                            {
                                                registerstate.type === 'doctor' &&  (
                                                <Grid container spacing={2}>
                                                        <Grid item md={6}>
                                                        <TextField 
                                                            className="textfield"
                                                            id="docspec"
                                                            label="Speacialization"
                                                            variant="outlined" 
                                                            autoComplete="off"
                                                            name="specialization"
                                                            value={values.Speacialization}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            className={errors.specialization && touched.specialization && "error"}
                                                            fullWidth
                                                        />
                                                        {errors.specialization && touched.specialization && (
                                                            <div className="error-message">{errors.specialization}</div>
                                                        )}
            
                                                    </Grid>
                                                    <Grid item md={6}>
                                                        <TextField 
                                                            className="textfield"
                                                            id="clinic"
                                                            label="Hospital/Clinic"
                                                            variant="outlined" 
                                                            autoComplete="off"
                                                            name="hospital"
                                                            value={values.hospital}
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            className={errors.hospital && touched.hospital && "error"}
                                                            fullWidth 
                                                        />
                                                        {errors.hospital && touched.hospital && (
                                                            <div className="error-message">{errors.hospital}</div>
                                                        )}
            
                                                    </Grid>
                                                </Grid>
                                                )
                                            }
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
                        )
                    }
                }

            </Formik>          
        </Box>
    )
}
export default RegisterForm