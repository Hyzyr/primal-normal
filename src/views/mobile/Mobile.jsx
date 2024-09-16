import React from "react";

const Mobile = () => {
  return (
    <div className="mobile">
      <div className="mobile__inner">
        <div className="mobile__inner-container">
          <div className="mobile__inner-box">
            <div className="mobile__inner-text">
              <span>Oof Note</span>
            </div>
            <div className="mobile__inner-text">
              <span>Access on</span>
              <br />
              <span>Destktop Device</span>
              <br />
              <span>For Boonga Experience</span>
            </div>
          </div>
          <div className="mobile__inner-sticker">
            <img src="/images/mobile/sticker.png" alt="sticker" />
          </div>
          <div className="mobile__inner-bg">
            <img src="/images/mobile/image-2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="mobile__bg">
        <div className="mobile__bg-image">
          <img src="/images/mobile/image-1.png" alt="bg" />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
