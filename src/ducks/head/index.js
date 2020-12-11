/* Экспортируем все редьюсеры */
export { default } from './redusers';


/* Экспортируем все действия */
export {
    getUserDataRequest,
    getUserDataSuccess,

    upAge,
    downAge,
} from './actions';


/* Экспортируем все селекторы */
export {
    isUserData,
} from './selectors';