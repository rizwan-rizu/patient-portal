import {createStore , applyMiddleware ,combineReducers} from 'redux'
import logger from 'redux-logger'
import PatientType from './modules/PatientID/reducer'
import userType from './modules/Users/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import prescriptionReducer from './modules/prescription/reducer'
import thunk from 'redux-thunk'
import registerType from './modules/Register/reducer'

const store = createStore(
    combineReducers(
    {
        PatientReducer : PatientType,
        userReducer : userType,
        prescriptionReducer:prescriptionReducer,
        RegisterReducer:registerType
    }
    
),
    composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store