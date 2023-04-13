import React from "react";
import "./ParagraphCard.scss";

export const ParagraphCard = (props) => {
  const { paragraph } = props;
  return <p className="paragraphCard">{paragraph}</p>;
};
