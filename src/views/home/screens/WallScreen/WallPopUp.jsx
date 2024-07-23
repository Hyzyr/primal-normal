import React from "react";
import ButtonIcon from "src/components/buttons/ButtonIcon";

const WallPopUp = ({ popUp, setPopUp, image }) => {
  return (
    <div className={`wallscreen__popup ${popUp ? "active" : ""}`}>
      <div className="wallscreen__popup-bg">
        <img src="/images/wall/popup.png" alt="frame" />
      </div>
      <div className="wallscreen__popup-image">
        <img src={image} alt="placeholder" />
      </div>
      <ButtonIcon
        icon={"/images/components/cross.png"}
        alt={"close"}
        addClass="wallscreen__popup-close"
        onClick={() => {
          setPopUp(!popUp);
        }}
      />
    </div>
  );
};

export default WallPopUp;
