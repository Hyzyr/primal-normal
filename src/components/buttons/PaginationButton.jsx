import React from "react";
import useButtonSound from "src/hooks/useButtonSound";

const PaginationButton = ({ text, onClick, ...props }) => {
  const playSound = useButtonSound();
  const handleClick = () => {
    console.log("handleClick");
    playSound();
    if (onClick) onClick();
  };
  return (
    <button className="wallscreen__button" {...props} onClick={handleClick}>
      <span>{text}</span>
      <div className="wallscreen__button-bg">
        <img src="/images/components/pagination-box.png" alt="bg" />
      </div>
    </button>
  );
};

export default PaginationButton;
