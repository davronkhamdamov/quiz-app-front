import React, { useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { newItemAction } from "../../redux/reduser";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const getData = useSelector((dataReduser) => dataReduser);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/auth/getProfileInformaton", {
      method: "GET",
      headers: {
        token: localStorage.getItem("authorization"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 401) {
          dispatch(newItemAction([]));
        }
        dispatch(newItemAction(data));
      });
  }, []);
  if (location.pathname === "/login") return;
  return (
    <header>
      <Link className="logo" to="/">
        Quiz Uz
      </Link>
      <nav>
        {getData?.data[0] ? (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {location.pathname !== "/quizes" && (
              <Link to="quizes" className="quizesLink">
                Quizes
              </Link>
            )}
            <Link className="profile" to="profile/information">
              <img src={getData?.data[0]?.photo} alt="" />
            </Link>
          </div>
        ) : (
          <Link className="LoginBtn" to="login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
