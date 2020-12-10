import {
    getUserDataRequest,
    getUserDataSuccess,
} from './actions';


export const headMiddleware = store => next => action => {
    if (action.type === getUserDataRequest.toString()) {
        const userData = {
            username: 'Ivanov Ivan Ivanovich',
            age: 33,
        };

        store.dispatch(getUserDataSuccess(userData));
    };

    return next(action);
};