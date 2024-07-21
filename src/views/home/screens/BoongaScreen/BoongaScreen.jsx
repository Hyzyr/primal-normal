import React, { useEffect } from 'react';
import ArrowButton, {
  ARROW_DIRECTIONS,
} from 'src/components/buttons/ArrowButton';
import Button, {
  BUTTON_TEXT_SIZE,
  BUTTON_VARIANTS,
} from 'src/components/buttons/Button';
import Textarea from 'src/components/textarea/Textarea';
import { items, stickers } from './constants';
import BoongaSlider from './BoongaSlider';

const BoongaScreen = () => {
  useEffect(() => {
    const slider = document.querySelector(
      '#BOONGA_MAKER > div > div.boongascreen__container > div:nth-child(2) .boongascreen__slider-row'
    );
    const items = slider.querySelectorAll('.boongascreen__slider-item');
    window.slider = slider;
    window.items = items;
    const n = Math.ceil(items.length / 5);
  }, []);

  return (
    <div className="boongascreen screen">
      <div className="boongascreen__bg screen__bg">
        <img src="/images/screens/boonga-screen.png" alt="app-screen-frame" />
      </div>
      <div className="boongascreen__group">
        <Button
          text={'SAVE-NGA!'}
          textSize={BUTTON_TEXT_SIZE.lg}
        />
        <Button
          text={'UPLOAD YOUR PDF/IMAGE!'}
          textSize={BUTTON_TEXT_SIZE.sm}
          variant={BUTTON_VARIANTS.STONE2}
        />
      </div>
      <div className="boongascreen__container">
        <BoongaSlider title={'Stickers'} items={stickers} />
        <BoongaSlider title={'ITEMS'} items={[...items, ...items]} />
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
