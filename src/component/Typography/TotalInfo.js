import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//커스텀 스타일을 정의하기 위한 makeStyles 함수를 사용
const useStyles = makeStyles({
  container: {
    marginTop: '5%',
    marginLeft: '5%'
  }
});

//전체 기업수와 전체 페이지 수를 표시하는 컴포넌트
const TotalInfo = ({ totalElements, totalPages }) => {
  //useStyles 훅을 호출하여 스타일을 가져옴
  const classes = useStyles();

  return (
    //컨테이너의 스타일을 적용함
    <div className={classes.container}>

      {/* Typography 컴포넌트를 이용하여 전체 기업수를 표시함 */}
      <Typography variant="subtitle1">총 사업체 수: {totalElements}</Typography>
      {/* Typography 컴포넌트를 이용하여 전체 페이지수를 표시함 */}
      <Typography variant="subtitle1">총 페이지 수: {totalPages}</Typography>
    </div>
  );
};

export default TotalInfo;
