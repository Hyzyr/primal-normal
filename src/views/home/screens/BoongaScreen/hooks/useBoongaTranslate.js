import React from 'react';
import { chars } from '../constants';

const useBoongaTranslate = ({ value, toCaveman = false }) => {
  const translateText = (value) => {
    let str = value.toLowerCase();

    chars.forEach((charsData, index) => {
      str = str.replaceAll(charsData.keyCode.toLowerCase(), charsData.keyValue);
    });
    return str;
  };
  const reverseTranslateText = (value) => {
    let str = value;
    chars.forEach((charsData) => {
      str = str.replaceAll(charsData.keyValue, charsData.keyCode);
    });
    return str;
  };
  const translation = React.useMemo(() => {
    return toCaveman ? reverseTranslateText(value) : translateText(value);
  }, [value, toCaveman]);

  return translation;
};

export default useBoongaTranslate;
