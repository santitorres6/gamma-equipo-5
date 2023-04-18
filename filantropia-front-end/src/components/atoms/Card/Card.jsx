import React from "react";
import "./Card.scss";

export const Card = (props) => {
  const { children } = props;
  return <article className="card">{children}</article>;
};
