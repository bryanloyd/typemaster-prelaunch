import React from "react";
import glass from "../assets/mobile/image-glass-and-keyboard.jpg";
import phone from "../assets/mobile/image-phone-and-keyboard.jpg";

const MechanicalComponent = () => {
  return (
    <div className="Mechanical">
      <div className="Mechanical_imgs">
        <div>
          <img src={phone} alt="" className="img-phone" />
          <div className="overlay"></div>
        </div>
        <div>
          <img src={glass} alt="" className="img-glass" />
        </div>
      </div>
      <div className="Mechanical_content">
        <h1>mechanical wireless keyboard</h1>
        <p>
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
    </div>
  );
};

export default MechanicalComponent;
