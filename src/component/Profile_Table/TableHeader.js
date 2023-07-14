import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

const TableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>Control number</TableCell>
      <TableCell>Company name</TableCell>
      <TableCell>Creation time</TableCell>
      <TableCell>Update time</TableCell>
    </TableRow>
  </TableHead>
);

export default TableHeader;
