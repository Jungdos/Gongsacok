import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableContainer: {
    boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)',  // Add shadow effect to the container
    borderRadius: '15px',  // Rounded corners
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'

  },
});

const MyTableContainer = ({ classes, inputData }) => {
  const styles = useStyles();

  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHeader />
        <TableBody inputData={inputData} />
      </Table>
    </TableContainer>
  );
};

export default MyTableContainer;
