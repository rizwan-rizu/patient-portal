import React from 'react'
import Profile from '../Profile/'
import { Box } from '@material-ui/core'
import {useSelector} from 'react-redux'
import { patientStates } from '../../redux/selectors'

const PatientProfile =() =>{ 
    const PatientIDState= useSelector(patientStates)
    return(
        
        <Box>
            <Profile />
            {PatientIDState.patientreducer.patient_id}
        </Box>
    )
}
export default PatientProfile