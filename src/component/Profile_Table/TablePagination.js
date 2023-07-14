import React from 'react';
import Typography from '@material-ui/core/Typography';

const TablePagination = ({ classes, totalPages, setPage, page }) => (
  <div className={classes.pagination}>
    {[...Array(totalPages).keys()].map(num => (
      <Typography
        key={num}
        className={classes.pageNumber}
        onClick={() => setPage(num)}
        color={num === page ? "secondary" : "primary"}
      >
        {num + 1}
      </Typography>
    ))}
  </div>
);

export default TablePagination;
