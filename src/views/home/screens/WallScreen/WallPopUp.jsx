import React from 'react';
import ButtonIcon from 'src/components/buttons/ButtonIcon';

const WallPopUp = ({ title, popUp, setPopUp, image }) => {
  return (
    <div className={`wallscreen__popup ${popUp ? 'active' : ''}`}>
      <div className="wallscreen__popup-bg">
        <img src="/images/wall/popup-hall.webp" alt="frame" />
      </div>
      <div className="wallscreen__popup-image">
        <img src={image} alt="placeholder" />
      </div>
      {title && <div className="wallscreen__popup-title">{title}</div>}
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
