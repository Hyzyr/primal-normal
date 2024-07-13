import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__inner-logo ">
          <img src="/images/pn-logo.png" alt="pn-logo" />
        </div>
        <div className="nav__inner-group">
          <div className="nav__inner-link nav-btn">
            <img src="/images/nav/nav-button-ordinal.png " alt="ordinal" />
          </div>
          <div className="nav__inner-link nav-btn">
            <img
              src="/images/nav/nav-button-wallet-checker.png"
              alt="wallet-checker"
            />
          </div>
          <div className="nav__inner-link nav-btn">
            <img src="/images/nav/nav-button-hall-oof.png " alt="hall-oof" />
          </div>
          <div className="nav__inner-link nav-btn">
            <img
              src="/images/nav/nav-button-boonga-maker.png "
              alt="boonga-maker"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
