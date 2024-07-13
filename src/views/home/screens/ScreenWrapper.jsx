import React from 'react';

const ScreenWrapper = ({ bgVideo = '', className = '', children }) => {
  return (
    <section className={`home__section ${className}`}>
      <div className="home__section-bg">
        <video muted loop autoPlay src={bgVideo}></video>
      </div>
      {children}
    </section>
  );
};

export default ScreenWrapper;
