import React from "react";

const ButtonIcon = ({ icon, alt, addClass = "", ...props }) => {
  return (
    <button className={`btn btn-icon ${addClass}`} {...props}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default ButtonIcon;
