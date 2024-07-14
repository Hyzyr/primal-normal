import React from "react";
import bg from "./assets/textarea-bg.png";

const Textarea = ({ ...props }) => {
  return (
    <div className="input">
      <div className="input__bg">
        <img src={bg} alt="input-bg" />
      </div>
      <textarea {...props}></textarea>
    </div>
  );
};

export default Textarea;
