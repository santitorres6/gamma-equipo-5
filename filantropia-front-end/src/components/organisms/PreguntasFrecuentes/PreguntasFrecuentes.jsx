import React from "react";
import { ListCard } from "../../molecules/ListCard/ListCard";
import { CardPreguntasFrecuentes } from "../../molecules/CardPreguntasFrecuentes/CardPreguntasFrecuentes";
import "./PreguntasFrecuentes.scss";

export const PreguntasFrecuentes = (props) => {
  const { preguntasFrecuentes } = props;
  const { cards } = preguntasFrecuentes;
  return (
    <ListCard name={preguntasFrecuentes.title}>
      {cards.map((card) => {
        return <CardPreguntasFrecuentes key={card.id} {...card} />;
      })}
    </ListCard>
  );
};
