import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './styles/NavBar.css';

function NavBar() {
  // const auth = useSelector((state) => state.auth)
  const endpoint = useLocation().pathname;
  const auth = useSelector((state) => state.auth);

  return (
    <div
      style={{
        display:
          endpoint === '/login' || endpoint === '/register' ? 'none' : 'block'
      }}
    >
      <nav>
        <div className="logo">
          <b>REUS</b>
        </div>
        <label htmlFor="btn" className="fa_icon">
          <FaBars />
        </label>
        <input type="checkbox" className="checkBox" id="btn" />
        <ul>
          <li>
            {' '}
            <NavLink
              to="/"
              className="hoverLine"
              style={navLinkStyle}
              onMouseEnter={navLinkHover}
            >
              Home
            </NavLink>
          </li>
          {auth.token === '' ? (
            <>
              <li>
                {' '}
                <NavLink to="/login" className="hoverLine" style={navLinkStyle}>
                  Login
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink
                  to="/register"
                  className="hoverLine"
                  style={navLinkStyle}
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                {' '}
                <NavLink
                  to="/categoryItems"
                  className="hoverLine"
                  style={navLinkStyle}
                >
                  Inventory
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink
                  to="/recipes"
                  className="hoverLine"
                  style={navLinkStyle}
                >
                  Recipes
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink
                  to="/logout"
                  className="hoverLine"
                  style={navLinkStyle}
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  lineHeight: '70px',
  fontSize: '18px',
  padding: '8px 15px'
};
const navLinkHover = {
  color: 'cyan'
};

export default NavBar;
