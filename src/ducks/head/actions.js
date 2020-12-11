import { createActions } from 'redux-actions';

const {
    userData: {
        getUserDataRequest: getUserDataRequest,
        getUserDataSuccess: getUserDataSuccess,

        upAge: upAge,
        downAge: downAge,
    },
} = createActions({
    USER_DATA: {
        GET_USER_DATA_REQUEST: null,
        GET_USER_DATA_SUCCESS: null,

        UP_AGE: null,
        DOWN_AGE: null,
    },
});


export {
    getUserDataRequest,
    getUserDataSuccess,

    upAge,
    downAge,
};