import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const MyTableContainer = ({classes, inputData}) => (
  <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      <TableHeader />
      <TableBody inputData={inputData} />
    </Table>
  </TableContainer>
);

export default MyTableContainer;
