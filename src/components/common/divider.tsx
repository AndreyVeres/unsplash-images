import { memo, type FC } from 'react';
import styled from 'styled-components';

type Props = {
  height: number;
  color: string;
};

export const Divider: FC<Props> = memo(({ color, height }) => {
  return <StyledDivider $color={color} $height={height} />;
});

const StyledDivider = styled.div<{ $color: string; $height: number }>`
  background-color: ${({ $color }) => $color};
  height: ${({ $height }) => `${$height}px`};
`;
