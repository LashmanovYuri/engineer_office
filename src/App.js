import React from 'react';
import { connect } from 'react-redux';

import {
  isDialogSingIn,
} from './ducks/head';

import { Box } from '@material-ui/core/';

import Header from './components/Header/Header';
import MainPage from './conteiners/MainPage/MainPage';


function App({
  isDialogSingIn,
}) {
  return (
    <Box>
      <MainPage />
    </Box>
  );
}


const mapStateToProps = state => ({
  isDialogSingIn: isDialogSingIn(state),
});


const mapDispatchToProps = {};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
