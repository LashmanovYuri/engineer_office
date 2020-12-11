/* Экспортируем все редьюсеры */
export { default } from './redusers';


/* Экспортируем все действия */
export {
    getUserDataRequest,
    getUserDataSuccess,
    upAge,
    downAge,

    openDialogSignIn,
    closeDialogSignIn,
} from './actions';


/* Экспортируем все селекторы */
export {
    isUserData,
    isDialogSingIn,
} from './selectors';