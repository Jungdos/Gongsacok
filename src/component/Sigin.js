import React, { useState } from 'react';
import UserAuth from './Login/UserAuth';
import axios from 'axios';

// 로그인 컴포넌트를 정의합니다
const Signin = () => {
  // 상태 변수 authMode를 선언하고 초기값을 'login'으로 설정합니다
  // 이는 현재 화면이 로그인 화면인지 회원가입 화면인지를 결정합니다
  const [authMode, setAuthMode] = useState('login');

  // authMode 상태를 변경하는 함수입니다
  // 만약 현재 authMode가 'login'이면 'register'로 변경하고, 그렇지 않으면 'login'으로 변경합니다
  const handleAuthModeSwitch = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  };

  // 로그인을 처리하는 비동기 함수입니다
  const loginUser = async (username, password) => {
    try {
      // 서버에 POST 요청을 보내어 로그인을 시도합니다
      const response = await axios.post('/api/login', { username, password });
      if (response.status === 200) {
        // 로그인이 성공하면 이 부분에서 로그인 성공을 처리합니다
        console.log(response.data);
      }
    } catch (error) {
      // 에러가 발생하면 콘솔에 에러를 출력합니다
      console.error(error);
    }
  };

  // 회원가입을 처리하는 비동기 함수입니다
  const registerUser = async (username, password) => {
    try {
      // 서버에 POST 요청을 보내어 회원가입을 시도합니다
      const response = await axios.post('/api/register', { username, password });
      if (response.status === 200) {
        // 회원가입이 성공하면 이 부분에서 회원가입 성공을 처리합니다
        console.log(response.data);
      }
    } catch (error) {
      // 에러가 발생하면 콘솔에 에러를 출력합니다
      console.error(error);
    }
  };

  // 최종적으로 로그인/회원가입 컴포넌트를 반환합니다
  return (
    <div className="signin">
      <UserAuth
        authMode={authMode}
        handleAuthModeSwitch={handleAuthModeSwitch}
        loginUser={loginUser}
        registerUser={registerUser}
      />
    </div>
  );
};

export default Signin;
