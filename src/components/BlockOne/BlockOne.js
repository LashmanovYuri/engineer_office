// Импорт библиотек
import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// Импорт действий Redux
import {
  openDialogSignIn,
} from '../../ducks/head';

// Импорт компонентов Material-UI
import {
  Card, 
  IconButton, 
  Typography,
} from '@material-ui/core';

// Импорт иконок Material-UI
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

// Локальная таблица стилей
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));


// Функция-компонент
function BlockOne({

}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Блок - Захаров Антон
      </Typography>
      <IconButton
        onClick={() => {
          alert('Hello')
        }}
      >
        <MailIcon />
      </IconButton>
    </Card>
  );
}


// Redux (не удалять!!!)
const mapStateToProps = state => ({});

// Redux (не удалять!!!)
const mapDispatchToProps = {};

// Redux (не удалять!!!)
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockOne);