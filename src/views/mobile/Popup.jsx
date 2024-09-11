import React from "react";

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup__inner">
        <div className="popup__inner-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            rerum odio dolor, non ipsum nobis nulla illo
          </p>
          <div className="popup__inner-bg">
            <img src="/images/popup-mob.png" alt="" />
          </div>
        </div>
      </div>
      <div className="popup__bg">
        <video muted loop autoPlay src={"/videos/left_background.webm"}></video>
      </div>
    </div>
  );
};

export default Popup;
