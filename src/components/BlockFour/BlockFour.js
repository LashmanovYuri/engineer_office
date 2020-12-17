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
    startTime: '9:00',
    endTime: '10:45',
    name: 'Теория вероятностей',
    address: 'Корпус 2, кабинет 211',
    teacherName: 'Иванов Петр Васильевич',
    type: 'Лекция',
  },
  {
    startTime: '11:00',
    endTime: '12:45',
    name: 'Информатика',
    address: 'Корпус 2, кабинет 311',
    teacherName: 'Сурков Иван Гаврилович',
    type: 'Лекция',
  },
  {
    startTime: '13:30',
    endTime: '15:45',
    name: 'Информатика',
    address: 'Корпус 2, кабинет 231',
    teacherName: 'Сурков Иван Гаврилович',
    type: 'Практика',
  },
];


// Функция-компонент
function BlockFour({

}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Юрий Лашманов
      </Typography>
      <Typography variant='body1'>
        Здесь должено быть расписание занятий
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
)(BlockFour);