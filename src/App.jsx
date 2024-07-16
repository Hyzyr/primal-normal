import React, { useRef, useState } from 'react';
import Home from 'src/views/home/Home';
import Nav from 'src/components/nav/Nav';

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
      <Home screen={screen} prevScreen={prevScreen} />
    </>
  );
};

export default App;
