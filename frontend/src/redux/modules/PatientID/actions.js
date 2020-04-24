export const PATIENTID = 'PATIENTID';
export const PATIENTINFO = 'PATIENTINFO';


export const patientid_action = (value) => {
    let currentState = value
    return{
        type : PATIENTID,
        newState: currentState
    }


};
export const patientInfo_action = (value) => {
    let currentState = value
    return{
        type : PATIENTINFO,
        newState: currentState
    }


};