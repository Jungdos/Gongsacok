import React, { useState } from 'react'; 
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 

// RegisterForm 컴포넌트를 정의. 이 컴포넌트는 registerUser 함수를 props로 받음.
const RegisterForm = ({ registerUser }) => {
  // username과 password의 상태를 관리하는 state를 정의하고 초기값은 빈 문자열로 설정.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // form 제출 시 실행될 함수를 정의.
  const handleSubmit = async (e) => {
    e.preventDefault(); // form 제출에 따른 페이지 리로드를 막음.
    await registerUser(username, password); // registerUser 함수를 username과 password를 전달하며 호출
  };

  return (
    // form 요소를 렌더링. form 제출 시 handleSubmit 함수를 호출하도록 설정.
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="등록할 아이디"
        value={username} // value는 username state와 연동됨.
        onChange={(e) => setUsername(e.target.value)} 
        // 사용자의 입력에 따라 setUsername 함수를 통해 username state를 업데이트함.
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="등록할 비밀번호"
        type="password"
        value={password} // value는 password state와 연동됨.
        onChange={(e) => setPassword(e.target.value)} 
        // 사용자의 입력에 따라 setPassword 함수를 통해 password state를 업데이트.
      />
      <Button
        type="submit" 
        // Button의 type을 'submit'으로 설정하여, 클릭 시 form 제출을 트리거.
        fullWidth
        variant="contained"
        color="primary"
      >
        회원가입
      </Button>
    </form>
  );
};

export default RegisterForm;
