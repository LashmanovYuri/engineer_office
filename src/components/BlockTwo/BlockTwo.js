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
  {
    name: 'Название первой задачи',
    subject: 'Тема первой задачи',
    tags: ['Задача', 'Срочная'],
  },
  {
    name: 'Вторая задача',
    subject: 'Тема второй задачи',
    tags: ['Сделать завтра', 'Срочная'],
  },
  {
    name: 'Еще задача',
    subject: 'Тема задачи',
    tags: ['Задача', 'Важная'],
  },
];


// Функция-компонент
function BlockTwo({

}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Сергей Гаврилов
      </Typography>
      <Typography variant='body1'>
        Здесь должен быть список задач с названием, темой и тегами
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
)(BlockTwo);