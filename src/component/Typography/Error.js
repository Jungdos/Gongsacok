import React from "react";
import Typography from '@material-ui/core/Typography';

//오류 메세지를 보여주는 컴포넌트
const Error = ( { message} ) => 
    //Typography 컴포넌트를 이용해 텍스트를 표시함
    //"variant" 속성을 "h6"으로 설정해 글자 크기를 조절함
<Typography variant="h6">Error: {message} 
    {/* "Error: " 뒤에 전달받은 오류 메세지를 출력 */}
</Typography>
    

export default Error;