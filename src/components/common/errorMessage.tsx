import type { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return <StyledError>{children}</StyledError>;
};

const StyledError = styled.p`
  color: red;
`;
