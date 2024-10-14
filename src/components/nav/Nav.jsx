import React, { useState } from "react";
import { PageScreens } from "src/constants/AppContstants";
import useButtonSound from "src/hooks/useButtonSound";

const Nav = ({ screen, setScreen }) => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div
          type="button"
          className="nav__inner-logo "
          onClick={() => setScreen(null)}
        >
          <img src="/images/pn-logo.png" alt="pn-logo" />
        </div>
        <div className="nav__inner-group">
          <NavBtn
            onClick={() => setScreen(PageScreens.ORDINAL)}
            active={screen === PageScreens.ORDINAL ? "active" : ""}
            img="/images/nav/nav-button-ordinal.png "
            alt="ordinal"
          />
          <NavBtn
            onClick={() => setScreen(PageScreens.WALLET)}
            active={screen === PageScreens.WALLET ? "active" : ""}
            img="/images/nav/nav-button-wallet-checker.png"
            alt="wallet-checker"
            addClass="_lg"
          />
          <NavBtn
            onClick={() => setScreen(PageScreens.HALL)}
            active={screen === PageScreens.HALL ? "active" : ""}
            img="/images/nav/nav-button-hall-oof.png "
            alt="hall-oof"
          />
          <NavBtn
            onClick={() => setScreen(PageScreens.BOONGA)}
            active={screen === PageScreens.BOONGA ? "active" : ""}
            img="/images/nav/nav-button-boonga-maker.png "
            alt="boonga-maker"
          />
          <NavBtn
            onClick={() => setScreen(PageScreens.LEADERBOARD)}
            active={screen === PageScreens.LEADERBOARD ? "active" : ""}
            img="/images/nav/nav-button-leaderboard.png "
            alt="boonga-maker"
          />
        </div>
      </div>
    </nav>
  );
};

const NavBtn = ({
  img = "",
  alt,
  active = false,
  addClass = "",
  onClick,
  ...props
}) => {
  const playSound = useButtonSound();

  const handleClick = () => {
    console.log("handleClick");
    playSound();
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      className={`nav__inner-link nav-btn ${
        active ? "active" : ""
      } ${addClass}`}
      onClick={handleClick}
      {...props}
    >
      <img src={img} alt={alt} />
    </button>
  );
};
export default Nav;
