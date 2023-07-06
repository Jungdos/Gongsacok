import axios from 'axios';

export function loginUser(credentials) {
    console.log("inside service.")
    return axios({
      method: 'post',
      url: 'https://devawsback.gongsacok.com/pub/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: credentials
    })
    .then(response => response.data)
    .catch(error => {
      console.error('There was an error!', error);
      throw error;
    });
}