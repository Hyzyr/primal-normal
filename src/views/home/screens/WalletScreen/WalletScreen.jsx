import React, { useState } from 'react';
import Input from 'src/components/input/Input';
import { WalletPopUp } from '.';
import { checkWalletFromApi, WALLET_STATES } from './api/walletCheck';

export const getStickerURL = (sticker) => {
  switch (sticker) {
    case WALLET_STATES.FCFS_FOUND:
      return '/images/stickers/eligible-fcfs.png';
    case WALLET_STATES.NOT_REGISTERED:
      return '/images/stickers/fail-sticker.png';
    case WALLET_STATES.GTD_FOUND:
      return '/images/stickers/gtd-accepted.png';
    case WALLET_STATES.GTD_ACCEPTED:
      return '/images/stickers/eligible-gtd.png';
    default:
      return null;
  }
};

const WalletScreen = () => {
  const [popup, setPopup] = useState(false);
  const [sticker, setSticker] = useState(null);
  const [showSticker, setShowSticker] = useState(false);

  const togglePopup = (newState) => {
    if (!newState && sticker) {
      setShowSticker(true);
    }

    setPopup(newState);
  };

  const checkWallet = (value) => {
    setShowSticker(false);
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
            {showSticker && (
              <div className="walletscreen__sticker">
                <img src={getStickerURL(sticker)} alt={sticker} />
              </div>
            )}
          </div>
        </div>
      </div>
      <WalletPopUp
        active={popup}
        setActive={togglePopup}
        sticker={sticker ? getStickerURL(sticker) : undefined}
      />
    </>
  );
};

export default WalletScreen;
