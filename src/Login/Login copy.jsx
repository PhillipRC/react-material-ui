import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginOptions from './LoginOptions';

const useStyles = makeStyles((theme) => ({
  // set padding to compensate for grid spacing
  // https://material-ui.com/components/grid/#limitations
  container: {
    padding: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const [userId, setUserId] = React.useState();
  const [errors, setErrors] = React.useState();

  const handleUserIdChange = (event) => {
    const { target: { value } } = event;
    setErrors({ userId: '' });
    setUserId(value);
    // const reg = new RegExp(/^d*$/).test(value);
    if (value.trim === '') {
      setErrors({ userId: 'A User ID is required' });
    }
  };

  return (
    <Container
      className={classes.container}
      component="main"
      disableGutters
    >

      <Paper
        className={classes.container}
        elevation={3}
      >
        <LoginHeader />
      </Paper>

      <Grid container>

        <Grid item xs={12}>
          <Paper
            className={classes.container}
            elevation={3}
          >
            <LoginForm />
          </Paper>
        </Grid>

      </Grid>

      <Paper
        className={classes.container}
        elevation={3}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>

              <TextField
                variant="outlined"
                required
                fullWidth
                id="userId"
                label="User ID"
                name="userId"
                autoComplete="off"
                value={userId}
                onChange={handleUserIdChange}
                error={Boolean(errors?.userId)}
                helperText={(errors?.userId)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText="A password is required"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </Paper>

      <Paper
        className={classes.container}
        elevation={3}
      >
        <LoginOptions />
      </Paper>

    </Container>
  );
}
