import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginOptions from './LoginOptions';
import LoginDetails from './LoginDetails';

const useStyles = makeStyles((theme) => ({
  // set padding to compensate for grid spacing
  // https://material-ui.com/components/grid/#limitations
  container: {
    padding: theme.spacing(3),
  },
  items: {
    padding: theme.spacing(3),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Container
      component="main"
      disableGutters
      className={classes.container}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
      >

        <Grid
          item
          xs={12}
        >
          <Paper
            className={classes.items}
            elevation={3}
          >
            <LoginHeader />
          </Paper>
        </Grid>

        <Grid
          className={classes.items}
          item
          lg={6}
          sm={8}
          xs={12}
        >
          <Paper
            className={classes.items}
            elevation={3}
          >
            <LoginForm />
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <LoginOptions />
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Paper
            className={classes.items}
            elevation={3}
          >
            <LoginDetails />
          </Paper>
        </Grid>

      </Grid>

    </Container>
  );
}
