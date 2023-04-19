import React from "react";
import { ImageCard } from "../../atoms/ImageCard/ImageCard";
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { ParagraphCard } from "../../atoms/ParagraphCard/ParagraphCard";
import "./CardHowToDonate.scss";

export const CardHowToDonate = (props) => {
  const { img, title, paragraphs } = props;

  return (
    <article className="cardHowToDonate">
      <ImageCard {...img} />
      <div className="wrapperText">
        <TitleCard title={title} />
        {paragraphs.map((paragraph, index) => {
          return <ParagraphCard key={index} paragraph={paragraph} />;
        })}
      </div>
    </article>
  );
};
