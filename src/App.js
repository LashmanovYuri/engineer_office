import React from 'react';
import { connect } from 'react-redux';

import {
  isDialogSingIn,
} from './ducks/head';

import { Box } from '@material-ui/core/';

import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import DialogSignIn from './components/DialogSignIn/DialogSignIn';


function App({
  isDialogSingIn,
}) {
  return (
    <Box>
      <MainPage />
      {isDialogSingIn && <DialogSignIn />}
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
