import React, { useRef } from 'react';
import ScreenWrapper from './screens/ScreenWrapper';
import AppScreen from './screens/AppScreen';
import WalletScreen from './screens/WalletScreen';
import HallScreen from './screens/HallScreen';
import HomeBg from './HomeBg';
import useHomeBg from './hooks/useHomeBg';

const Home = () => {
  const ref = useRef(null);

  const bgNav = useHomeBg({
    wrapperRef: ref,
  });

  return (
    <div className="home__wrapper">
      <button
        type="button"
        disabled={bgNav?.prevDisabled}
        className="home-arrow home-arrow-left"
        onClick={() => bgNav.prevPage()}>
        <img src="/images/components/arrow-left.png" alt="" />
      </button>
      <button
        type="button"
        disabled={bgNav?.nextDisabled}
        className="home-arrow home-arrow-right"
        onClick={() => bgNav.nextPage()}>
        <img src="/images/components/arrow-right.png" alt="" />
      </button>
      <div className="home" ref={ref}>
        <HomeBg />
        <ScreenWrapper className="_first">
          <AppScreen />
        </ScreenWrapper>
        <ScreenWrapper className="_second">
          <WalletScreen />
        </ScreenWrapper>
        <ScreenWrapper className="_third">
          <HallScreen />
        </ScreenWrapper>
      </div>
    </div>
  );
};

export default Home;
