import React from 'react';
import { chars } from '../constants';

const useBoongaTranslate = ({ value, toCaveman = false }) => {
  console.log('chars[0]', chars[0]);

  const translateText = (value) => {
    let str = value.toLowerCase();

    chars.forEach((charsData, index) => {
      str = str.replaceAll(charsData.keyCode.toLowerCase(), charsData.keyValue);

      if (index === 0) {
        console.log(charsData[index]);
        console.log({ str });
      }
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

  return toCaveman ? reverseTranslateText(value) : translateText(value);
};

export default useBoongaTranslate;
