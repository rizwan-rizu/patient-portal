import {USERS} from './actions'
const DEFAULT_STATE = {
    firstname : '',
    lastname : '',
    _id : '',
    age : '',
    phone : '',
    email : '',
    address : '',
    password : '',
    speacialization: '',
    hospital : '',
};

const userType = (state=DEFAULT_STATE, action) => {
    switch (action.type){
        case USERS:
            return action.newState
            
        default:
            return state;

    }

};

export default userType;

export const userstate = state => state

