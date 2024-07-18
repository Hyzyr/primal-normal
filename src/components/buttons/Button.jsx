import React from "react";

export const BUTTON_VARIANTS = {
  RIGHT: "right",
  LEFT: "left",
};

const Button = ({ variant = BUTTON_VARIANTS.RIGHT, text, ...restProps }) => {
  let image =
    variant === "right"
      ? "/images/components/button-right.png"
      : "/images/components/button-left.png";

  return (
    <button
      type="button"
      className={`boongascreen__button boongascreen__button-${variant}`}
      {...restProps}
    >
      <span>{text}</span>
      <div className="boongascreen__button-bg">
        <img src={image} alt={`arrow-${variant}`} />
      </div>
    </button>
  );
};

export default Button;
