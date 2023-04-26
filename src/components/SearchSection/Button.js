import React from "react";

const Button = (props) => {
  return (
    <div className="btn-container">
      <button style={props.style}>{props.text}</button>
    </div>
  );
};

export default Button;
