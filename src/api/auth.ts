import axios from 'axios';

export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_BASEURL,
});

export const getCode = () => {
  if (!localStorage.getItem('token')) {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUri = encodeURIComponent(import.meta.env.VITE_REDIRECT_URI);
    const scope = 'public+read_user+write_likes';
    const authUrl = `${
      import.meta.env.VITE_API_AUTH_BASEURL
    }authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    window.location.assign(authUrl);
  }
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
        console.log('fetch');
        localStorage.setItem('token', result.token);
        res(result);
      });
  });
};
