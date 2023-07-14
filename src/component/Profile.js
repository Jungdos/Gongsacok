import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyTableContainer from './Profile_Table/TableContainer';
import TablePagination from './Profile_Table/TablePagination';
import useApiData from './Typography/useApiData';
import Loading from './Typography/Loading';
import Error from './Typography/Error';
import TotalInfo from './Typography/TotalInfo';

// CSS 스타일 설정
const useStyles = makeStyles({
  table: {
    minWidth: 500 // 테이블의 최소 폭 설정
  },
  pagination: {
    display: "flex", // 페이징 섹션을 flex로 설정
    justifyContent: "center", // 섹션 내의 요소를 중앙으로 정렬
    marginTop: 10 // 페이징 섹션의 상단 여백 설정
  },
  pageNumber: {
    cursor: "pointer", // 마우스를 페이지 번호 위로 이동하면 포인터로 변경
    marginRight: 10 // 페이지 번호의 오른쪽 마진
  }
});

const Profile = () => {
  const classes = useStyles(); // 스타일 설정 사용
  const [page, setPage] = useState(0);

  // 일부 변수 선언 (위치, 반경, 공사 유형)
  const longitude = 12692971;
  const latitude = 3752519;
  const radius = 10000;
  const gongsaType = "emer";

  // 사용자 정의 훅을 사용하여 데이터 가져오기
  const { data, loading, error } = useApiData(longitude, latitude, radius, gongsaType, page);

  // 로딩 중이거나 오류 발생 시 적절한 컴포넌트 렌더링
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  // 데이터가 성공적으로 로드되면 테이블 렌더링
  return (
    <>
      <MyTableContainer classes={classes} inputData={data.inputData} />
      <TotalInfo totalElements={data.totalElements} totalPages={data.totalPages} />
      <TablePagination classes={classes} totalPages={data.totalPages} setPage={setPage} page={page} />
    </>
  );
};

export default Profile; // Profile 컴포넌트 내보내기
