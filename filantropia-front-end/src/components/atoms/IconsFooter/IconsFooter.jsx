import React from "react";
import "./IconsFooter.scss";

export const IconsFooter = (props) => {
  const { icons } = props;
  return (
    <div className="listIcons">
      {icons.map(({ id, title, src }) => {
        return <Icon key={id} title={title} src={src} />;
      })}
    </div>
  );
};

const Icon = (props) => {
  const { title, src } = props;
  return (
    <img src={src} alt={title} title={title} className="listIcons__icon" />
  );
};
