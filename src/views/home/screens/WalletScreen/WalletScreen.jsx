import React, { useState } from 'react';
import Input from 'src/components/input/Input';
import { WalletPopUp } from '.';

const WalletScreen = () => {
  const [popup, setPopup] = useState(false);
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
              onSubmit={() => setPopup(true)}
            />
          </div>
        </div>
      </div>
      <WalletPopUp active={popup} setActive={setPopup} />
    </>
  );
};

export default WalletScreen;
