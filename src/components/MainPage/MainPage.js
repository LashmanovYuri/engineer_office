import React from 'react';

import Head from '../Head/Head';

import { Grid, Paper } from '@material-ui/core';


function MainPage() {
  return (
    <React.Component>
      <Grid>
        <Paper>
          <Head />
        </Paper>
      </Grid>
    </React.Component>
  );
}

export default MainPage;
