import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '../components/common/spinner';
import { useState } from 'react';
import { Background } from '../components/common/background';
import styled from 'styled-components';
import { Container } from '../components/common/container';
import { Flex } from '../components/common/flex';
import { Button } from '../components/common/button';
import { DonwloadIcon } from '../assets/download.icon';
import { FullscreenView } from '../components/common/fullScreen-view';
import { FullScreenIcon } from '../assets/fullScreen.icon';
import { LikeIcon } from '../assets/like.icon';
import { useGetPhotoById } from '../api/hooks/useGetPhotoById';
import { useRevalidate } from '../api/hooks/useRevalidate';
import { useLikePhoto } from '../api/hooks/useLikePhoto';
import { useUnlikePhoto } from '../api/hooks/useUnlikePhoto';
import { ErrorMessage } from '../components/common/errorMessage';

export const PhotoDetails = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const openFullscreen = () => setIsFullscreen(true);
  const closeFullscreen = () => setIsFullscreen(false);

  if (!id) {
    navigation('/');
    return null;
  }

  const revalidate = useRevalidate();
  const { data: photo, error, isLoading } = useGetPhotoById(id);

  const { mutate: likeHandler } = useLikePhoto(id, {
    onSuccess: () => {
      revalidate([id]);
    },
  });

  const { mutate: dislikeHandler } = useUnlikePhoto(id, {
    onSuccess: () => {
      revalidate([id]);
    },
  });

  return (
    <>
      {isLoading && <Spinner />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}

      {isFullscreen && photo && <FullscreenView src={photo.urls.full} onClose={closeFullscreen} />}
      {!!photo && (
        <Background url={photo.urls.thumb} height={'80vh'}>
          <Container>
            <Flex $col $gap={40} style={{ marginTop: '40px' }}>
              <Flex $justify='space-between'>
                <Flex $gap={10}>
                  <StyledAvatar src={photo.user.profile_image.small} />
                  <Flex $col>
                    <p>{photo.user.username}</p>
                    <p>@{photo.user.instagram_username}</p>
                  </Flex>
                </Flex>

                <Flex $gap={20}>
                  <Button
                    onClick={() => {
                      photo.liked_by_user ? dislikeHandler() : likeHandler();
                    }}
                    variant={photo.liked_by_user ? 'primary' : 'secondary'}
                  >
                    <LikeIcon />
                  </Button>

                  <Button variant='primary'>
                    <Flex $gap={16}>
                      <DonwloadIcon />
                      <span>Downloand</span>
                    </Flex>
                  </Button>
                </Flex>
              </Flex>

              <Flex $align='center' $justify='center'>
                <StyledPicture>
                  <source media='(max-width: 400px)' srcSet={photo.urls.thumb} />
                  <source media='(max-width: 768px)' srcSet={photo.urls.raw} />
                  <source media='(max-width: 1280px)' srcSet={photo.urls.regular} />
                  <StyledImg $color={photo.color} src={photo.urls.regular} alt='Описание изображения' />

                  <StyledFullButton onClick={openFullscreen}>
                    <FullScreenIcon />
                  </StyledFullButton>
                </StyledPicture>
              </Flex>
            </Flex>
          </Container>
        </Background>
      )}
    </>
  );
};

const StyledFullButton = styled.button`
  position: absolute;
  right: 42px;
  bottom: 36px;
`;

const StyledAvatar = styled.img`
  border-radius: ${({ theme }) => theme.border.radius};
  border: 1px solid ${({ theme }) => theme.border.color};
`;

const StyledPicture = styled.picture`
  position: relative;
`;

const StyledImg = styled.img<{ $color: string }>`
  max-width: 1482px;
  height: auto;
  width: 100%;
  max-height: 730px;
  box-shadow: 0px 0px 13px ${({ $color }) => $color};
`;
