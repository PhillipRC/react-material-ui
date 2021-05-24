import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AppBrand from './AppBrand';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppNavigation() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>

        <Router>
          <Switch>
            <Route
              exact
              path="/"
            >
              <Typography align="center" variant="h6" className={classes.title}>
                Welcome
              </Typography>
            </Route>
            <Route
              exact
              path="/style-guide"
            >
              <AppBrand />
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Style Guide
              </Typography>
              <Button color="inherit">Option</Button>
            </Route>
          </Switch>
        </Router>

      </Toolbar>
    </AppBar>
  );
}
