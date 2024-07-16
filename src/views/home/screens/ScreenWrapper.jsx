import React from 'react';

const ScreenWrapper = ({ bgVideo = '', className = '', children }) => {
  return <section className={`home__section ${className}`}>{children}</section>;
};

export default ScreenWrapper;
