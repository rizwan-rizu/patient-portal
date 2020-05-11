import {PATIENTID} from './actions'
import {PATIENTINFO} from './actions'
const DEFAULT_STATE = {
    patient_id: '',
    firstname : '',
    lastname : '',
    _id : '',
    age : '',
    phone : '',
    email : '',
    address : '',
    password : '',
    flag : false
};

const PatientType = (state=DEFAULT_STATE, action) => {
    switch (action.type){
        case PATIENTID:
            return  {
                    ...state,
                    _id : action.newState
                }

        case PATIENTINFO:
            return action.newState
                
            
            
        default:
            return state;

    }

};

export default PatientType;

export const patientstate = state => state
