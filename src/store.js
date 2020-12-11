import { createStore, compose, applyMiddleware } from 'redux';

/* Импорт корневого редьюсера */
import rootReduser from './ducks';

/* Импорт промежуточных обработчиков */
import { headMiddleware } from './ducks/head/middlewares';


const appStore = () => {
    const store = createStore(
        rootReduser,
        compose(
            applyMiddleware(headMiddleware),

            /* window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, */
        ),
    );
    return store;
};

export default appStore;