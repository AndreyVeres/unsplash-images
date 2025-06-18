import { Container } from '../components/common/container';
import { Background } from '../components/common/background';
import { Divider } from '../components/common/divider';
import { Spinner } from '../components/common/spinner';
import { useGetRandomPhotos } from '../api/hooks/useGetRandomPhotos';
import { useEffect, useState } from 'react';
import { SearchInput } from '../components/searchInput';
import { PhotosContainer } from '../components/photos-container';
import { getCode } from '../api/auth';
import { ErrorMessage } from '../components/common/errorMessage';

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: photos, isLoading, error } = useGetRandomPhotos(searchQuery);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      getCode().then(url => {
        window.location.assign(url);
      });
    }
  }, []);

  return (
    <>
      <Background url={'main-bg.png'} height={253}>
        <SearchInput onChange={value => setSearchQuery(value)} delay={500} />
      </Background>
      <Divider color='#c4c4c4' height={16} />
      <Container>
        {isLoading && <Spinner />}
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        {!!photos?.length ? <PhotosContainer photos={photos} /> : <span>Избранное пусто</span>}
      </Container>
    </>
  );
};
