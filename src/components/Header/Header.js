import React from 'react';
import { connect } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';

import {
  openDialogSignIn,
} from '../../ducks/head';


import {
  Box,
  Card,
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));

function Header({
  openDialogSignIn,
}) {
  const classes = useStyles();


  return (
    <Box>
      <Card className={classes.root}>
        <Box>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <MailIcon />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
}

const mapStateToProps = state => ({});


const mapDispatchToProps = {
  openDialogSignIn
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)