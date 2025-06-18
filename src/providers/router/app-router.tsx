import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main-page';
import { PhotoDetails } from '../../pages/image-details-page';
import { AppLayout } from './layout';
import { FavoritesPage } from '../../pages/favorites-page';
import { Redirect } from '../../pages/_redirect';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path=':id' element={<PhotoDetails />} />
        <Route path='favorites' element={<FavoritesPage />} />
        <Route path='redirect' element={<Redirect />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
