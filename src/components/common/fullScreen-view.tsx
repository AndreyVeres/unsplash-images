import type { FC } from 'react';
import styled from 'styled-components';

type Props = {
  src: string;
  onClose: VoidFunction;
};

export const FullscreenView: FC<Props> = ({ src, onClose }) => {
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <FullscreenOverlay onClick={onClose}>
      <FullscreenImage src={src} alt='Fullscreen view' onClick={handleImageClick} />
    </FullscreenOverlay>
  );
};

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
`;

const FullscreenImage = styled.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
  cursor: default;
`;
