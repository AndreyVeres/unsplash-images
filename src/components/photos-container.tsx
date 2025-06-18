import type { FC } from 'react';
import styled from 'styled-components';
import type { Photo } from '../api/types/photo.types';
import { PhotoCard } from './photo-card';

type Props = {
  photos: Photo[];
};

export const PhotosContainer: FC<Props> = ({ photos }) => {
  return (
    <StyledPhotosList>
      {photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </StyledPhotosList>
  );
};

const StyledPhotosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 100px 0 144px;
`;
