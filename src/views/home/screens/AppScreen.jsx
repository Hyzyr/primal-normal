import React, { useEffect, useState } from "react";
import ArrowButton, {
  ARROW_DIRECTIONS,
} from "src/components/buttons/ArrowButton";

const AppScreen = ({}) => {
  const [src, setSrc] = useState("");
  const fbox = React.useRef(null);
  const [tab, setTab] = useState(1);
  const controlTab = (index) => {
    if (index >= 4) {
      index = 1;
    } else if (index <= 0) {
      index = 3;
    }
    setTab(index);
  };

  useEffect(() => {
    if (fbox.current) {
      window.fbox = fbox.current;
      setTimeout(() => {
        setSrc("https://primal-nomad-app.vercel.app/");
      }, 5000);
    }
  }, []);

  return (
    <div className="appscreen screen">
      <div className="appscreen__bg screen__bg">
        <img src="/images/app/app-screen.png" alt="app-screen-frame" />
      </div>
      <div className="appscreen__content">
        <div
          className={`appscreen__content-image ${tab === 1 ? "active" : ""}`}
        >
          <img src="/images/app/app-1.png" alt="app-1" />
        </div>
        <div
          className={`appscreen__content-image ${tab === 2 ? "active" : ""}`}
        >
          <img src="/images/app/app-2.png" alt="app-2" />
        </div>
        <div
          className={`appscreen__content-image ${tab === 3 ? "active" : ""}`}
        >
          <img src="/images/app/app-3.png" alt="app-3" />
        </div>
        <div
        className="appscreen__content-arrow"
        onClick={() => {
          controlTab(tab + 1);
        }}
      >
        →
      </div>
      <div
        className="appscreen__content-arrow _left"
        onClick={() => {
          controlTab(tab - 1);
        }}
      >
        ←
      </div>
      </div>
      <div className="appscreen__image">
        {/* <img src="/images/placeholder.jpg" alt="placeholder" /> */}
        <iframe ref={fbox} src={src} frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default AppScreen;
