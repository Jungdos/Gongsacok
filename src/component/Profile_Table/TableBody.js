import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import { makeStyles } from '@material-ui/core/styles';

// makeStyles를 이용해 CSS 스타일을 정의.
const useStyles = makeStyles({
  // 테이블 셀에 대한 스타일을 지정함.
  // 여기서는 글자 두께를 더 굵게 설정.
  tableCell: {
    fontWeight: 'bolder',
  },
});

const MyTableBody = ({ inputData }) => {
  // useStyles 훅을 호출하여 위에서 정의한 스타일을 가져옴.
  const classes = useStyles();

  return (
    <TableBody>
      {/* 입력 데이터를 반복하여 각 행을 생성함. */}
      {inputData.map((row, index) => (
        // 각 행을 생성하며 스타일을 적용함.
        <TableRow key={index} className={classes.tableRow}>
          {/* 각 셀에 대한 데이터와 스타일을 적용함. */}
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
