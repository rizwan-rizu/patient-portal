import { useScrollTrigger } from "@material-ui/core";

export const USERPATIENT = 'USERPATIENT';

export const UserPatient_action = (value) => {
    let currentState = value
    return{
        type : USERPATIENT,
        newState: currentState
    }


};