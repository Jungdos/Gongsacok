import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

import { makeStyles } from '@material-ui/core/styles';

// makeStyles를 이용해 CSS 스타일을 정의함.
const useStyles = makeStyles({
  // 테이블 컨테이너에 대한 스타일을 지정함.
  // 그림자 효과, 모서리 둥글게 처리, flex 레이아웃 등을 설정.
  tableContainer: {
    boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)', 
    borderRadius: '15px',  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh'
  },
});

const MyTableContainer = ({ classes, inputData }) => {
  // useStyles 훅을 호출하여 위에서 정의한 스타일을 가져옴.
  const styles = useStyles();

  return (
    // 테이블 컨테이너에 스타일을 적용함.
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        {/* 테이블 헤더와 테이블 본문을 추가함. */}
        <TableHeader />
        <TableBody inputData={inputData} />
      </Table>
    </TableContainer>
  );
};

export default MyTableContainer;
