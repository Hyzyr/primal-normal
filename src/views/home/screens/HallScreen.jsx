import React from "react";
import Textarea from "src/components/textarea/Textarea";

const HallScreen = () => {
  return (
    <div className="hallscreen screen">
      <div className="hallscreen__bg screen__bg">
        <img src="/images/screens/hall-screen.png" alt="app-screen-frame" />
      </div>
      <div className="hallscreen__content">
        <div className="hallscreen__content-left">
          <Textarea placeholder="hall checker" />
        </div>
        <div className="hallscreen__content-right">
          <Textarea placeholder="hall checker" />
        </div>
      </div>
    </div>
  );
};

export default HallScreen;
