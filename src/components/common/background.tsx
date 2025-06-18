import { memo, type FC, type HTMLAttributes, type PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    url: string;
    height: string | number;
  };

export const Background: FC<Props> = memo(({ children, url, height }) => {
  return (
    <>
      <StyledBackground $height={height} $url={url}>
        <StyledOverlay />
        <StyledContent>{children}</StyledContent>
      </StyledBackground>
    </>
  );
});

const StyledBackground = styled.div<{ $url: string; $height: string | number }>`
  background-image: url(${({ $url }) => $url});
  height: ${({ $height }) => ` ${typeof $height === 'string' ? $height : `${$height}px`}`};
  display: flex;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 99;
  width: 100%;
`;

const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  z-index: 1;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
`;
