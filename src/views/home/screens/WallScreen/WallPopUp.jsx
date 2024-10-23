import React from 'react';
import ButtonIcon from 'src/components/buttons/ButtonIcon';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const WallPopup = ({ title, popup, setPopup, data }) => {
  const stickerURL = React.useMemo(() => {
    const n = getRandomInt(3);
    return `/images/wall/notification-stickers/coming-soon-${n + 1}.webp`;
  }, [data]);

  return (
    <div className={`wallscreen__popup ${popup ? 'active' : ''}`}>
      <div className="wallscreen__popup-bg">
        <img src="/images/wall/popup-hall.webp" alt="frame" />
        {!data?.comments && (
          <div className="wallscreen__popup-sticker">
            <img src={stickerURL} alt="frame" />
          </div>
        )}
        {data?.comments && (
          <div className="wallscreen__popup-comment">
            <p>
              {data.comments.split('\n').map((line, index) => (
                <>
                  {index !== 0 && <br />}
                  {line}
                </>
              ))}
            </p>
          </div>
        )}
      </div>
      {data && (
        <>
          <div className="wallscreen__popup-image">
            <img src={data.fileName} alt={data.title} />
          </div>
          <a
            href={data.link}
            target="_blank"
            className="wallscreen__popup-title">
            <span>{data.title}</span>
            <img src="/images/twitter-logo.png" alt="twitter-logo" />
          </a>
        </>
      )}

      <ButtonIcon
        icon={'/images/components/cross.png'}
        alt={'close'}
        addClass="wallscreen__popup-close"
        onClick={() => setPopup(false)}
      />
    </div>
  );
};

export default WallPopup;
