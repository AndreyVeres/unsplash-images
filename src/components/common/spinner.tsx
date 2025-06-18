import styled from 'styled-components';

export const Spinner = () => {
  return <StyledImage src='spinner.svg' />;
};

const StyledImage = styled.img`
  animation: spin 1s ease-in-out infinite;
  display: flex;
  margin: 0 auto;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
