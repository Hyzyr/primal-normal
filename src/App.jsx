import React, { useEffect, useRef, useState } from 'react';
import Home from 'src/views/home/Home';
import Nav from 'src/components/nav/Nav';
import { PageScreens } from './constants/AppContstants';
import { WalletPopUp } from './views/home/screens/WalletScreen';
import Mobile from './views/mobile/Mobile';
import useMobileCheck from './hooks/useMobileCheck';

const App = () => {
  const [prevScreen, setPrevScreen] = useState(null);
  const [screen, setScreen] = useState(null);
  const { isMobile, isLandscape } = useMobileCheck();

  const setNewScreen = (id) => {
    if (id === screen) return;
    setPrevScreen(screen);
    setScreen(id);
  };
  console.log({
    isMobile,
    isLandscape,
  });
  if (isMobile || !isLandscape) return <Mobile />;
  return (
    <>
      <Nav screen={screen} setScreen={setNewScreen} />
      <Home screen={screen} prevScreen={prevScreen} />
    </>
  );
};

export default App;
