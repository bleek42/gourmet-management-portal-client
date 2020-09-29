import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { API_TOKEN, API_URL } from '../../config';

const SignUp = () => {

  const [signUp, setSignUp] = useState([]);

  const submitSignup = async (ev) => {
    ev.preventDefault();
    const { username, email, password, pwCheck } = ev.target.value;
    if (password === pwCheck) {
      alert('passwords do not match!')
    }
    try {
      const req = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: {
          username: JSON.stringify(username),
          email: JSON.stringify(email),
          password: JSON.stringify(password)
        }
      }
      const res = await fetch(req, `${API_URL}/users/new`);
      const data = await res.json();
      setSignUp([data]);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <FormControl onSubmit={submitSignup}>
          <Input name="username" placeholder="Username" type="text"></Input>
          <Input name="email" placeholder="Email" type="text" />
          <Input name="password" placeholder="Password" type="text" />
          <Input name="pwCheck" placeholder="Re-Enter Password" type="text" />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SignUp
