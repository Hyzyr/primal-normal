import React from 'react';
import ButtonIcon from 'src/components/buttons/ButtonIcon';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const WallPopUp = ({ title, popUp, setPopUp, image, link }) => {
  const stickerURL = React.useMemo(() => {
    const n = getRandomInt(3);
    return `/images/wall/notification-stickers/coming-soon-${n + 1}.webp`;
  }, [image]);
  
  return (
    <div className={`wallscreen__popup ${popUp ? 'active' : ''}`}>
      <div className="wallscreen__popup-bg">
        <img src="/images/wall/popup-hall.webp" alt="frame" />
        <div className="wallscreen__popup-sticker">
          <img src={stickerURL} alt="frame" />
        </div>
      </div>
      <div className="wallscreen__popup-image">
        <img src={image} alt="placeholder" />
      </div>
      <a href={link} target="_blank" className="wallscreen__popup-title">
        {title}
      </a>

      <ButtonIcon
        icon={'/images/components/cross.png'}
        alt={'close'}
        addClass="wallscreen__popup-close"
        onClick={() => {
          setPopUp(!popUp);
        }}
      />
    </div>
  );
};

export default WallPopUp;
