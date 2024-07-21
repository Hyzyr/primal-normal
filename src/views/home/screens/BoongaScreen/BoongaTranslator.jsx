import React, { useState } from 'react';
import Textarea from 'src/components/textarea/Textarea';
import useBoongaTranslate from './hooks/useBoongaTranslate';

const BoongaTranslator = () => {
  const [isCaveman, setIsCaveman] = useState(false);
  const [value, setValue] = useState('');

  const translation = useBoongaTranslate({ value, toCaveman: isCaveman });
  const switchLang = () => {
    setValue(translation);
    setIsCaveman(!isCaveman);
  };

  return (
    <div className="boongascreen__content">
      <div className="boongascreen__content-text">
        <span className="boongascreen__content-text-left">HUMAN</span>
        <button className="boongascreen__content-ico" onClick={switchLang}>
          <img src="/images/components/arrows.png" alt="arrow" />
        </button>
        <span className="boongascreen__content-text-right">CAVEMAN</span>
      </div>
      <div className="boongascreen__content-row">
        <div className="boongascreen__content-item">
          <Textarea
            placeholder="hall checker"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
        <div className="boongascreen__content-item">
          <Textarea placeholder="hall checker" value={translation} disabled />
        </div>
      </div>
    </div>
  );
};

export default BoongaTranslator;
