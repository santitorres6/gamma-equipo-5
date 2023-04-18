import React from "react";
import { ListCard } from "../../molecules/ListCard/ListCard";
import { CardContacto } from "../../molecules/CardContacto/CardContacto";
import "./Contacto.scss";

export const Contacto = (props) => {
  const { contacto } = props;
  const { cards } = contacto;
  return (
    <ListCard name={contacto.title}>
      {cards.map((card) => {
        return <CardContacto key={card.id} {...card} />;
      })}
    </ListCard>
  );
};
