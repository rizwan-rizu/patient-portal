import React from 'react'
import { Box, Paper, Typography, Button , TextField, Container, Grid, IconButton } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Prescription = () => {
    const date = new Date();
    const fullDate =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    
    return(
        <Box className="prescription">
            <Paper elevation={3}>
                <Box className="head">
                    <Typography variant="h5">Prescription Form</Typography>
                </Box>
                <Container>
                <Box className="prescrtionForm">
                    <form>
                        <Grid container spacing={3}>
                            <Grid item md={6} >
                                <TextField id="outlined-basic" label="Patient ID" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Grid item md={6} >
                                
                                <TextField
                                    disabled
                                    id="outlined-disabled"
                                    defaultValue={fullDate}
                                    label="Date"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={12} >
                                <TextField id="outlined-basic" label="Diagnosis/complaints" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Grid item md={3} >
                                <TextField
                                        id="outlined-textarea"
                                        label="Blood Pressure"
                                        placeholder="mmhg"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item md={3} >
                                <TextField
                                        id="outlined-textarea"
                                        label="Temperaute"
                                        placeholder="Fahrenheit"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item md={3} >
                                <TextField
                                        id="outlined-textarea"
                                        label="Pulse Rate"
                                        placeholder="Pulses per minute"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item md={3} >
                                <TextField
                                        id="outlined-textarea"
                                        label="Blood Glucose"
                                        placeholder="mg/dl"
                                        multiline
                                        variant="outlined"
                                    />
                            </Grid>
                            <Grid item md={4} >
                                <TextField id="outlined-basic" label="Medication" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Grid item md={2} >
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel >Type</InputLabel>
                                    <Select label="Type">
                                        
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Tablet</MenuItem>
                                    <MenuItem value={20}>Injection</MenuItem>
                                    <MenuItem value={30}>Syrup</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={2} >
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel >Dosage</InputLabel>
                                    <Select
                                    label="Dosage"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>1 times a day</MenuItem>
                                    <MenuItem value={20}>2 times a day</MenuItem>
                                    <MenuItem value={30}>3 times a day</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={3} >
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel >Usage time</InputLabel>
                                    <Select label="Usage time">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>for 3 days</MenuItem>
                                    <MenuItem value={20}>for 5 days</MenuItem>
                                    <MenuItem value={30}>for a week</MenuItem>
                                    <MenuItem value={40}>for a  2 weeks</MenuItem>
                                    <MenuItem value={50}>for a month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={1}>
                                <IconButton>
                                    <AddBoxIcon />
                                </IconButton>
                            </Grid>
                            <Grid item md={6} >
                                <TextField id="outlined-basic" label="Suggested laboratory tests" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Grid item md={1} >
                                <IconButton>
                                    <AddBoxIcon />
                                </IconButton>
                            </Grid>
                            <Grid item md={12} >
                                <TextField id="outlined-basic" label="Comments/suggestions" variant="outlined" autoComplete="off" fullWidth />
                            </Grid>
                            <Box id="submit" >
                                <Button variant="contained" id="submitbtn" >Submit</Button>
                            </Box>
                            
                            
                        </Grid>
                    </form>
                    
                    
                </Box>
                </Container>

            </Paper>
        </Box>
    )
}
export default Prescription