import React from "react";
import logo from "../assets/shared/logo.svg";

const HeaderComponent = () => {
  return (
    <div className="Header">
      <div>
        <img src={logo} alt="" className="Header_img" />
      </div>
      <div>
        <button className="Header_btn">pre-order now</button>
      </div>
    </div>
  );
};

export default HeaderComponent;
