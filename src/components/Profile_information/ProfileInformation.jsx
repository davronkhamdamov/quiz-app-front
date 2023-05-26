import React from "react";
import { MdAddAPhoto } from "react-icons/md";
import "./ProfileInformation.css";
import { useSelector } from "react-redux";
const ProfileInformation = () => {
  const getData = useSelector((dataReduser) => dataReduser);
  return (
    <div className="profile_information">
      <div className="profile_banner">
        <div className="profile_image">
          <img src={getData?.data[0]?.photo} alt="" />
          <label htmlFor="profile_input" className="profile_image_label">
            <MdAddAPhoto />
          </label>
          <input type="file" style={{ display: "none" }} id="profile_input" />
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>{getData?.data[0]?.username}</h2>
    </div>
  );
};

export default ProfileInformation;
