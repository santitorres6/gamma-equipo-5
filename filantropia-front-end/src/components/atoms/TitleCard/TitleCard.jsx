import React from "react";
import "./TitleCard.scss";

export const TitleCard = (props) => {
  const { title } = props;
  return <h3 className="titleCard">{title}</h3>;
};
