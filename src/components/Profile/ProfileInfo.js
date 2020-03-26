import React from 'react'
import { Box , Grid, Typography, TextField, Avatar, Divider,List, ListItem, ListItemText, Paper, } from '@material-ui/core';
import Input from '@material-ui/core/Input';
const ProfileInfo = ({
    userid
}) => {

    const labels =[
        'First Name',
        'Last Name',
        'Cnic',
        'Age',
        'phone',
        'Adress'

    ];

    const data = [
        { 
            id : '1',
            firstname :'Muhammad Rizwan',
            lastname : 'Rasheed',
            age:'24',email:'abc@gmail.com',
            phone:'1234567',
            adress:'abc street '
        },
        { id : '2', firstname :'farhan', lastname : 'Rasheed',},
        { id : '3', firstname :'sufyan', lastname : 'Rasheed',}
    ]

    return(
        <Box>
            <Grid container>
                    <Grid item md={5}>
                        <List>
                            <ListItem>
                                <ListItemText primary="First Name :"></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Last Name :"></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Cnic :"></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Age :"></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Mobile No :"></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email :"></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Adress :"></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={5}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                <Input
                                    defaultValue={data.filter(x => x.id ==="1").map(x => x.firstname)}
                                    disabled 
                                    inputProps={{ 'aria-label': 'description' }}
                                 />
                                    
                                    
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>{data.filter(x => x.id ==="1").map(x => x.lastname)}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>{data.filter(x => x.id ==="1").map(x => x.id)}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>{data.filter(x => x.id ==="1").map(x => x.age)}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>{data.filter(x => x.id ==="1").map(x => x.phone)}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>{data.filter(x => x.id ==="1").map(x => x.email)}
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>{data.filter(x => x.id ==="1").map(x => x.adress)}
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    
            </Grid>
        </Box>
    )
}
export default ProfileInfo