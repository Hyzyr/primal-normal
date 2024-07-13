import React, { useRef } from 'react';
import useScreenNavigition from './hooks/useScreenNavigition';

const App = () => {
  const ref = useRef(null);
  const screenNav = useScreenNavigition({
    wrapperRef: ref,
  });

  return (
    <div className="home__wrapper">
      <button
        type="button"
        disabled={screenNav?.prevDisabled}
        className="home-arrow home-arrow-left"
        onClick={() => screenNav.prevPage()}>
        <img src="/images/components/arrow-left.png" alt="" />
      </button>
      <button
        type="button"
        disabled={screenNav?.nextDisabled}
        className="home-arrow home-arrow-right"
        onClick={() => screenNav.nextPage()}>
        <img src="/images/components/arrow-right.png" alt="" />
      </button>
      <div className="home" ref={ref}>
        <section className="home__section _first">
          <div className="home__section-bg">
            <video
              muted
              loop
              autoPlay
              src="/videos/left_background.webm"></video>
          </div>
        </section>
        <section className="home__section _second">
          <div className="home__section-bg">
            <video
              muted
              loop
              autoPlay
              src="/videos/mid_background.webm"></video>
          </div>
        </section>
        <section className="home__section _third">
          <div className="home__section-bg">
            <video
              muted
              loop
              autoPlay
              src="/videos/right_background.webm"></video>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
