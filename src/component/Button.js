import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="Button">
      {props.name}
    </button>
  );
};

export default Button;
