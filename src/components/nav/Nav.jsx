import React, { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState('ordinal');

  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__inner-logo ">
          <img src="/images/pn-logo.png" alt="pn-logo" />
        </div>
        <div className="nav__inner-group">
          <NavBtn
            onClick={() => setActive('ordinal')}
            active={active === 'ordinal' ? 'active' : ''}
            img="/images/nav/nav-button-ordinal.png "
            alt="ordinal"
          />
          <NavBtn
            onClick={() => setActive('wallet')}
            active={active === 'wallet' ? 'active' : ''}
            img="/images/nav/nav-button-wallet-checker.png"
            alt="wallet-checker"
          />
          <NavBtn
            onClick={() => setActive('hall')}
            active={active === 'hall' ? 'active' : ''}
            img="/images/nav/nav-button-hall-oof.png "
            alt="hall-oof"
          />
          <NavBtn
            onClick={() => setActive('boonga')}
            active={active === 'boonga' ? 'active' : ''}
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
