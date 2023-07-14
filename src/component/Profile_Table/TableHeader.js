import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerRow: {
    backgroundColor: '#f2f2f2',  // Set a background color for header row
  },
  headerCell: {
    color: 'black',  // Set the text color for header cells
    fontWeight: 'bold',  // Make the text bold
  },
});

const TableHeader = () => {
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow className={classes.headerRow}>
        <TableCell className={classes.headerCell}>Control number</TableCell>
        <TableCell className={classes.headerCell}>Company name</TableCell>
        <TableCell className={classes.headerCell}>Creation time</TableCell>
        <TableCell className={classes.headerCell}>Update time</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
