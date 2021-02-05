import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers ({
    counter : counterReducer,
    //Or counterReducer : counterReducer,
    //Or counterReducer,
    loggedReducer : loggedReducer
})

export default allReducers;