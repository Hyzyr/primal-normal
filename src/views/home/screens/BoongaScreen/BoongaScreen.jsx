import React, { useEffect, useState } from 'react';
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
import useEditor from './hooks/useEditor';

const BoongaScreen = () => {
  const [imageFile, setImageFile] = useState(null);
  const fileRef = React.useRef(null);
  const wrapperRef = React.useRef();

  const editor = useEditor({ wrapperRef, imageFile });

  useEffect(() => {
    const slider = document.querySelector(
      '#BOONGA_MAKER > div > div.boongascreen__container > div:nth-child(2) .boongascreen__slider-row'
    );
    const items = slider.querySelectorAll('.boongascreen__slider-item');
    window.slider = slider;
    window.items = items;
    const n = Math.ceil(items.length / 5);
  }, []);

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };
  const toggleFile = () => fileRef.current.click();
  const saveImage = () => editor.exportImage();

  const onStickerClick = (imgUrl) => {
    editor.appendImage(imgUrl);
  };

  return (
    <div className="boongascreen screen">
      <input
        ref={fileRef}
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
      <div className="boongascreen__bg screen__bg">
        <img src="/images/screens/boonga-screen.png" alt="app-screen-frame" />
      </div>
      <div className="boongascreen__image">
        <img src="/images/placeholder-stone.png" alt="placeholder" />
        <BonngaMaker editor={editor} ref={wrapperRef} />
      </div>
      <div className="boongascreen__group">
        <Button
          text={'SAVE-NGA!'}
          textSize={BUTTON_TEXT_SIZE.lg}
          onClick={saveImage}
        />
        <Button
          text={'UPLOAD YOUR PDF/IMAGE!'}
          textSize={BUTTON_TEXT_SIZE.sm}
          variant={BUTTON_VARIANTS.STONE2}
          onClick={toggleFile}
        />
      </div>
      <div className="boongascreen__container">
        <BoongaSlider
          title={'Stickers'}
          items={stickers}
          onImageClick={onStickerClick}
        />
        <BoongaSlider
          title={'ITEMS'}
          items={[...items, ...items]}
          onImageClick={onStickerClick}
        />
      </div>
      <BoongaTranslator appendText={editor.appendText} />
    </div>
  );
};

export default BoongaScreen;
