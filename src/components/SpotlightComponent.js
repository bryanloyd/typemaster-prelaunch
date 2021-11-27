import React from "react";
import kb from "../assets/mobile/image-keyboard.jpg";

const SpotlightComponent = () => {
  return (
    <div className="Spotlight">
      <div className="Spotlight_content">
        <h1>typemaster keyboard</h1>
        <p>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </p>
      </div>
      <div className="Spotlight_cta">
        <div>
          <button>pre-order now</button>
        </div>
        <div>
          <p>release on 5/27</p>
        </div>
      </div>
      <img src={kb} alt="" />
    </div>
  );
};

export default SpotlightComponent;
