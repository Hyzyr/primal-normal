import React, { useEffect, useRef } from "react";
import ButtonIcon from "src/components/buttons/ButtonIcon";

export const STICKERS_VARIANTS = {
  SUCCESS: "success",
  FAIL: "fail",
  RESUBMIT: "resubmit",
  ACCEPTED: "accepted",
};
const WalletPopUp = ({
  popUp,
  setPopUp,
  sticker = STICKERS_VARIANTS.SUCCESS,
}) => {
  const getSticker = (sticker) => {
    switch (sticker) {
      case "success":
        return "/images/stickers/eligible-fcfs.png";
      case "fail":
        return "/images/stickers/fail-sticker.png";
      case "resubmit":
        return "/images/stickers/eligible-gtd.png";
      case "accepted":
        return "/images/stickers/gtd-accepted";
      default:
        return null;
    }
  };

  return (
    <div
      className={`walletscreen__popup ${popUp ? "active" : ""}`}
      onClick={(e) => {
        if (e.target.className === "walletscreen__popup active") {
          setPopUp(!popUp);
        }
      }}
    >
      <div className="walletscreen__popup-inner">
        <ButtonIcon
          addClass={`walletscreen__popup-close`}
          icon={"/images/components/cross.png"}
          alt={"close"}
          onClick={() => {
            setPopUp(!popUp);
          }}
        />
        <div className="walletscreen__popup-image">
          <img src={getSticker(sticker)} alt="stickers" />
        </div>
      </div>
    </div>
  );
};

export default WalletPopUp;
