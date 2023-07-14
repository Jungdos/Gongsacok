import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Style } from '@material-ui/icons';

// 페이징 컴포넌트
const TablePagination = ( { classes , totalPages , setPage , page }) => (
  // 페이징 컨테이너 div. Material UI의 클래스 스타일 적용.
  <div className={classes.paging} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
    {
      // 총 페이지 수만큼 map을 돌면서 각 페이지 번호를 출력.
      [...Array(totalPages).keys() ].map(num => (
        <Typography
          // 각 페이지 번호는 고유해야 하므로 key로 사용.
          key={num}
          // 클래스 이름 지정. 스타일 적용을 위해 사용.
          className={classes.pageNumber}
          // 해당 페이지 번호를 클릭하면 setPage 함수를 호출하여 현재 페이지를 업데이트.
          onClick = { ( ) => setPage ( num )}
          // 현재 페이지일 경우 텍스트 색상을 'secondary'로, 아니면 'primary'로 설정.
          color={num === page ? "secondary" : "primary"}
        >
          {/* 페이지 번호 출력. 페이지 번호는 0부터 시작하므로 1을 더해줌. */}
          {num + 1}
        </Typography>
      ))
    }
  </div>
);

export default TablePagination;
