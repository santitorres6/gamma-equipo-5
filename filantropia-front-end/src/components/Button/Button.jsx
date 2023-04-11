import React from "react";
import "./Button.scss";

export const Button = (props) => {
  const { title, handleOnClick } = props;
  return (
    <button className="button" onClick={handleOnClick}>
      {title}
    </button>
  );
};
