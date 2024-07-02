import React from "react";
import "./Sidebar.css";
import { PiGreaterThan } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";

const SideCard = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className="sidebar-container">
      <div className="sidebar-item">
        <div>
          <item.icon />
        </div>
        <div>{item.title}</div>
      </div>
      <div>
        <PiGreaterThan />
      </div>
    </div>
  ));
};

const Sidebar = ({ data }) => {
  const handleClick = () => {
    alert("Div clicked!");
  };
  return (
    <div className="sidebar">
      
      <div className="side-main-container">
      <h2>API Dashboard</h2>
        <SideCard data={data} onClick={handleClick} />
      </div>
      <div className="side-bottom">
        <div className="profile">
          <div className="profile-pic"><IoPersonCircleOutline /></div>
          <div>
            <div>Evano</div>
            <div>Project Manager</div>
          </div>
        </div>
        <div><RiArrowDropDownLine /></div>
      </div>
    </div>
  );
};

export default Sidebar;
