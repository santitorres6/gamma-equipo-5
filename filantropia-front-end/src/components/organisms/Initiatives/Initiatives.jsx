import React from "react";
import { ListCard } from "../../molecules/ListCard/ListCard";
import { CardInitiatives } from "../../molecules/CardInitiatives/CardInitiatives";
import { TitleSection } from "../../atoms/TitleSection/TitleSection";
import "./initiatives.scss";

export const Initiatives = (props) => {
  const { initiatives } = props;
  const { cards } = initiatives;
  return (
    <section className="iniciatives" id="iniciativas">
      <TitleSection title={initiatives.title} />
      <ListCard name={initiatives.title}>
        {cards.map((card) => {
          return <CardInitiatives key={card.id} {...card} />;
        })}{" "}
      </ListCard>
    </section>
  );
};
