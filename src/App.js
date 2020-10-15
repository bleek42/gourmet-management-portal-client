import React from 'react';
import { Grid } from '@material-ui/core';
import { Route, Link, Switch } from 'react-router-dom';
// components
import PdfTable from './components/PdfTable/PdfTable';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center">
      <Grid item>
        <Switch>
          <PdfTable />
          {/* <Link to="/pdf" component={PdfTable}>Table</Link>
          <Link to="/signup" component={SignUp}>SignUp</Link> */}
        </Switch>
      </Grid>
    </Grid>
  );
}

export default App;
