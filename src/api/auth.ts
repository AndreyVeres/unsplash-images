import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_BASEURL,
});

export const getCode = () => {
  // const clientId = import.meta.env.VITE_CLIENT_ID;
  // const redirectUri = encodeURIComponent(import.meta.env.VITE_REDIRECT_URI);

  // const scope = 'public+read_user+write_likes';
  // const authUrl = `${
  //   import.meta.env.VITE_API_AUTH_BASEURL
  // }authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

  // window.location.assign(authUrl);

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
