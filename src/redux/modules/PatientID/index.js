export const PATIENTID = '';

export const patientid_action = (key , value) => (dispatch, getState) => {
    console.log('asdfasdfasdfasdf', key,value);
    let currentState = getState().patientreducer;
    currentState[key]=value;
    let dispatchObj={
        type:PATIENTID,
        newState:currentState
    };
    dispatch(dispatchObj);

    console.log(dispatchObj);


};

const DEFAULT_STATE = {
    patient_id:"123"
};

const PatientType = (state=DEFAULT_STATE, action) => {
    switch (action.type){
        case PATIENTID:
            return action.newState;
        
        default:
            return state;

    }

};

export default PatientType;

export const patientStates = state => state