import React from "react";
import LoginForm from './LoginForm';  
import RegisterForm from "./RegisterForm";  
import BackgroundImage from './BackgroundImage'  
import {loginUser, registerUser} from './Api'

// UserAuth라는 함수형 컴포넌트를 선언.
// 이 컴포넌트는 로그인 폼, 회원가입 폼, 배경 이미지 컴포넌트를 포함.
const UserAuth = () => {
    return (
        // JSX 요소들을 Fragment(<>와 </>로 표현) 안에 넣어줌.
        // Fragment는 여러 요소를 그룹화할 때 사용함.
        <>
            <BackgroundImage />  
            {/* 배경 이미지 컴포넌트를 렌더링합니다. */}
            <LoginForm loginUser={loginUser} />  
            {/* 로그인 폼 컴포넌트를 렌더링하고, loginUser 함수를 props로 전달합니다.*/}
            <RegisterForm registerUser={registerUser} />  
            {/* 회원가입 폼 컴포넌트를 렌더링하고, registerUser 함수를 props로 전달합니다.*/}
        </>
    );
};

export default UserAuth;  
