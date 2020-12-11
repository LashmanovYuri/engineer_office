import React from 'react';
import { connect } from 'react-redux';

import {
  closeDialogSignIn,
  isDialogSingIn,
} from '../../ducks/head';

import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';


function DialogSignIn({
  closeDialogSignIn,
  isDialogSingIn,
}) {


  return (
    <Box>
      <Dialog
        open={isDialogSingIn}
        onClose={() => closeDialogSignIn()}
      >
        <DialogTitle>Аутентификация пользователя</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Для доступа ко всем функциям кабинета инженера необходимо пройти процедуру аутентификации.
            Введите e-mail и пароль.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="E-mail"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Пароль"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialogSignIn()} color="primary">
            Отменить
          </Button>
          <Button onClick={() => closeDialogSignIn()} color="primary">
            Войти
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}


const mapStateToProps = state => ({
  isDialogSingIn: isDialogSingIn(state),
});


const mapDispatchToProps = {
  closeDialogSignIn,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DialogSignIn)