import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyleGuideButtons from './StyleGuideButtons';
import StyleGuideTypography from './StyleGuideTypography';

// setup the styles needed to size the app container
const useStyles = makeStyles((theme) => ({
  // set padding to compensate for grid spacing
  // https://material-ui.com/components/grid/#limitations
  container: {
    padding: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(3),
  },
}));

function StyleGuide() {
  const classes = useStyles();
  return (

    <Container
      className={classes.container}
      component="main"
      disableGutters
      maxWidth="xs"
    >

      <Grid container spacing={3}>

        <Grid item xs={12}>

          <Typography variant="h1">Style Guide</Typography>

          <Divider variant="fullWidth" className={classes.divider} />

        </Grid>

        <Grid item xs={12}>

          <StyleGuideTypography />

        </Grid>

        <Grid item xs={12}>

          <StyleGuideButtons />

        </Grid>

      </Grid>

    </Container>

  );
}

export default StyleGuide;
