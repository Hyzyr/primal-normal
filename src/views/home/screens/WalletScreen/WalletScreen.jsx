import React, { useState } from 'react';
import Input from 'src/components/input/Input';
import { WalletPopUp } from '.';
import { checkWalletFromApi, WALLET_STATES } from './api/walletCheck';

const WalletScreen = () => {
  const [popup, setPopup] = useState(false);
  const [sticker, setSticker] = useState('');
  const checkWallet = (value) => {
    checkWalletFromApi(value)
      .then(({ status, data }) => {
        if (status !== 200) console.log('respoonse data ', data);
        setSticker(status === 200 ? data : WALLET_STATES.NOT_REGISTERED);
        setPopup(true);
      })
      .catch((error) => {
        setSticker(WALLET_STATES.NOT_REGISTERED);
        setPopup(true);
        console.log('error checkWalletFromApi: \n', error);
      });
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
              onSubmit={(value) => checkWallet(value)}
            />
          </div>
        </div>
      </div>
      <WalletPopUp active={popup} setActive={setPopup} sticker={sticker} />
    </>
  );
};

export default WalletScreen;
