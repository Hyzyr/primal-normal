import React from 'react';
import bg from './assets/input-bg.png';
import btn from './assets/input-btn.png';

const Input = ({ noBtn = false, onSubmit, btnProps, ...props }) => {
  const onClick = (e) => {
    if (onSubmit) onSubmit();
    if (btnProps && btnProps.onClick) btnProps.onClick(e);
  };
  return (
    <div className="input">
      <div className="input__bg">
        <img src={bg} alt="input-bg" />
      </div>
      {!noBtn && (
        <button
          type={btn}
          className="input__btn"
          {...btnProps}
          onClick={onClick}>
          <img src={btn} alt="button" />
        </button>
      )}
      <input type="text" {...props} />
    </div>
  );
};

export default Input;
