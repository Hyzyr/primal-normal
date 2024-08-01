import React from "react";

const ButtonIcon = ({ icon, secondIcon, alt, addClass = "", ...props }) => {
  return (
    <button
      className={`btn btn-icon ${addClass} ${secondIcon ? "_toggle" : ""}`}
      {...props}
    >
      <img src={icon} alt={alt} />
      {secondIcon && <img src={secondIcon} alt={alt} />}
    </button>
  );
};

export default ButtonIcon;
