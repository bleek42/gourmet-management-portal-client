import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  Button,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';
import { API_TOKEN, API_URL } from '../../config';

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    username: '',
    email: '',
    password: '',
    pwCheck: '',
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setSignUp({
      ...signUp,
      [name]: value,
    })
  };

  const submitSignup = async (user) => {
    try {
      const newUser = {

      }
      const req = {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify(signUp)
      };
      const res = await fetch(`${API_URL}/users/new`, req);
      const data = await res.json();
      console.log(data);
      setSignUp(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <FormControl onSubmit={submitSignup}>
          <Input
            name="username"
            value={signUp.username}
            placeholder="Username"
            type="text"
            onChange={handleChange}
          ></Input>
          <Input
            name="email"
            value={signUp.email}
            placeholder="Email"
            type="text"
            onChange={handleChange}
          />
          <Input
            name="password"
            value={signUp.password}
            placeholder="Password"
            type="text"
            onChange={handleChange}
          />
          <Input
            name="pwCheck"
            value={signUp.pwCheck}
            placeholder="Re-Enter Password"
            type="text"
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
					</Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SignUp;
