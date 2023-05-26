import { CgProfile } from "react-icons/cg";
import { BsCardChecklist } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./ProfileLayout.css";
import { useDispatch, useSelector } from "react-redux";
import { ClearItemAction } from "../../../redux/reduser";

const ProfileLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const getData = useSelector((dataReduser) => dataReduser);

  if (!getData.data[0]) {
    window.location = "/login";
  }
  if (["/profile/", "/profile"].includes(location.pathname)) {
    window.location = "/profile/information";
  }

  return (
    <div className="profile_wrapper">
      <div
        className="dashboard active"
        onClick={(e) => e.target.classList.toggle("active")}
      >
        <NavLink to="information" className="dashboard_btn">
          <div>
            <CgProfile />
            <p>Profile</p>
          </div>
        </NavLink>
        <NavLink to="quizzes" className="dashboard_btn">
          <div>
            <AiOutlineUnorderedList />
            <p>My Quizzes</p>
          </div>
        </NavLink>
        <NavLink to="results" className="dashboard_btn">
          <div>
            <BsCardChecklist />
            <p>My Results</p>
          </div>
        </NavLink>
        <button
          type="button"
          onClick={() => {
            localStorage.clear();
            dispatch(ClearItemAction());
            window.location = "/login";
          }}
          className="dashboard_btn"
        >
          <div>
            <SlLogout />
            <p>Log out</p>
          </div>
        </button>
      </div>
      <div className="information">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
