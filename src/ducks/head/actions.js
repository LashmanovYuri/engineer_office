import { createActions } from 'redux-actions';

const {
    userData: {
        getUserDataRequest: getUserDataRequest,
        getUserDataSuccess: getUserDataSuccess,

        upAge: upAge,
        downAge: downAge,
    },
    dialogSignIn: {
        openDialogSignIn: openDialogSignIn,
        closeDialogSignIn: closeDialogSignIn,
    }
} = createActions({
    USER_DATA: {
        GET_USER_DATA_REQUEST: null,
        GET_USER_DATA_SUCCESS: null,

        UP_AGE: null,
        DOWN_AGE: null,
    },
    DIALOG_SIGN_IN: {
        OPEN_DIALOG_SIGN_IN: null,
        CLOSE_DIALOG_SIGN_IN: null,
    },
});


export {
    getUserDataRequest,
    getUserDataSuccess,
    upAge,
    downAge,

    openDialogSignIn,
    closeDialogSignIn,
};