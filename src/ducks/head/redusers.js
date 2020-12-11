import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

/* Импортируем action'ы */
import {
    getUserDataSuccess,

    upAge,
    downAge,
} from './actions';


const stateUserData = handleActions(
    {
        [getUserDataSuccess.toString()]: ( _state, action ) => action.payload,

        [upAge.toString()]: ( state, action ) => {
            return {
                ...state,
                age: state.age + 1,
            }
        },

        [downAge.toString()]: ( state, action ) => {
            return {
                ...state,
                age: state.age - 1,
            }
        },
    },
    [],
);


export default combineReducers({
    stateUserData,
});