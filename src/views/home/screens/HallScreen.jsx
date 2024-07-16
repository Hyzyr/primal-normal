import React from "react";
import Textarea from "src/components/textarea/Textarea";

const HallScreen = () => {
  return (
    <div className="hallscreen screen">
      <div className="hallscreen__bg screen__bg">
        <img src="/images/screens/boonga-screen.png" alt="app-screen-frame" />
      </div>
      <div className="hallscreen__container">
        <div className="hallscreen__slider">
          <button type="button" className="hallscreen__slider-arrow">
            <img src="/images/components/arrow-left.png" alt="" />
          </button>
          <div className="hallscreen__slider-row">
            <div className="hallscreen__slider-item"></div>
            <div className="hallscreen__slider-item"></div>
            <div className="hallscreen__slider-item"></div>
            <div className="hallscreen__slider-item"></div>
          </div>
          <button type="button" className="hallscreen__slider-arrow">
            <img src="/images/components/arrow-right.png" alt="" />
          </button>
        </div>
        <div className="hallscreen__slider">
          <button type="button" className="hallscreen__slider-arrow">
            <img src="/images/components/arrow-left.png" alt="" />
          </button>
          <div className="hallscreen__slider-row">
            <div className="hallscreen__slider-item"></div>
            <div className="hallscreen__slider-item"></div>
            <div className="hallscreen__slider-item"></div>
            <div className="hallscreen__slider-item"></div>
          </div>
          <button type="button" className="hallscreen__slider-arrow">
            <img src="/images/components/arrow-right.png" alt="" />
          </button>
        </div>
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
