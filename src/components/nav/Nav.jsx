import React, { useState } from 'react';
import { PageScreens } from 'src/constants/AppContstants';

const Nav = ({ screen, setScreen }) => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div
          type="button"
          className="nav__inner-logo "
          onClick={() => setScreen(null)}>
          <img src="/images/pn-logo.png" alt="pn-logo" />
        </div>
        <div className="nav__inner-group">
          <NavBtn
            onClick={() => setScreen(PageScreens.ORDINAL)}
            active={screen === PageScreens.ORDINAL ? 'active' : ''}
            img="/images/nav/nav-button-ordinal.png "
            alt="ordinal"
          />
          <NavBtn
            onClick={() => setScreen(PageScreens.WALLET)}
            active={screen === PageScreens.WALLET ? 'active' : ''}
            img="/images/nav/nav-button-wallet-checker.png"
            alt="wallet-checker"
          />
          <NavBtn
            onClick={() => setScreen(PageScreens.HALL)}
            active={screen === PageScreens.HALL ? 'active' : ''}
            img="/images/nav/nav-button-hall-oof.png "
            alt="hall-oof"
          />
          <NavBtn
            onClick={() => setScreen(PageScreens.BOONGA)}
            active={screen === PageScreens.BOONGA ? 'active' : ''}
            img="/images/nav/nav-button-boonga-maker.png "
            alt="boonga-maker"
          />
        </div>
      </div>
    </nav>
  );
};

const NavBtn = ({ img = '', alt, active = false, ...props }) => {
  return (
    <button
      type="button"
      className={`nav__inner-link nav-btn ${active ? 'active' : ''}`}
      {...props}>
      <img src={img} alt={alt} />
    </button>
  );
};
export default Nav;
