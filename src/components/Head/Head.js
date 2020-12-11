import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/* Импорт функций Redux */
import {
  isUserData,
  getUserDataRequest,
  upAge,
  downAge,
} from '../../ducks/head';

/* Импорт компонентов Material-UI */
import {
  Box,
  LinearProgress,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Card,
  Button,
} from '@material-ui/core';


/* Стиль компонента */
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}))


function Head({
  userData,
  getUserDataRequest,
  upAge,
  downAge,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (userData.length < 1) {
      getUserDataRequest();
    }
  })

  
  return (
    <Box>
      <Grid className={classes.root} container spacing={2}>
        <Grid item xs={3}>
          <Card className={classes.card} variant="outlined">
            <Typography variant="body2">
              <Typography display="inline" variant="body2" color="textSecondary">
                ФИО:
              </Typography>
              {userData.username ? userData.username : <LinearProgress /> }
            </Typography>
            <Typography variant="body2">
              <Typography display="inline" variant="body2" color="textSecondary">
                Возраст:
              </Typography>
              {userData.age ? userData.age : <LinearProgress /> }
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={3}>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => upAge()}>
              Повысить возраст
            </Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => downAge()}>
              Понизить возраст
            </Button>
        </Grid>

      </Grid>
    </Box>
  );
}


const mapStateToProps = state => ({
  userData: isUserData(state),
});


const mapDispatchToProps = {
  getUserDataRequest,
  upAge,
  downAge,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Head)