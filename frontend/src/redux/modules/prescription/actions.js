
export const PRESCRIPTION = 'PRESCRIPTION';

export const prescription_action = (key , value) => (dispatch , getState) => {
   
    let currentState = getState().prescriptionReducer;
    currentState[key]=value;
    let dispatchObj={
        type:PRESCRIPTION,
        newState:currentState
    };
    dispatch(dispatchObj);



};