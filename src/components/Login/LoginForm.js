import React from 'react'
import { Box, TextField, Button } from '@material-ui/core'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const LoginForm = () => {

    const handleSubmit  = (values, actions) => {
        
        console.log('Submiting data: ', values, actions);
    }

    return(
        <Formik 
            initialValues={{
                email:''
            }}
            validationSchema={LoginFormSchema}
            onSubmit = {(values, actions) => handleSubmit(values, actions)}
            render={({
                values,
                errors,
                touched,
                isSubmitting,
                isValidating,
                submitCount,
                dirty,
                isValid,
                initialValues,
                validateOnChange,
                validateOnBlur
            }) =>(
                <Form>
                    <Box>
                        <TextField 
                            className="textfield" 
                            name="email" 
                            id="login-email" 
                            label="User ID" 
                            variant="outlined" 
                            autoComplete="off"
                            fullWidth 
                            type="email"
                            onChange = {() => {}}
                            required
                        />
                    </Box>
                    <Box>
                        <TextField
                            className="textfield" 
                            id="login-password" 
                            type="password" 
                            label="Password" 
                            variant="outlined" 
                            autoComplete="off"
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <Button id="login-btn" type="submit" size="large" variant="contained" color="primary">Login</Button>
                    </Box>

                </Form>
            )}
        />
    )
};

const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
    .email("Invalid Email")
    .required('Email is required')
}) 
export default LoginForm