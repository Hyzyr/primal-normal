import React from 'react';
import bg from './assets/input-bg.png';
import btn from './assets/input-btn.png';
import useButtonSound from 'src/hooks/useButtonSound';

const Input = ({ noBtn = false, onSubmit, btnProps, ...props }) => {
  const inputRef = React.useRef();
  const playSound = useButtonSound();
  const handleClick = () => {
    console.log('handleClick');
    playSound();
    if (onClick) onClick();
  };

  const onClick = (e) => {
    if (onSubmit)
      onSubmit(inputRef.current ? inputRef.current?.value : null);
    if (btnProps && btnProps.onClick) btnProps.onClick(e);
    playSound();
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
      <input type="text" ref={inputRef} {...props} />
    </div>
  );
};

export default Input;
