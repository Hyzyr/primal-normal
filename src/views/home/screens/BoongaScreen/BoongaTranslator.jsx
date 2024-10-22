import React, { useState } from 'react';
import Textarea from 'src/components/textarea/Textarea';
import useBoongaTranslate from './hooks/useBoongaTranslate';
import Button from 'src/components/buttons/Button';
import ButtonIcon from 'src/components/buttons/ButtonIcon';

const BoongaTranslator = ({ appendText }) => {
  const [isCaveman, setIsCaveman] = useState(false);
  const [value, setValue] = useState('');

  const translation = useBoongaTranslate({ value, toCaveman: isCaveman });
  const switchLang = () => {
    setValue(translation);
    setIsCaveman(!isCaveman);
  };
  const copy = (text) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(text);
      // .then(
      //   () => {
      //     setCopiedActive();
      //   },
      //   (err) => console.error('Async: Could not copy text: ', err)
      // );
    } else if (window.clipboardData) {
      window.clipboardData.setData('Text', text);
      // setCopiedActive();
    } else {
      console.log(`can't copy: not secure`);
      // showCopyText(messageObj, "Error: not secure");
    }
  };

  return (
    <div className="boongascreen__content">
      <div className={`boongascreen__content-box ${isCaveman ? 'active' : ''}`}>
        <div className="boongascreen__content-text _left">
          <span>HUMAN</span>
        </div>
        <button className="boongascreen__content-ico" onClick={switchLang}>
          <img src="/images/components/arrows.png" alt="arrow" />
        </button>
        <div className="boongascreen__content-text">
          <span>CAVEMAN</span>
        </div>
      </div>
      <div className="boongascreen__content-row">
        <div className="boongascreen__content-item">
          <Textarea
            placeholder="Boonga translate"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        <div className="boongascreen__content-item">
          <Textarea placeholder="Boonga translate" value={translation} disabled />
        </div>
        <div className="boongascreen__content-tools">
          <ButtonIcon
            icon={'/images/components/add.png'}
            alt={'add'}
            onClick={() => appendText(translation)}
          />
          <ButtonIcon
            icon={'/images/components/copy.png'}
            alt={'copy'}
            onClick={() => copy(translation)}
          />
        </div>
      </div>
    </div>
  );
};

export default BoongaTranslator;
