import {USERPATIENT} from './actions'
const DEFAULT_STATE = {
    firstname : '',
    lastname : '',
    _id : '',
    age : '',
    phone : '',
    email : '',
    address : '',
    password : '',
};

const userPatientReducer = (state=DEFAULT_STATE, action) => {
    switch (action.type){
        case USERPATIENT:
            return action.newState
            
        default:
            return state;

    }

};

export default userPatientReducer;

export const userpatientstate = state => state

