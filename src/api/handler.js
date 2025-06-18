import axios from 'axios';
import dotenv from 'dotenv';
import qs from 'qs';

dotenv.config();

const client_id = process.env.VITE_CLIENT_ID;
const client_secret = process.env.VITE_CLIENT_SECRET;
const redirect_uri = process.env.VITE_REDIRECT_URI;
const api_auth_base = process.env.VITE_API_AUTH_BASEURL;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { code } = req.body;

      const data = qs.stringify({
        client_id,
        client_secret,
        redirect_uri,
        code,
        grant_type: 'authorization_code',
      });

      const response = await axios.post(api_auth_base + '/token', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      res.json({ token: response.data.access_token });
    } catch (error) {
      console.log(error, '<error');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
