import React, { useEffect, useRef } from 'react';
import ScreenWrapper from './screens/ScreenWrapper';
import AppScreen from './screens/AppScreen';
import WalletScreen from './screens/WalletScreen';
import HallScreen from './screens/HallScreen';
import HomeBg from './HomeBg';
import useHomeBg from './hooks/useHomeBg';
import { PageScreens } from 'src/constants/AppContstants';
import useScreen from './hooks/useScreen';
import WallScreen from './screens/WallScreen';

const Home = ({ screen, prevScreen }) => {
  const ref = useRef(null);

  const bgNav = useHomeBg({ wrapperRef: ref });
  const screenNav = useScreen();

  useEffect(() => {
    if (!ref.current) return;
    console.log({
      prevScreen,
      screen,
    });

    const prevScreenDom = ref.current.querySelector(`#${prevScreen}`);
    const screenNavDom = ref.current.querySelector(`#${screen}`);

    if (prevScreen) screenNav.hideScreen(prevScreenDom);
    if (screen) screenNav.showScreen(screenNavDom, prevScreen ? '<=0.4' : null);
  }, [screen, prevScreen]);

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
        <ScreenWrapper
          id={PageScreens.ORDINAL}
          active={screen === PageScreens.ORDINAL}
          className="_first">
          <AppScreen />
        </ScreenWrapper>
        <ScreenWrapper
          id={PageScreens.WALLET}
          active={screen === PageScreens.WALLET}
          className="_second">
          <WalletScreen />
        </ScreenWrapper>
        <ScreenWrapper
          id={PageScreens.BOONGA}
          active={screen === PageScreens.BOONGA}
          className="_third">
          <HallScreen />
        </ScreenWrapper>
        {/* <ScreenWrapper
          id={PageScreens.BOONGA}
          active={screen === PageScreens.BOONGA}
          className="_third">
          <WallScreen />
        </ScreenWrapper> */}
      </div>
    </div>
  );
};

export default Home;
