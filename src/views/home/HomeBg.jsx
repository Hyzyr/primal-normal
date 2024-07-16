import React from 'react';

const HomeBg = () => {
  const ref = React.useRef();

  return (
    <div className="home__bg" ref={ref}>
      <BgScreen bgVideo="/videos/left_background.webm" />
      <BgScreen bgVideo="/videos/mid_background.webm" />
      <BgScreen bgVideo="/videos/right_background.webm" />
    </div>
  );
};

const BgScreen = ({ bgVideo = '', className = '' }) => {
  return (
    <section className={`home__bg-screen ${className}`}>
      <video muted loop autoPlay src={bgVideo}></video>
    </section>
  );
};

export default HomeBg;
