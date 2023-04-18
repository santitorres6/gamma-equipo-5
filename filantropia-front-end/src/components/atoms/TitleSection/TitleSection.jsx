import React from "react";
import "./TitleSection.scss";

export const TitleSection = (props) => {
  const { title } = props;
  return <h2 className="titleSection">{title}</h2>;
};
