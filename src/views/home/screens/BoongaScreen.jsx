import React from "react";
import ArrowButton, {
  ARROW_DIRECTIONS,
} from "src/components/buttons/ArrowButton";
import Button, { BUTTON_VARIANTS } from "src/components/buttons/Button";
import Textarea from "src/components/textarea/Textarea";

const stickers = [
  {
    img: "/images/boonga/stickers/alien.png",
    alt: "alien",
  },
  {
    img: "/images/boonga/stickers/alien-2.png",
    alt: "alien",
  },
  {
    img: "/images/boonga/stickers/anteater.png",
    alt: "anteater",
  },
  {
    img: "/images/boonga/stickers/attack.png",
    alt: "attack",
  },
  {
    img: "/images/boonga/stickers/bang.png",
    alt: "bang",
  },
  {
    img: "/images/boonga/stickers/best-friend.png",
    alt: "best-friend",
  },
  {
    img: "/images/boonga/stickers/bit-bang-logo.png",
    alt: "bit-bang-logo",
  },
  {
    img: "/images/boonga/stickers/bitcoin-logo.png",
    alt: "bitcoin-logo",
  },
  {
    img: "/images/boonga/stickers/bow.png",
    alt: "bow",
  },
  {
    img: "/images/boonga/stickers/bring-stone.png",
    alt: "bring-stone",
  },
];
const items = [
  {
    img: "/images/boonga/items/bit-bang-necklace.png",
    alt: "bit-bang-necklace",
  },
  {
    img: "/images/boonga/items/bit-bang-necklace-front-view.png",
    alt: "bit-bang-necklace-front-view",
  },
  {
    img: "/images/boonga/items/caveman-beard.png",
    alt: "caveman-beard",
  },
  {
    img: "/images/boonga/items/caveman-beard-front-view.png",
    alt: "caveman-beard-front-view",
  },
  {
    img: "/images/boonga/items/caveman-head.png",
    alt: "caveman-head",
  },
  {
    img: "/images/boonga/items/caveman-head-front.png",
    alt: "caveman-head-front",
  },
  {
    img: "/images/boonga/items/rock-cap.png",
    alt: "rock-cap",
  },
  {
    img: "/images/boonga/items/rock-cap-front-view.png",
    alt: "rock-cap-front-view",
  },
  {
    img: "/images/boonga/items/rockulus-vr.png",
    alt: "rockulus-vr",
  },
  {
    img: "/images/boonga/items/rockulus-vr---front-view.png",
    alt: "rockulus-vr---front-view",
  },
];

const BoongaScreen = () => {
  return (
    <div className="boongascreen screen">
      <div className="boongascreen__bg screen__bg">
        <img src="/images/screens/boonga-screen.png" alt="app-screen-frame" />
      </div>
      <div className="boongascreen__group">
        <Button text={"SAVE-NGA!"} variant={BUTTON_VARIANTS.LEFT} />
        <Button
          text={"UPLOAD YOUR PDF/IMAGE!"}
          variant={BUTTON_VARIANTS.RIGHT}
        />
      </div>
      <div className="boongascreen__container">
        <div className="boongascreen__container-group">
          <div className="boongascreen__container-text">STICKERS</div>
          <div className="boongascreen__slider">
            <ArrowButton
              direction={ARROW_DIRECTIONS.LEFT}
              className="boongascreen__slider-arrow"
            />
            <div className="boongascreen__slider-row">
              {stickers.map((item, i) => (
                <div className="boongascreen__slider-item" key={i}>
                  <img src={item.img} alt={item.alt} />
                </div>
              ))}
            </div>
            <ArrowButton
              direction={ARROW_DIRECTIONS.RIGHT}
              className="boongascreen__slider-arrow"
            />
          </div>
        </div>
        <div className="boongascreen__container-group">
          <div className="boongascreen__container-text">ITEMS</div>
          <div className="boongascreen__slider">
            <ArrowButton
              direction={ARROW_DIRECTIONS.LEFT}
              className="boongascreen__slider-arrow"
            />
            <div className="boongascreen__slider-row">
              {items.map((item, i) => (
                <div className="boongascreen__slider-item" key={i}>
                  <img src={item.img} alt={item.alt} />
                </div>
              ))}
            </div>
            <ArrowButton
              direction={ARROW_DIRECTIONS.RIGHT}
              className="boongascreen__slider-arrow"
            />
          </div>
        </div>
      </div>
      <div className="boongascreen__content">
        <div className="boongascreen__content-text">
          <span className="boongascreen__content-text-left">HUMAN</span>
          <button className="boongascreen__content-ico">
            <img src="/images/components/arrows.png" alt="arrow" />
          </button>
          <span className="boongascreen__content-text-right">CAVEMAN</span>
        </div>
        <div className="boongascreen__content-row">
          <div className="boongascreen__content-left">
            <Textarea placeholder="hall checker" />
          </div>
          <div className="boongascreen__content-right">
            <Textarea placeholder="hall checker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoongaScreen;
