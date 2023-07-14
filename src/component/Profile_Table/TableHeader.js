import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import { makeStyles } from '@material-ui/core/styles';

// makeStyles를 통해 CSS 스타일을 정의.
const useStyles = makeStyles({
  // 테이블 헤더의 배경색을 지정.
  headerRow: {
    backgroundColor: '#f2f2f2',
  },
  // 테이블 헤더 셀의 텍스트 색상과 글꼴 두께를 지정함.
  headerCell: {
    color: 'black',  
    fontWeight: 'bold',  
  },
});

const TableHeader = () => {
  // useStyles 훅을 호출하여 위에서 정의한 스타일을 가져옴.
  const classes = useStyles();

  return (
    <TableHead>
      {/* 각 행을 TableRow 컴포넌트로 생성하고, 배경색을 적용함. */}
      <TableRow className={classes.headerRow}>
        {/* 각 셀을 TableCell 컴포넌트로 생성하고, 텍스트 색상과 글꼴 두께를 적용함. */}
        <TableCell className={classes.headerCell}>사업자 번호</TableCell>
        <TableCell className={classes.headerCell}>성함</TableCell>
        <TableCell className={classes.headerCell}>생성 시간</TableCell>
        <TableCell className={classes.headerCell}>업데이트 시간</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
