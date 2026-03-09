import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='logo-badge'>
        <img src={logo} alt='logo' className='w-12 h-12 object-contain' />
      </NavLink>
      <nav className='nav-shell'>
        <NavLink to='/about' className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
