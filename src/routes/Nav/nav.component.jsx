import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useLogout } from "../../hooks/useLogout";

import "./nav.styles.scss";

export default function Nav() {
  const { logout } = useLogout();

  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <header>
        {user && <h2>Hello, {user.displayName}</h2>}
        <nav>
          <NavLink to="/home">home</NavLink>
          {!user && (
            <>
          <NavLink to="/login">login</NavLink>
          <NavLink to="/signup">signup</NavLink>
            </>
          )}
          {user && (
            <>
            <NavLink to="/dashboard">dashboard</NavLink>
            <button onClick={logout}>LOGOUT</button>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
