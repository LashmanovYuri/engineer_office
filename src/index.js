import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import store from './store';
import mainTheme from './theme';

import App from './App';

ReactDOM.render(
  <Provider store={store()}>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
