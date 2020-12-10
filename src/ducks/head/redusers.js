import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

/* Импортируем action'ы */
import {
    getUserDataSuccess,
} from './actions';


/* Создаем state, а в нем reducer реагирующий на action */
/* const stateUserData = handleActions(
    {
        [getUserDataSuccess.toString()]: (state, action) => {
            return {
                ...state,
                action,
            };
        },
    },
    [],
); */


const stateUserData = handleActions(
    {
        [getUserDataSuccess.toString()]: ( _state, action ) => action.payload,
    },
    [],
);


export default combineReducers({
    stateUserData,
});