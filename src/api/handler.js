
import axios from 'axios';
import qs from 'qs';


export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }


  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_uri = process.env.REDIRECT_URI;
  const api_auth_base = process.env.API_AUTH_BASEURL;

  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ message: 'Authorization code is missing' });
    }

    const data = qs.stringify({
      client_id,
      client_secret,
      redirect_uri,
      code,
      grant_type: 'authorization_code',
    });

    const response = await axios.post(`${api_auth_base}/token`, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // Отправляем на фронтенд только то, что ему нужно (токен)
    res.status(200).json({ token: response.data.access_token });
  } catch (error) {
    // Логируем ошибку на сервере для отладки
    console.error('Error fetching token:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}