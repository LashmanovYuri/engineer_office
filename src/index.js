/* Импорт библиотеки React */
import React from 'react';
import ReactDOM from 'react-dom';

/* Импорт функции-провайдера хранилища состояний */
import { Provider } from 'react-redux';

/* Импорт функции-провайдера глобального стиля */
import { ThemeProvider } from '@material-ui/core/styles';

/* Импорт хранилища состояний */
import store from './store';

/* Импорт глобального стиля */
import mainTheme from './theme';

/* Импорт главного компонента приложения */
import App from './App';

/* Вызываем функцию рендера виртуального DOM */
ReactDOM.render( // передаем в нее следующие штуки:
  <Provider store={store()}> {/* выше всех передается глобальное хранилище состояний */}
    <ThemeProvider theme={mainTheme}> {/* передаем глобальный стиль */}
      <App /> {/* т.к. наше приложение находится в глубине тегов, то к нему будет применяться и глобальный стиль и хранилище состояний */}
    </ThemeProvider>
  </Provider>,
  document.getElementById('root') /* и все передаем элементу реального DOM */
);
