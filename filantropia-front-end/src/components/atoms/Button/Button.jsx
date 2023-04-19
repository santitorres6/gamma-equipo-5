import React from "react";
import "./Button.scss";

export const Button = (props) => {
  const { title, href, handleClick } = props;
  return (
    <button className="button" onClick={() => handleClick(href)}>
      {title}
    </button>
  );
};
