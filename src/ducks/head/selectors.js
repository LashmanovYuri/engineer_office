export const isUserData = state => state.head.stateUserData;

export const isDialogSingIn = state => 
    state.head.stateDialogSignIn === 'OPEN'
        ? true
        : false;
