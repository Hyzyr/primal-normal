import React, { useEffect, useRef, useState } from "react";
import Home from "src/views/home/Home";
import Nav from "src/components/nav/Nav";
import { PageScreens } from "./constants/AppContstants";
import { WalletPopUp } from "./views/home/screens/WalletScreen";
import Popup from "./views/mobile/Popup";

const App = () => {
  const [prevScreen, setPrevScreen] = useState(null);
  const [screen, setScreen] = useState(null);

  const setNewScreen = (id) => {
    if (id === screen) return;
    setPrevScreen(screen);
    setScreen(id);
  };
  
  return (
    <>
      <Nav screen={screen} setScreen={setNewScreen} />
      <Home
        screen={screen}
        prevScreen={prevScreen}
      />
      {/* <Popup /> */}
    </>
  );
};

export default App;
