import React from "react";
import "./ListCard.scss";

export const ListCard = (props) => {
  const { children, name } = props;
  const nameWithFormat = name.split(" ").join("");
  console.log(nameWithFormat);
  return (
    <div className={`listCards ${!!name ? nameWithFormat : ""}`}>
      {children}
    </div>
  );
};
