import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '20px'
  }
});

const TotalInfo = ({ totalElements, totalPages }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="subtitle1">Total number of businesses: {totalElements}</Typography>
      <Typography variant="subtitle1">Total pages: {totalPages}</Typography>
    </div>
  );
};

export default TotalInfo;
