import React from "react";
import "./ImageCard.scss";

export const ImageCard = (props) => {
  const { title, src } = props;
  return <img className="imageCard" src={src} alt={title} title={title} />;
};
