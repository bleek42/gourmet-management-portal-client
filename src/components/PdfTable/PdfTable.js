// libraries & frameworks
import React, { useEffect, useContext } from 'react';
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
import PortalContext from '../../hooks/PortalContext';
import { fetchOneEmployee, fetchAllEmployees } from '../../utils/async';
// components
import PdfButton from '../PdfButton/PdfButton';

export default function PdfTable() {
  // const { getAll, getById, loading, error } = useGetEmployees();

  const { employees, getEmployees, getEmployeeId, error, loading, isLoading, hasError } = useContext(PortalContext);

  useEffect(() => {
    console.log(employees);
    const getData = () => [
      fetchAllEmployees()
        .then((data) => {
          getEmployees(data);
        })
        .catch((error) => {
          hasError(error);
        })
        .finally((loading) => {
          isLoading(loading);
        })
    ];
    getData();
  }, [employees, loading, error, getEmployees, hasError, isLoading]);

  return (
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
          {employees.map((employee, idx) => (
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
  );
}
