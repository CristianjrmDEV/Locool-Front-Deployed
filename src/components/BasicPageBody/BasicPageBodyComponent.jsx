import * as React from 'react';
import Grid from '@mui/material/Grid';
import BasicPageBodyCardComponent from './BasicPageBodyCard/BasicPageBodyCardComponent';

export default function BasicBodyComponent() {

  return (
    <Grid container justifyContent="center" sx={{margin: 2}}>
      <Grid item xs={12} md={6} >
        <Grid container spacing={6} justifyContent="center">
          <BasicPageBodyCardComponent />
        </Grid>
      </Grid>
    </Grid>
  );
}