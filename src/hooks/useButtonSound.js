import React from 'react';

const useButtonSound = () => {
  return () => {
    const event = new Event('buttonsound');
    window.dispatchEvent(event);
  };
};

export default useButtonSound;
