import { useGetFavorites } from '../api/hooks/useGetFavorites';
import { useMe } from '../api/hooks/useMe';
import { Container } from '../components/common/container';
import { ErrorMessage } from '../components/common/errorMessage';
import { Spinner } from '../components/common/spinner';
import { PhotosContainer } from '../components/photos-container';

export const FavoritesPage = () => {
  const { data: user } = useMe();
  const { data: favorites, isLoading, error } = useGetFavorites(user?.username);
  return (
    <Container>
      {isLoading && <Spinner />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!!favorites?.length ? <PhotosContainer photos={favorites} /> : <span>Избранное пусто</span>}
    </Container>
  );
};
