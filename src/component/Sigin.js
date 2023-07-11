import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

async function loginUser(credentials) {
  return axios({
    method: 'post',
    url: 'https://devawsback.gongsacok.com/pub/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: credentials
    //axios에 사용될수있는 매서드. 
    
  })
  .then(response => response.data)
  //리턴값을 제대로 받았다면 response.data를 반환한다.
  .catch(error => {
    console.error('There was an error!', error);
    throw error;
  });
  //리턴값을 제대로 받지 못했다면 브라우저 콘솔창에 error메레지를 표시한다.
}

async function registerUser(userData) {
  //회원가입에 대한 async 함수만들기. 함수의 이름은 registerUser
  return axios({
    method: 'post',
    url: 'https://devawsback.gongsacok.com/pub/addUser',
    headers: {
      'Content-Type': 'application/json'
    },
    data: userData
  })
  .then(response => {
    //데이터를 받아오면서
    if (response.data.status === 'success') {
      //만약 리턴값의 status가 'success'라면
      swal('Success', 'You have successfully registered!', 'success', {
        //swal 표시 인터페이스를 통해 'success' , "You have successfully registered"라는 창을 띄운다
        buttons: false,
        timer: 2000,
      }).then(() => {
        window.location.href = '/Profile';
        //그리고 리턴값을 제대로 받았다면 /Profile로 페이지 전환을 시킨다.
      });
    } else {
      swal('Failed', 'Registration failed. Please check your inputs.', 'error');
    }   //리턴값이 제대로 받아지지않았을 경우엔
        //swal표시 인터페이스를 통해 'Failed' , "Registration failed. Please check your inputs"
        // 라는 창을 띄우고 데이터를 반환한다.
    return response.data;
  })
  .catch(error => {
    console.error('There was an error!', error);
    swal('Error', 'An error occurred during registration. Please try again later.', 'error');
    throw error;
        //axios 요청중에 오류가 발생한다면 다음과같은 메세지가 콘솔창에 뜨게한다
        //There was an error!
        //그리고 사용자 인터페이스에서도 swal을 통해 
        //Error', "An error occurred during registration. Please try again later." 메세지를 표시한다
  });
}
        //.then 과 .catch의 부정적인 메세지표현은 비슷하나 둘의 차이점은
        //.then은 서버로부터 응답에 대한 메세지를 표시한것이고
        //.catch는 Axios를 통한 요청에 대한 응답의 메세지를 표시한것이다.

export default function Signin() {
  const classes = useStyles();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameRegister, setUsernameRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
        //아이디와 비밀번호, 등록할아이디와 등록할 비밀번호를 useState를 통해 변수로 저장한다.
        //유동적으로 수정할수있도록 set 을 붙여서 하나씩 더만들어준다.
  const handleSubmit = async (e) => {
    e.preventDefault();
        //asund (e) 라는 handleSubmit 함수를 실행하면서 페이지가 새로고침되는걸 막아준다.
    try {
      const response = await loginUser({
        userid: username,
        passwd: password
      });
        //try 라는 박스 안에서 loginUser 라는걸 받아오기까지 대기한다.
        // 그내용은 userid , passwd
      console.log('Login API response:', response);
        // 콘솔창에 Login API response 를 서버에서 받아온다.
      if (response.status === 'success') {
        //만약 받아온 status가 'success'일경우
        swal('Success', 'You have successfully logged in!', 'success', {
        //swal 인터페이스 라이브러리로 인한 표시창을 띄운다.
        // 그내용은 '성공', '로그인에 성공하였습니다.'
          buttons: false,
          timer: 2000,
        }).then(() => {
        //요청한 값을 받아온다면
          localStorage.setItem('jtoken', response.data.jtoken);
          localStorage.setItem('user', JSON.stringify(response.data));
          window.location.href = '/profile';
        //서버에서 jtoken 과 user값을 받아와서 로컬스토리지에 저장한다.
        //저장한 후엔 /profile 페이지로 페이지 전환이 일어난다.
        });
      } else {
        //서버에 요청한 값을 받아오지못한다면.
        swal('Failed', 'Login failed. Please check your username and password.', 'error');
      }
        //swal인터페이스 라이브러리로 인한 표시창을 띄운다.
        //그 내용은 '실패', '로그인실패. 아이디와 비밀번호를 확인해주세요!.' 
    } catch (error) {
      swal('Error', 'An error occurred during login. Please try again later.', 'error');
    }
        // Axios요청에 의한 응답이 없을경우 다음과 같은 메세지를 swal라이브러리로 창을 띄운다.
        //'에러', '로그인이 지연되고있습니다. 다시 시도해주세요.'
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({
        userid: usernameRegister,
        passwd: passwordRegister
      });
  
      if (response.status === 'success') {
        swal('Success', 'You have successfully registered!', 'success', {
          buttons: false,
          timer: 2000,
        }).then(() => {
          window.location.href = '/login';
        });
      } else {
        swal('Failed', 'Registration failed. Please check your inputs.', 'error');
      }
    } catch (error) {
      swal('Error', 'An error occurred during registration. Please try again later.', 'error');
    }
  };

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} md={7} className={classes.image} />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userid"
              name="userid"
              label="User ID"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmitRegister}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usernameRegister"
              label="Username for Register"
              value={usernameRegister}
              onChange={(e) => setUsernameRegister(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="passwordRegister"
              label="Password for Register"
              type="password"
              value={passwordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
