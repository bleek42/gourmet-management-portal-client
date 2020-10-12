// libraries & frameworks
import React, { useState, useEffect } from 'react';
// materialUI
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TableFooter,
  CircularProgress,
} from '@material-ui/core';
import { } from '@material-ui/core';
// custom hook
import { useGetEmployees } from '../../hooks/useGetEmployees';
import { fetchOneEmployee, fetchAllEmployees } from '../../utils/async';
// components
import PdfButton from '../PdfButton/PdfButton';

export default function PdfTable() {
  // const { getAll, getById, loading, error } = useGetEmployees();
  const [getAll, setAll] = useState([]);
  const [getById, setById] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      fetchAllEmployees()
        .then((data) => {
          setAll(data);
        })
        .catch((err) => {
          if (err) setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    return () => {
      console.info('cleanup');
      getData();
    };
  }, [getAll]);

  if (error) {
    return (
      <div>
        <p>some error text</p>
        <p>some more error text</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <TableContainer id="pdf-elem" className="txt" component={Paper}>
        <Table stickHeader aria-label="sticky-table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right" style={{ paddingRight: '60px' }}>
                Department
              </TableCell>
            </TableRow>
            <TextField
              label="Report"
              variant="outlined"
              color="secondary"
            ></TextField>
          </TableHead>
          <TableBody>
            {getAll.map((employee, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row">
                  {employee.id}
                </TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.age}</TableCell>
                <TableCell>{employee.address}</TableCell>
                <TableCell>{employee.city}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>{employee.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <PdfButton />
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
