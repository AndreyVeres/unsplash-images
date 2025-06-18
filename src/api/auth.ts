import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_BASEURL,
});

export const getCode = () => {
  return new Promise<string>(res => {
    fetch('/api/code', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => result.json())
      .then(result => {
        res(result.url);
      });
  });
};

export const getAuthToken = async (code: string) => {
  return new Promise(res => {
    fetch('/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: code,
      }),
    })
      .then(result => result.json())
      .then(result => {
        localStorage.setItem('token', result.token);
        res(result);
      });
  });
};
