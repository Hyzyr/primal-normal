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
import BoongaTranslator from './BoongaTranslator';
import BonngaMaker from './BonngaMaker';

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
      <div className="boongascreen__image">
        <img src="/images/placeholder-stone.png" alt="placeholder" />
        <BonngaMaker />
      </div>
      <div className="boongascreen__group">
        <Button text={'SAVE-NGA!'} textSize={BUTTON_TEXT_SIZE.lg} />
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
      <BoongaTranslator />
    </div>
  );
};

export default BoongaScreen;
