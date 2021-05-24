import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  space: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function StyleGuideButtons() {
  const classes = useStyles();
  return (

    <>

      <Typography variant="h3">Buttons</Typography>

      <Box marginTop={3}>

        <Card>
          <CardContent>
            <Typography>Contained</Typography>
            <div className={classes.space}>
              <Button variant="contained">Default</Button>
              <Button variant="contained" startIcon={<DeleteIcon />}>Default</Button>
              <Button color="primary" variant="contained">Primary</Button>
              <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>Primary</Button>
              <Button color="secondary" variant="contained">Secondary</Button>
              <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>Secondary</Button>
            </div>
          </CardContent>
        </Card>

      </Box>

      <Box marginTop={3}>

        <Card>
          <CardContent>
            <Typography>Default</Typography>
            <div className={classes.space}>
              <Button>Default</Button>
              <Button startIcon={<DeleteIcon />}>Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="primary" startIcon={<DeleteIcon />}>Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button color="secondary" startIcon={<DeleteIcon />}>Secondary</Button>
            </div>
          </CardContent>
        </Card>

      </Box>

      <Box marginTop={3}>

        <Card>
          <CardContent>
            <Typography>Outline</Typography>
            <div className={classes.space}>
              <Button variant="outlined">Default</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />}>Default</Button>
              <Button color="primary" variant="outlined">Primary</Button>
              <Button color="primary" variant="outlined" startIcon={<DeleteIcon />}>Primary</Button>
              <Button color="secondary" variant="outlined">Secondary</Button>
              <Button color="secondary" variant="outlined" startIcon={<DeleteIcon />}>Secondary</Button>
            </div>
          </CardContent>
        </Card>

      </Box>

      <Box marginTop={3}>

        <Card>
          <CardContent>
            <Typography>Icon</Typography>
            <div className={classes.space}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>

      </Box>

    </>

  );
}

export default StyleGuideButtons;
