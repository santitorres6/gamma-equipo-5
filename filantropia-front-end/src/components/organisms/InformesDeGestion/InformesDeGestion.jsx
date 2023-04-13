import React from "react";
import { ListCard } from "../../molecules/ListCard/ListCard";
import { CardInformeGestion } from "../../molecules/CardInformeGestion/CardInformeGestion";
import "./InformesDeGestion.scss";

export const InformesDeGestion = (props) => {
  const { informesDeGestion } = props;
  const { cards } = informesDeGestion;
  return (
    <ListCard>
      {cards.map((card) => {
        return <CardInformeGestion key={card.id} {...card} />;
      })}
    </ListCard>
  );
};
