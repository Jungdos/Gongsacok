import React from "react";
import Typography from '@material-ui/core/Typography';

const TotalInfo = ({ totalElements, totalPages }) => (
    <>
    <Typography variant="subtitle1">Total operators: {totalElements}</Typography>
    <Typography variant="subtitle1">Total Pages : {totalPages}</Typography>
    </>
);

export default TotalInfo;