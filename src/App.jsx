import React, { useEffect, useRef, useState } from "react";
import Home from "src/views/home/Home";
import Nav from "src/components/nav/Nav";
import { PageScreens } from "./constants/AppContstants";
import { WalletPopUp } from "./views/home/screens/WalletScreen";

const App = () => {
  const [prevScreen, setPrevScreen] = useState(null);
  const [screen, setScreen] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [sound, setSound] = useState(true);

  const setNewScreen = (id) => {
    if (id === screen) return;
    setPrevScreen(screen);
    setScreen(id);
  };
  
  const soundsControl = () => {
    const allSounds = document.querySelectorAll("audio");
    if (sound) {
      allSounds.forEach((item) => {
        item.muted = false;
      });
    } else {
      allSounds.forEach((item) => {
        item.muted = true;
      });
    }
  };
  useEffect(() => {
    soundsControl();
  }, [sound, setSound]);

  return (
    <>
      <Nav screen={screen} setScreen={setNewScreen} />
      <Home
        screen={screen}
        prevScreen={prevScreen}
        popUp={popUp}
        setPopUp={setPopUp}
        sound={sound}
        setSound={setSound}
      />
      <WalletPopUp
        popUp={popUp}
        setPopUp={setPopUp}
        sound={sound}
        setSound={setSound}
      />
    </>
  );
};

export default App;
