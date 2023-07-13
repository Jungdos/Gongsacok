import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

// CSS 스타일을 설정
const useStyles = makeStyles({
  table: { 
    minWidth: 500 //테이블의 최소 넓이 설정
  },
  pagination: { 
    display: "flex",  //페이지네이션 섹션을 flex로 설정
    justifyContent: "center", //섹션 내부 요소들을 중앙에 배치
    marginTop: 10 //페이지네이션 섹션의 상단 마진 설정
  },
  pageNumber: { 
    cursor: "pointer", // 페이지 번호위에 마우를 가져다놓으면 포인터로 바뀜
    marginRight: 10  //페이지 번호의 오른쪽 마진셜정
  }
});

const Profile = () => {
  const classes = useStyles(); // 스타일 설정을 사용함.
  // 상태 설정 함수들을 선언함.
  const [inputData, setInputData] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  // 위치, 반경, 공사 유형과 같은 몇 가지 변수를 선언함.
  const longitude = 12692971;
  const latitude = 3752519;
  const radius = 10000;
  const gongsaType = "emer";

  // 컴포넌트가 렌더링될 때 실행되는 useEffect 훅입니다.
  useEffect(() => {
    // 데이터를 가져오는 비동기 함수를 선언함.
    const fetchData = async () => {
      try {
        setLoading(true); // 로딩 상태를 true로 설정
        setError(null);// 에러 상태를 null로 설정

        // API로부터 데이터를 가져옵니다.

        const res = await axios.post(
          'https://devawsback.gongsacok.com/pub/listCompany',
          { offset: page * 2, //현재 페이지에 따라 offset을 설정
            size: 2, // 페이지 당 사이즈는 2로 설정
            longitude, 
            latitude, 
            radius, 
            gongsaType }
        );

        // 응답에서 필요한 데이터만 추출함.
        const _inputData = res.data.data.map(rowData => ({
          cid: rowData.cid,
          name: rowData.name,
          createTime: rowData.createTime,
          updateTime: rowData.updateTime
        }));

        // 상태를 업데이트함.
        setInputData(_inputData);  // 데이터를 저장
        setTotalElements(res.data.page.totalElements); // 총 요소 수를 저장
        setTotalPages(res.data.page.totalPages); // 총 페이지 수를 저장
        setLoading(false); // 로딩 상태를 false로 설정
      } catch (e) {
        // 에러가 발생하면 상태를 업데이트함.
        setError('데이터를 가져오는 데 실패했습니다'); // 에러 상태를 설정
        setLoading(false); // 로딩 상태를 false로 설정
      }
    };

    // 데이터를 가져옵니다.
    fetchData();
  }, [page]); //페이지가 바뀔 떄마다 useEffect를 재실행
    //반환하는 JSX에서 페이지 번호를 클릭하면 setPage를 호출하여 현재 페이지를 변경함

  // 로딩 중이거나 에러가 발생했을 때 적절한 컴포넌트를 렌더링함.
  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h6">오류: {error}</Typography>;

  // 데이터를 성공적으로 로드했을 때 테이블을 렌더링함.
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="간단한 테이블">
        <TableHead>
          <TableRow>
            <TableCell>관리 번호</TableCell>
            <TableCell>회사명</TableCell>
            <TableCell>생성 시간</TableCell>
            <TableCell>업데이트 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.cid}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.createTime}</TableCell>
              <TableCell>{row.updateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography variant="subtitle1">총 운영자 수: {totalElements}</Typography>
      <Typography variant="subtitle1">총 페이지 수: {totalPages}</Typography>

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
    </TableContainer>
  );
};

export default Profile; // Profile 컴포넌트를 내보냅니다.
