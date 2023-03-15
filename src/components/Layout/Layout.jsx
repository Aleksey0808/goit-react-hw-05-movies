import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  color: #212121;
  &.active {
    color: orangered;
  }
`;

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
