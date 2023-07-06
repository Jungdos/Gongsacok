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
import * as us from '../services/UserService';

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
  return us.loginUser(credentials);
}

async function registerUser(userData) {
  return axios({
    method: 'POST',
    url: 'https://devawsback.gongsacok.com/pub/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: userData
  })
  .then(response => {
    if (response.data.status === 'success') {
      swal('Success', 'You have successfully registered!', 'success', {
        buttons: false,
        timer: 2000,
      }).then(() => {
        window.location.href = '/login';
      });
    } else {
      swal('Failed', 'Registration failed. Please check your inputs.', 'error');
    }
    return response.data;
  })
  .catch(error => {
    console.error('There was an error!', error);
    swal('Error', 'An error occurred during registration. Please try again later.', 'error');
    throw error;
  });
}

export default function Signin() {
  const classes = useStyles();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameRegister, setUsernameRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        userid: username,
        passwd: password
      });
  
      console.log('Login API response:', response);
  
      if (response.status === 'success') {
        swal('Success', 'You have successfully logged in!', 'success', {
          buttons: false,
          timer: 2000,
        }).then(() => {
          localStorage.setItem('jtoken', response.data.jtoken);
          localStorage.setItem('user', JSON.stringify(response.data));
          window.location.href = '/profile';
        });
      } else {
        swal('Failed', 'Login failed. Please check your username and password.', 'error');
      }
    } catch (error) {
      swal('Error', 'An error occurred during login. Please try again later.', 'error');
    }
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
