import styled from 'styled-components';
import { useGetFavorites } from '../api/hooks/useGetFavorites';
import { useMe } from '../api/hooks/useMe';
import { Container } from '../components/common/container';
import { ErrorMessage } from '../components/common/errorMessage';
import { Spinner } from '../components/common/spinner';
import { PhotosContainer } from '../components/photos-container';
import { Divider } from '../components/common/divider';

export const FavoritesPage = () => {
  const { data: user } = useMe();
  const { data: favorites, isLoading, error } = useGetFavorites(user?.username);
  return (
    <>
      <Divider color='#c4c4c4' height={16} />
      <Container>
        <StyledTitle>Избранное</StyledTitle>

        {isLoading && <Spinner />}
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        {!!favorites?.length ? <PhotosContainer photos={favorites} /> : <span>Избранное пусто</span>}
      </Container>
    </>
  );
};

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 72px;
  margin-top: 91px;
  font-weight: bold;
  color: ${({ theme }) => theme.typograph.dark};
`;
