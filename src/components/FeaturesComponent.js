import React from "react";
import compatible from "../assets/shared/icon-compatible.svg";
import bluetooth from "../assets/shared/icon-bluetooth.svg";
import battery from "../assets/shared/icon-battery.svg";
import backlit from "../assets/shared/icon-light.svg";

const FeaturesComponent = () => {
  return (
    <div className="Features">
      <div className="Features_compatible">
        <div className="container">
          <img src={compatible} alt="" />
        </div>
        <h1>highly compatible</h1>
        <p>
          Easy to use and works well with all major computer brands, gaming
          consoles and mobile devices. Plug & play, no installation or driver
          needed.
        </p>
      </div>
      <div className="Features_bluetooth">
        <div className="container">
          <img src={bluetooth} alt="" />
        </div>
        <h1>wireless with bluetooth</h1>
        <p>
          Powerful 2.4G RF technology allows you to connect the cordless
          keyboard from up to 30ft away. Simply plug the unifying receiver into
          your computer.
        </p>
      </div>
      <div className="Features_battery">
        <div className="container">
          <img src={battery} alt="" />
        </div>
        <h1>high capacity battery</h1>
        <p>
          Equipped with a long-lasting built-in battery, you’ll never have to
          spend a dime on replaceable ones.  Enjoy 40 hours of usage time
          between charges.
        </p>
      </div>
      <div className="Features_backlit">
        <div className="container">
          <img src={backlit} alt="" />
        </div>
        <h1>rgb backlit modes</h1>
        <p>
          Choose from 4 backlight brightness levels and adjustable breathing
          speed. Each key glows intensely in the dark and helps you type in low
          light conditions.
        </p>
      </div>
    </div>
  );
};

export default FeaturesComponent;
