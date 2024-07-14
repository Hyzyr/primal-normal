import React from 'react';
import Input from 'src/components/input/Input';

const WalletScreen = () => {
  return (
    <div className="walletscreen screen">
      <div className="walletscreen__bg screen__bg">
        <img src="/images/screens/wallet-screen.png" alt="app-screen-frame" />
      </div>
      <div className="walletscreen__content">
        <div className="walletscreen__content-left">
          <Input placeholder="check your wallet" />
        </div>
      </div>
    </div>
  );
};

export default WalletScreen;
