import React from 'react';

const ScreenWrapper = ({ active = false, className = '', children }) => {
  let fullClassName = `home__section ${className}`;
  fullClassName += active ? ' active' : '';

  return <section className={fullClassName}>{children}</section>;
};

export default ScreenWrapper;
