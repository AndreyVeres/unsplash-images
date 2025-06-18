import { Header } from '../../components/common/header';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
