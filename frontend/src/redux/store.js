import {createStore , applyMiddleware ,combineReducers} from 'redux'
import logger from 'redux-logger'
import PatientType from './modules/PatientID/reducer'
import userType from './modules/Users/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
    combineReducers(
    {
        PatientReducer : PatientType,
        userReducer : userType
    }
    
),
    composeWithDevTools(applyMiddleware(logger))
);

export default store