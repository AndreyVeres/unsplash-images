import styled from 'styled-components';
import { Container } from './container';
import { Link, useLocation } from 'react-router-dom';
import { SearchIcon } from '../../assets/search.icon';
import { LogoIcon } from '../../assets/logo.icon';

export const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const headerVariant = isHomePage ? 'large' : 'small';

  return (
    <StyledHeader $variant={headerVariant}>
      <Container>
        <StyledWrapper>
          <LogoIcon />

          <StyledLinks>
            {location.pathname.slice(1) && (
              <StyledLink to={'/'}>
                <SearchIcon color='#fff' />
                <span> Поиск</span>
              </StyledLink>
            )}

            <StyledLink to={'/favorites'}>
              <img src='like.svg' alt='likes' />
              <span> Избранное</span>
            </StyledLink>
          </StyledLinks>
        </StyledWrapper>
      </Container>
    </StyledHeader>
  );
};

const headerHeights = {
  large: '147px',
  small: '82px',
};

const StyledLinks = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.typograph.light};
`;

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.header<{ $variant: 'small' | 'large' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  width: 100%;

  height: ${({ $variant }) => headerHeights[$variant] || headerHeights.small};

  transition: height 0.3s ease-in-out;
`;
