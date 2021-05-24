import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

/**
 * Define the initial values of the form
 */
const initialValues = {
  agree: false,
  userId: '',
  password: '',
};

export default function LoginForm() {
  /**
   * Setup a state for the form values
   */
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState(initialValues);

  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ('userId' in fieldValues) {
      temp.userId = fieldValues.userId ? '' : 'User ID is required';
    }
    if ('password' in fieldValues) {
      temp.password = fieldValues.password ? '' : 'Password is required';
    }
    if ('agree' in fieldValues) {
      temp.agree = (values.agree === false) ? '' : 'You must agree';
    }
    setErrors({
      ...temp,
    });
    // return a true/false if errors are found
    return Object.values(temp).every((x) => x === '');
  };

  /**
   * Handle form input changes
   */
  const handleInputChange = (event) => {
    const {
      checked,
      name,
      type,
      value,
    } = event.target;

    // if it is not a checkbox use value
    setValues({
      ...values,
      [name]: (type !== 'checkbox' ? value : checked),
    });
    validate({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
    if (validate()) {
      // TODO handle submit
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >

      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
        </Grid>

        <Grid item xs={12}>

          <TextField
            autoComplete="off"
            autoFocus
            error={Boolean(errors?.userId)}
            fullWidth
            helperText={(errors?.userId)}
            id="userId"
            label="User ID"
            name="userId"
            onBlur={handleInputChange}
            onChange={handleInputChange}
            required
            value={values.userId}
            variant="outlined"
          />

        </Grid>

        <Grid item xs={12}>
          <TextField
            autoComplete="off"
            error={Boolean(errors?.password)}
            fullWidth
            helperText={(errors?.password)}
            id="password"
            label="Password"
            name="password"
            onBlur={handleInputChange}
            onChange={handleInputChange}
            required
            type="password"
            value={values.password}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={(
              <Checkbox
                checked={values.agree}
                color="primary"
                id="agree"
                name="agree"
                onChange={handleInputChange}
              />
            )}
            label="I agree *"
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Sign In
          </Button>
        </Grid>
      </Grid>

    </form>
  );
}
