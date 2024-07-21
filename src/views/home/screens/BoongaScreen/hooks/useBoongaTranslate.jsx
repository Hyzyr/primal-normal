import React from 'react';
import { chars } from '../constants';

const useBoongaTranslate = ({ value, toCaveman = false }) => {
  const translateText = (value) => {
    let str = value;
    chars.forEach((charsData) => {
      str = str.replaceAll(charsData.keyCode, charsData.keyValue);
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
