import React from "react";
import { ListCard } from "../../molecules/ListCard/ListCard";
import { CardNoticias } from "../../molecules/CardNoticias/CardNoticias";
import "./Noticias.scss";

export const Noticias = (props) => {
  const { noticias } = props;
  const { cards } = noticias;
  return (
    <ListCard>
      {cards.map((card) => {
        return <CardNoticias key={card.id} {...card} />;
      })}
    </ListCard>
  );
};
