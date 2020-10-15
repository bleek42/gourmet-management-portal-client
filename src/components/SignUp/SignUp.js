import React, { useState } from 'react';
import {
  Grid,
  FormGroup,
  Button,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core';
import { API_TOKEN, API_URL, submitSignup } from '../../utils/async';

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    username: '',
    email: '',
    password: '',
    pwCheck: '',
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setSignUp({
      ...signUp,
      [name]: value,
    });
  };

  /* example user
    const testUser = {
      username: 'someUser123',
      email: 'someUser123@gmail.com',
      password: 'someP@ssw3rd123'
    }  
  */

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, value } = ev.target;
    submitSignup(signUp).then(res => (
      res.json().then(data => (
        setSignUp({
          ...data,
          [name]: value
        })
      )).catch(err => console.error(err))
    ));
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid container item>
        <FormGroup onSubmit={handleSubmit}>
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
        </FormGroup>
      </Grid>
    </Grid >
  );
};

export default SignUp;
