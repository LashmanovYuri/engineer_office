import React, { useState } from 'react';
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
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

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
            label="E-mail"
            type="email"
            fullWidth
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Пароль"
            type="password"
            fullWidth
            onChange={(e) => setPass(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialogSignIn()} color="primary">
            Отменить
          </Button>
          <Button onClick={() => alert(`Login: ${login} \nPassword: ${pass}`)} color="primary">
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