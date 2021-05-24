import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import React from 'react';

function StyleGuideTypography() {
  return (

    <>

      <Typography variant="h3">Typography</Typography>

      <Box marginTop={3}>

        <Card>
          <CardContent>
            <Typography>Heading H1</Typography>
            <Typography variant="h1">The quick brown fox jumpted over the lazy dog.</Typography>
          </CardContent>
        </Card>

      </Box>

      <Box marginTop={3}>
        <Card>
          <CardContent>
            <Typography>Heading H2</Typography>
            <Typography variant="h2">The quick brown fox jumpted over the lazy dog.</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box marginTop={3}>
        <Card>
          <CardContent>
            <Typography>Heading H3</Typography>
            <Typography variant="h3">The quick brown fox jumpted over the lazy dog.</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box marginTop={3}>
        <Card>
          <CardContent>
            <Typography>Heading H4</Typography>
            <Typography variant="h4">The quick brown fox jumpted over the lazy dog.</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box marginTop={3}>
        <Card>
          <CardContent>
            <Typography>Heading H5</Typography>
            <Typography variant="h5">The quick brown fox jumpted over the lazy dog.</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box marginTop={3}>
        <Card>
          <CardContent>
            <Typography>Heading H6</Typography>
            <Typography variant="h6">The quick brown fox jumpted over the lazy dog.</Typography>
          </CardContent>
        </Card>
      </Box>

    </>

  );
}

export default StyleGuideTypography;
