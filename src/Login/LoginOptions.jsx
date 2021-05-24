import { Button, Grid } from '@material-ui/core';
import React from 'react';

export default function LoginDetails() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Button
          variant="contained"
          fullWidth
        >
          Option
        </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          variant="contained"
          fullWidth
        >
          Option
        </Button>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button
          variant="contained"
          fullWidth
        >
          Option
        </Button>
      </Grid>
    </Grid>
  );
}
