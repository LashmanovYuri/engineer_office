// Импорт библиотек
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Bar} from 'react-chartjs-2';

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
//Диаграмма 

/* Входящие данные */
const dataBig = [
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
  const [chartData, setChartData] = useState({})

  const chart = () => {
    setChartData({ 
      labels: dataBig.map(key =>{
        return (
          Object.keys(key)
        )
      }),
      datasets: [
        {    
          label:[],      
          data: [750, 654, 720],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          
        }],
            
    })
  }




  useEffect(() => {
    chart()
  }, [])

  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Блок - Фадин Алексей
      </Typography>
      <Bar data={chartData} options={{cutoutPercentage:50, 
                                    title: {text:'enginer diagram', display:true},
                                    animation: {animateScale: true},                                    
                                    }} />


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