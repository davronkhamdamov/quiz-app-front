import React, { useRef } from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const localtion = useLocation();
  if (localtion.pathname === "/login") return;
  return (
    <header>
      <NavLink className="logo" to="/">
        Quiz Uz
      </NavLink>
      <nav>
        <NavLink className="profile" to="/profile">
          DA
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
