import React, { useEffect } from 'react';

const HomeBg = () => {
  const ref = React.useRef();

  return (
    <div className="home__bg" ref={ref}>
      <BgScreen bgVideo="/videos/left_background.webm" />
      <BgScreen bgVideo="/videos/mid_background.webm" />
      <BgScreen bgVideo="/videos/right_background.webm" />
      <div className="home__bg-stone">
        <img src="/images/front-stone.png" alt="fixed stone" />
      </div>
      <ShadowLight />
    </div>
  );
};

const ShadowLight = () => {
  useEffect(() => {
    const listener = (e) => {
      window.event = e;
      document.documentElement.style.setProperty('--mouseX', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouseY', `${e.clientY}px`);
    };

    document.body.addEventListener('mousemove', listener);

    return () => document.body.removeEventListener('mousemove', listener);
  }, []);

  return <div className="home__bg-shadow" />;
};

const BgScreen = ({ bgVideo = '', className = '' }) => {
  return (
    <section className={`home__bg-screen ${className}`}>
      <video muted loop autoPlay src={bgVideo}></video>
    </section>
  );
};

export default HomeBg;
