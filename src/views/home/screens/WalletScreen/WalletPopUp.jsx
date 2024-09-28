import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ButtonIcon from 'src/components/buttons/ButtonIcon';
import { WALLET_STATES } from './api/walletCheck';

const emptyImage = '/images/stickers/empty.png';

const WalletPopUp = ({
  active,
  setActive,
  sticker = WALLET_STATES.NOT_REGISTERED,
}) => {
  const [stickerImage, setStickerImage] = useState(emptyImage);

  useEffect(() => {
    if (active && sticker) setStickerImage(getSticker());
    else setStickerImage(emptyImage);
  }, [active, sticker]);

  const getSticker = () => {
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
