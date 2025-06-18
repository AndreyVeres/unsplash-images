import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAuthToken } from '../api/auth';

export const Redirect = () => {
  const [params] = useSearchParams();
  const navigation = useNavigate();

  const code = params.get('code');
  if (!code) {
    return <div>Error auth</div>;
  }

  useEffect(() => {
    getAuthToken(code).then(() => {
      navigation('/');
    });
  }, []);

  return <div>Error auth</div>;
};
