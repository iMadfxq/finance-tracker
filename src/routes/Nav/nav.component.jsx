import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import './nav.styles.scss'

export default function Nav() {
  return (
    <>
    <header>
      <nav>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/signup'>signup</NavLink>
        <NavLink to='/dashboard'>dashboard</NavLink>
      </nav>
    </header>
    <Outlet />
    </>
  )
}