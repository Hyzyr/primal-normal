import React, { useEffect, useRef, useState } from "react";
import ScreenWrapper from "./screens/ScreenWrapper";
import AppScreen from "./screens/AppScreen";
import BoongaScreen from "./screens/BoongaScreen";
import { WalletScreen } from "./screens/WalletScreen";
import HomeBg from "./HomeBg";
import useHomeBg from "./hooks/useHomeBg";
import { PageScreens } from "src/constants/AppContstants";
import useScreen from "./hooks/useScreen";
import WallScreen from "./screens/WallScreen";
import ArrowButton, {
  ARROW_DIRECTIONS,
} from "src/components/buttons/ArrowButton";
import AudioController from "src/components/AudioController";
import { LeaderboardScreen } from "./screens/LeaderboardScreen";

const Home = ({ screen, prevScreen }) => {
  const [newScreenActive, setNewScreenActive] = useState(false);
  const ref = useRef(null);

  const bgNav = useHomeBg({ wrapperRef: ref });
  const screenNav = useScreen();

  useEffect(() => {
    if (!ref.current) return;
    setNewScreenActive(false);
    const prevScreenDom = ref.current.querySelector(`#${prevScreen}`);
    const screenNavDom = ref.current.querySelector(`#${screen}`);

    if (prevScreen) screenNav.hideScreen(prevScreenDom);
    if (screen)
      screenNav.showScreen(screenNavDom, prevScreen ? "<=0.4" : null, {
        onStart: () => setNewScreenActive(true),
      });
  }, [screen, prevScreen]);

  return (
    <div className="home__wrapper">
      <ArrowButton
        className="home-arrow"
        direction={ARROW_DIRECTIONS.LEFT}
        disabled={bgNav?.prevDisabled}
        onClick={() => bgNav.prevPage()}
      />
      <ArrowButton
        className="home-arrow"
        direction={ARROW_DIRECTIONS.RIGHT}
        disabled={bgNav?.nextDisabled}
        onClick={() => bgNav.nextPage()}
      />
      <AudioController />
      <div className="home" ref={ref}>
        <HomeBg />
        <ScreenWrapper
          id={PageScreens.ORDINAL}
          active={screen === PageScreens.ORDINAL}
          className="_first"
        >
          <AppScreen />
        </ScreenWrapper>
        <ScreenWrapper
          id={PageScreens.WALLET}
          active={screen === PageScreens.WALLET}
          className="_second"
        >
          <WalletScreen />
        </ScreenWrapper>
        <ScreenWrapper
          id={PageScreens.BOONGA}
          active={screen === PageScreens.BOONGA}
          className="_third"
        >
          <BoongaScreen
            active={screen === PageScreens.BOONGA && newScreenActive}
          />
        </ScreenWrapper>
        <ScreenWrapper
          id={PageScreens.HALL}
          active={screen === PageScreens.HALL}
          className="_third"
        >
          <WallScreen />
        </ScreenWrapper>
        <ScreenWrapper
          id={PageScreens.LEADERBOARD}
          active={screen === PageScreens.LEADERBOARD}
          className="_fourth"
        >
          <LeaderboardScreen />
        </ScreenWrapper>
      </div>
    </div>
  );
};

export default Home;
