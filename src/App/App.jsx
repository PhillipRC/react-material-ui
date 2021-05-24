import '@fontsource/lato';
import '@fontsource/lato/300.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import red from '@material-ui/core/colors/red';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import StyleGuide from '../StyleGuide/StyleGuide';
import AppNavigation from './AppNavigation';
import Login from '../Login/Login';

// setup the styles needed to size the app container
const useStyles = makeStyles(() => ({
  // set the app to fill the available space
  root: {
    height: '100%',
  },
  // set body to fill the available space
  scrollContainer: {
    flexGrow: 1,
    height: '20px',
    overflow: 'auto',
  },
}));

function App() {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        // update palette according to the users preference
        type: prefersDarkMode ? 'light' : 'light',
        primary: indigo,
        secondary: red,
      },
      typography: {
        fontFamily: 'Lato, Arial',
        h1: {
          fontWeight: 300,
        },
        h2: {
          fontWeight: 300,
        },
        h3: {
          fontWeight: 300,
        },
        h4: {
          fontWeight: 300,
        },
      },
      overrides: {
        MuiCssBaseline: {
          '@global': {
            html: {
              // remove selecting text
              height: '100%',
              userSelect: 'none',
            },
            body: {
              // the app is defining its own scroll container
              height: '100%',
              overflow: 'hidden',
            },
          },
        },
      },
    }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <>

        <CssBaseline />

        <Grid
          className={classes.root}
          container
          direction="column"
        >

          <Grid item container>
            <AppNavigation />
          </Grid>

          <Grid
            className={classes.scrollContainer}
            container
            item
          >

            <Router>
              <Switch>
                <Route
                  component={Login}
                  exact
                  path="/"
                />
                <Route
                  component={StyleGuide}
                  exact
                  path="/style-guide"
                />
              </Switch>
            </Router>

          </Grid>

        </Grid>
      </>
    </ThemeProvider>
  );
}

export default App;
