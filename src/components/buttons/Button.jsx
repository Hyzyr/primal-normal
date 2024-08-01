import React from "react";
import useButtonSound from "src/hooks/useButtonSound";

export const BUTTON_VARIANTS = {
  STONE1: "stone1",
  STONE2: "stone2",
};
export const BUTTON_TEXT_SIZE = {
  sm: "_sm",
  md: "_md",
  lg: "_lg",
};

const Button = ({
  variant = BUTTON_VARIANTS.STONE1,
  textSize = BUTTON_TEXT_SIZE.md,
  text,
  onClick,
  ...restProps
}) => {
  const playSound = useButtonSound();

  let image =
    variant === BUTTON_VARIANTS.STONE1
      ? "/images/components/button-right.png"
      : "/images/components/button-left.png";

  const handleClick = () => {
    console.log("handleClick");
    playSound();
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      className={`button button-${variant}`}
      onClick={handleClick}
      {...restProps}
    >
      <span className={textSize}>{text}</span>
      <div className="button-bg">
        <img src={image} alt={`arrow-${variant}`} />
      </div>
    </button>
  );
};

export default Button;
