import {USERTYPE} from './actions'
import {TOGGLE} from './actions'

const DEFAULT_STATE = {
    type : 'patient',
    toggle: true
};

const registerType = (state=DEFAULT_STATE, action) => {
    switch (action.type){
        case USERTYPE:
            return {
                ...state,
                type : action.newState
            }
            
        case TOGGLE:
            return {
                ...state,
                toggle : action.newState
            }
            
        default:
            return state;

    }

};

export default registerType;

export const RegisterState = state => state

