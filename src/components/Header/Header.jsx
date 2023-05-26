import React from "react";
import "./Header.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/login") return;
  return (
    <header>
      <NavLink className="logo" to="/">
        Quiz Uz
      </NavLink>
      <nav>
        {location.pathname !== "/" ? (
          <NavLink className="profile" to="/profile">
            DA
          </NavLink>
        ) : (
          <Link className="LoginBtn" to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
