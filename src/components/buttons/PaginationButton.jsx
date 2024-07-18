import React from "react";

const PaginationButton = ({ text, ...props }) => {
  return (
    <button className="wallscreen__button" {...props}>
      <span>{text}</span>
      <div className="wallscreen__button-bg">
        <img src="/images/components/pagination-box.png" alt="bg" />
      </div>
    </button>
  );
};

export default PaginationButton;
