export default async function code(req, res) {
  const client_id = process.env.CLIENT_ID;
  const redirect_uri = encodeURIComponent(process.env.REDIRECT_URI);
  const api_auth_base = process.env.API_AUTH_BASEURL;
  const scope = 'public+read_user+write_likes';
  const authUrl = `${api_auth_base}authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;

  res.status(200).json({ url: authUrl });
}
