import React from 'react';

const ScreenWrapper = ({ active = false, children, className, ...props }) => {
  let fullClassName = `home__section`;
  fullClassName += className ? ` ${className}` : '';
  fullClassName += active ? ' active' : '';

  return (
    <section className={fullClassName} {...props}>
      {children}
    </section>
  );
};

export default ScreenWrapper;
