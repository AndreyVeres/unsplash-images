import styled from 'styled-components';
import { memo, type FC } from 'react';
import { Link } from 'react-router-dom';
import type { Photo } from '../api/types/photo.types';

type Props = {
  photo: Photo;
};

export const PhotoCard: FC<Props> = memo(({ photo }) => {
  return (
    <StyledCard key={photo.id}>
      <Link to={`/${photo.id}`}>
        <StyledImg src={photo.urls.small} />
      </Link>
    </StyledCard>
  );
});

const StyledCard = styled.li`
  width: 100%;
  max-width: 473px;
  min-width: 300px;
  aspect-ratio: 11 / 10;
  overflow: hidden;
  border-radius: 8px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
