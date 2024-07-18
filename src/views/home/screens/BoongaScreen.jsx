import React from "react";
import ArrowButton, {
  ARROW_DIRECTIONS,
} from "src/components/buttons/ArrowButton";
import Button, { BUTTON_VARIANTS } from "src/components/buttons/Button";
import Textarea from "src/components/textarea/Textarea";

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
              <div className="boongascreen__slider-item"></div>
              <div className="boongascreen__slider-item"></div>
              <div className="boongascreen__slider-item"></div>
              <div className="boongascreen__slider-item"></div>
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
              <div className="boongascreen__slider-item"></div>
              <div className="boongascreen__slider-item"></div>
              <div className="boongascreen__slider-item"></div>
              <div className="boongascreen__slider-item"></div>
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
          <span className="boongascreen__content-ico">
            <img src="/images/components/arrows.png" alt="arrow" />
          </span>
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
