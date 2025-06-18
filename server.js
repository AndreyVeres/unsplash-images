import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import qs from 'qs';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client_id = process.env.VITE_CLIENT_ID;
const client_secret = process.env.VITE_CLIENT_SECRET;
const redirect_uri = process.env.VITE_REDIRECT_URI;
const api_auth_base = process.env.VITE_API_AUTH_BASEURL;

app.post('/token', async (req, res) => {
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

    console.log(response, 'response');

    res.json({ token: response.data.access_token });
  } catch (error) {
    console.log(error, '<error');
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`));
