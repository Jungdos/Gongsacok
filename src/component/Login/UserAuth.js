import React from "react";
import LoginForm from './LoginForm';
import RegisterForm from "./RegisterForm";
import BackgroundImage from './BackgroundImage'
import {loginUser, registerUser} from './Api'

const UserAuth = () => {
    return (
        <>
            <BackgroundImage />
            <LoginForm loginUser={loginUser} />
            <RegisterForm registerUser={registerUser} />
        </>
    );
};

export default UserAuth;
