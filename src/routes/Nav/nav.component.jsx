import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/footer.component";
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
          {!user && (
            <nav>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </nav>
          )}
        {user && (
          <>
            <span>Hello, {user.displayName}</span>
            <a onClick={logout}>LOGOUT</a>
          </>
        )}
      </header>
      <Outlet />
      <Footer portfolio={'https://imadfxq.com/'} />
    </>
  );
}
