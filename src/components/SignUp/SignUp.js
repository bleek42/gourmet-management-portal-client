import React from 'react';
import { Grid, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

const SignUp = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <FormControl>
          <InputLabel></InputLabel>
          <Input></Input>
          <FormHelperText></FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SignUp
