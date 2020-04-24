import { useScrollTrigger } from "@material-ui/core";

export const USERS = 'USERS';

export const User_action = (value) => {
    let currentState = value
    return{
        type : USERS,
        newState: currentState
    }


};