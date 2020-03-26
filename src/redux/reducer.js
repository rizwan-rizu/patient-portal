import { combineReducers } from 'redux';

import patientReducer from './modules/PatientID';

export default combineReducers({
  patientreducer: patientReducer,
});
