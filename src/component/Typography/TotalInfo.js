import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '5%',
    marginLeft: '5%'
  }
});

const TotalInfo = ({ totalElements, totalPages }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="subtitle1">총 사업체 수: {totalElements}</Typography>
      <Typography variant="subtitle1">총 페이지 수: {totalPages}</Typography>
    </div>
  );
};

export default TotalInfo;
