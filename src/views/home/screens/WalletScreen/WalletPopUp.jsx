import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ButtonIcon from 'src/components/buttons/ButtonIcon';
import { WALLET_STATES } from './api/walletCheck';
import { getStickerURL } from './WalletScreen';

const emptyImage = '/images/stickers/empty.png';
const defaultSticker = getStickerURL(WALLET_STATES.NOT_REGISTERED);

const WalletPopUp = ({ active, setActive, sticker = defaultSticker }) => {
  const [stickerImage, setStickerImage] = useState(emptyImage);

  useEffect(() => {
    if (active && sticker) setStickerImage(sticker);
    else setStickerImage(emptyImage);
  }, [active, sticker]);

  return createPortal(
    <div
      className={`walletscreen__popup ${active ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target.className === 'walletscreen__popup active') {
          setActive(!active);
        }
      }}>
      <div className="walletscreen__popup-inner">
        <ButtonIcon
          addClass={`walletscreen__popup-close`}
          icon={'/images/components/cross.png'}
          alt={'close'}
          onClick={() => {
            setActive(!active);
          }}
        />
        <div className="walletscreen__popup-image">
          <img src={stickerImage} alt="stickers" />
        </div>
      </div>
    </div>,
    document.getElementById('popups')
  );
};

export default WalletPopUp;
