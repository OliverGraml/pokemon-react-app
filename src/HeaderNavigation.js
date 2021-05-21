import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

function HeaderNavigation() {
  return (
    <nav>
      <NavLink exact to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/pokemon-list" className="link">
        Pokemon Liste
      </NavLink>
      <NavLink to="/favorites" className="link">
        Favorites
      </NavLink>
    </nav>
  );
}

export default HeaderNavigation;
