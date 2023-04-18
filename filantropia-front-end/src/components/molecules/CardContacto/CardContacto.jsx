import React from "react";
import "./CardContacto.scss";
import { Card } from "../../atoms/Card/Card";
import { ImageCard } from "../../atoms/ImageCard/ImageCard";

export const CardContacto = (props) => {
  const { img, name, ocupation, tel, emailFirst, emailSecondary } = props;
  return (
    <Card>
      <ImageCard {...img} />
      <NameContact name={name} />
      <OcupationContact ocupation={ocupation} />
      {!!tel ? <TelContact tel={tel} /> : undefined}
      <EmailFirstContact emailFirst={emailFirst} />
      {!!emailSecondary ? (
        <EmailSecondaryContact emailSecondary={emailSecondary} />
      ) : undefined}
    </Card>
  );
};

const NameContact = ({ name }) => {
  return <p className="Contact__name">{name}</p>;
};
const OcupationContact = ({ ocupation }) => {
  return <p className="Contact__ocupation">{ocupation}</p>;
};
const TelContact = ({ tel }) => {
  return <p className="Contact__tel">{tel}</p>;
};
const EmailFirstContact = ({ emailFirst }) => {
  return <p className="Contact__emailFirst">{emailFirst}</p>;
};
const EmailSecondaryContact = ({ emailSecondary }) => {
  return <p className="Contact__emailSecondary">{emailSecondary}</p>;
};
