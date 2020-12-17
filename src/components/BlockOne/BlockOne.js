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

/* Входящие данные */
const data = [
  {'Январь': {
    'Всего обращений': '750',
    'Нарешен КС': '43',
    'Возвратов': '33',
  }},
  {'Февраль': {
    'Всего обращений': '654',
    'Нарешен КС': '76',
    'Возвратов': '33',
  }},
  {'Март': {
    'Всего обращений': '720',
    'Нарешен КС': '83',
    'Возвратов': '13',
  }}
];

// Функция-компонент
function BlockOne({

}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Алексей Фадин
      </Typography>
      <Typography variant='body1'>
        Здесь должен быть график с возможностью переключения по месяцам
      </Typography>
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