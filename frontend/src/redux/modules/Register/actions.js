import { useScrollTrigger } from "@material-ui/core";

export const USERTYPE = 'USERTYPE';
export const TOGGLE = 'TOGGLE'

export const register_action = (value) => {
    let currentState = value
    return{
        type : USERTYPE,
        newState: currentState
    }
}

export const toggle_action = (value) => {
    let currentState = value
    return{
        type : TOGGLE,
        newState: currentState
    }


};