import { createStore } from 'redux';
import { createActions } from 'redux-actions';

const {
    userData: {
        getUserDataRequest: getUserDataRequest,
        getUserDataSuccess: getUserDataSuccess,
    },
} = createActions({
    USER_DATA: {
        GET_USER_DATA_REQUEST: null,
        GET_USER_DATA_SUCCESS: null,
    },
});


export {
    getUserDataRequest,
    getUserDataSuccess,
};