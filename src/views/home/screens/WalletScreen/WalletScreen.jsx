import React, { useState } from "react";
import Input from "src/components/input/Input";
import { WalletPopUp } from ".";
import axios from "axios";

const WalletScreen = () => {
  const [popup, setPopup] = useState(false);
  const [sticker, setSticker] = useState("");
  const getWallet = (popup, sticker) => {
    setPopup(popup);
    setSticker(sticker);
    // const response =  axios.get("http://localhost:3000/test");
    // console.log(response.data);
  };
  return (
    <>
      <div className="walletscreen screen">
        <div className="walletscreen__bg screen__bg">
          <img src="/images/screens/wallet-screen.png" alt="app-screen-frame" />
        </div>
        <div className="walletscreen__content">
          <div className="walletscreen__content-left">
            <Input
              placeholder="check your wallet"
              onSubmit={() => getWallet(true, "fail")}
            />
          </div>
        </div>
      </div>
      <WalletPopUp active={popup} setActive={setPopup} sticker={sticker} />
    </>
  );
};

export default WalletScreen;
