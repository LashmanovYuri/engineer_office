import React from 'react';

import Head from '../Head/Head';

import { Box, Grid, Paper } from '@material-ui/core';


function MainPage() {
  return (
    <Box>
      <Grid>
        <Paper>
          <Head />
        </Paper>
      </Grid>
    </Box>
  );
}

export default MainPage;
