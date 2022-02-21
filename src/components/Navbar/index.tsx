import { useContext } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

import { AuthContext } from '../../contexts/AuthContext';

import { Nav, Profile } from './styles';

export function Navbar() {
  const { signOut, user } = useContext(AuthContext);
  const history = useHistory();

  const handleSignOut = () => {
    signOut();
    history.push('/');
  }

  return (
    <Nav>
      <ul>
        <li>
          <NavLink exact to="/home" activeClassName="Active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" activeClassName="Active">
            HISTÓRICO
          </NavLink>
        </li>
      </ul>
      <Profile>
        <Profile.User>
          <img src={user?.avatar} alt={user?.name}/>
          <span>{user?.name}</span>
        </Profile.User>
        <p onClick={handleSignOut} >Sair</p>
      </Profile>
    </Nav>
  );
}
