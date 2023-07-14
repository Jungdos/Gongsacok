import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableCell: {
    fontWeight: 'bolder',
  },
});

const MyTableBody = ({ inputData }) => {
  const classes = useStyles();

  return (
    <TableBody>
      {inputData.map((row, index) => (
        <TableRow key={index} className={classes.tableRow}>
          <TableCell className={classes.tableCell}>{row.cid}</TableCell>
          <TableCell className={classes.tableCell}>{row.name}</TableCell>
          <TableCell className={classes.tableCell}>{row.createTime}</TableCell>
          <TableCell className={classes.tableCell}>{row.updateTime}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default MyTableBody;
