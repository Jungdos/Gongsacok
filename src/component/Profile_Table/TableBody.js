import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const MyTableBody = ({ inputData }) => (
  <TableBody>
    {inputData.map((row, index) => (
      <TableRow key={index}>
        <TableCell>{row.cid}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.createTime}</TableCell>
        <TableCell>{row.updateTime}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);

export default MyTableBody;
