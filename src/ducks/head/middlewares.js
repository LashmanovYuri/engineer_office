import {
    getUserDataRequest,
    getUserDataSuccess,
} from './actions';


/* Временная функция для проверки ассинхронности */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const headMiddleware = store => next => action => {
    if (action.type === getUserDataRequest.toString()) {
        const userData = {
            username: 'Иванов Иван Иванович',
            age: 33,
        };

        sleep(2000)
            .then(() => {
                store.dispatch(getUserDataSuccess(userData));
            })
            .catch((error) => {
                store.dispatch(getUserDataSuccess(userData));
            })
    };

    return next(action);
};