import {PRESCRIPTION} from './actions'

    const date = new Date();
    const fullDate =  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const DEFAULT_STATE = {
        patientid : '',
        date :fullDate,
        diagnose :'',
        bloodpressure : '',
        temperature :'',
        pulserate : '',
        bloodgulucose : '',
        medicine :'',
        type : '',
        dosage : '',
        usagetime : '',
        tests : '',
        comments : '',
    };

const prescriptionReducer = (state=DEFAULT_STATE, action) => {
    switch (action.type){
        case PRESCRIPTION:
            return action.newState
            
        default:
            return state;

    }

};

export default prescriptionReducer;

export const prescriptionstate = state => state

