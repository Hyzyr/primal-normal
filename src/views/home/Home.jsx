import React, { useRef } from 'react';
import useScreenNavigition from 'src/hooks/useScreenNavigition';
import ScreenWrapper from './screens/ScreenWrapper';
import AppScreen from './screens/AppScreen';
import WalletScreen from './screens/WalletScreen';

const Home = () => {
  const ref = useRef(null);
  const screenNav = useScreenNavigition({
    initialPage: 1,
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
        <ScreenWrapper
          className="_first"
          bgVideo="/videos/left_background.webm">
          <AppScreen />
        </ScreenWrapper>
        <ScreenWrapper
          className="_second"
          bgVideo="/videos/mid_background.webm">
          <WalletScreen />
        </ScreenWrapper>
        <ScreenWrapper
          className="_third"
          bgVideo="/videos/right_background.webm">
          {/* <AppScreen /> */}
        </ScreenWrapper>
      </div>
    </div>
  );
};

export default Home;
