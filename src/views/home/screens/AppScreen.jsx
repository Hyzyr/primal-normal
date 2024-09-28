import React, { useEffect, useState } from 'react';

const AppScreen = ({}) => {
  const [src, setSrc] = useState('');
  const fbox = React.useRef(null);
  useEffect(() => {
    if (fbox.current) {
      window.fbox = fbox.current;
      setTimeout(() => {
        setSrc('https://primal-nomad-app.vercel.app/');
      }, 5000);
    }
  }, []);

  return (
    <div className="appscreen screen">
      <div className="appscreen__bg screen__bg">
        <img src="/images/screens/app-screen.png" alt="app-screen-frame" />
      </div>
      <div className="appscreen__image">
        {/* <img src="/images/placeholder.jpg" alt="placeholder" /> */}
        <iframe ref={fbox} src={src} frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default AppScreen;
