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
    username: 'Иванов Петр Константинович',
    position: 'Директор всея конторы',
    telephone: 89271234567,
    url: 'http://addressbook.sbrf.ru/123',
    avatar: 'https://million-wallpapers.ru/wallpapers/5/51/505015039754505/avatar.jpg'
  },
  {
    username: 'Петров Сергей Васильевич',
    position: 'Заместитель всех',
    telephone: 89271231122,
    url: 'http://addressbook.sbrf.ru/234',
    avatar: 'https://i.pinimg.com/736x/62/8f/49/628f49798bba23a996bbb0fe8aad174e--avatar-james-cameron-avatar-fan-art.jpg'
  },
  {
    username: 'Мухамедов Махмуд Изгил Оглы',
    position: 'Водитель звездалета',
    telephone: 89271234234,
    url: 'http://addressbook.sbrf.ru/221',
    avatar: 'https://img1.goodfon.ru/original/2988x1771/3/33/avatar-neytiri-zoe-saldana.jpg'
  },
];

// Функция-компонент
function BlockThree({

}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Сергей Кишов
      </Typography>
      <Typography variant='body1'>
        Здесь должены быть карточки избраных сотрудников
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
)(BlockThree);