import React from 'react';
import PatientHistoryTable from '../Patient/PatientHistoryTable'
import { Box , Typography, Paper } from '@material-ui/core';
import {useSelector} from 'react-redux'
import { userstate } from '../../redux/selectors';
import PageHeader from '../../components/common/header'


const PatientHistory = () => {
    const user = useSelector(userstate).userReducer
    return (
        <div>
            <PageHeader title="HISTORY RECORD" />
            <Box className="history-container">
                <Paper elevation={3}>
                    {/* <Box className="history-head">
                        <Typography variant="h5">Medicle History</Typography>
                    </Box> */}
                    <Box style={{padding: "25px 20px 25px 20px"}}>
                        <PatientHistoryTable patientID={user._id}/>
                    </Box>
                </Paper>
            </Box>
        </div>
        
    );
};

export default PatientHistory;