import React from "react";
import "./ListCard.scss";

export const ListCard = (props) => {
  const { children } = props;
  return <div className="listCards">{children}</div>;
};
