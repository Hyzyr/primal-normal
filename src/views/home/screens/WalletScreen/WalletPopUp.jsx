
import React from "react";
import { createPortal } from "react-dom";
import ButtonIcon from "src/components/buttons/ButtonIcon";

export const STICKERS_VARIANTS = {
  SUCCESS: "success",
  FAIL: "fail",
  RESUBMIT: "resubmit",
  ACCEPTED: "accepted",
};

const WalletPopUp = ({
  active,
  setActive,
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
        return "/images/stickers/gtd-accepted.png";
      default:
        return null;
    }
  };
  return createPortal(
    <div
      className={`walletscreen__popup ${active ? "active" : ""}`}
      onClick={(e) => {
        if (e.target.className === "walletscreen__popup active") {
          setActive(!active);
        }
      }}
    >
      <div className="walletscreen__popup-inner">
        <ButtonIcon
          addClass={`walletscreen__popup-close`}
          icon={"/images/components/cross.png"}
          alt={"close"}
          onClick={() => {
            setActive(!active);
          }}
        />
        <div className="walletscreen__popup-image">
          <img src={getSticker(sticker)} alt="stickers" />
        </div>
      </div>
    </div>,
    document.getElementById("popups")
  );
};

export default WalletPopUp;
