import React from "react";
import { Card } from "../../atoms/Card/Card";
import { ImageCard } from "../../atoms/ImageCard/ImageCard";
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { ParagraphCard } from "../../atoms/ParagraphCard/ParagraphCard";
import { Button } from "../../atoms/Button/Button";
import "./CardCauses.scss";

export const CardCauses = (props) => {
  const { imagen, title, paragraph, button, handleClick } = props;

  return (
    <Card>
      <ImageCard {...imagen} />
      <TitleCard title={title} />
      <ParagraphCard paragraph={paragraph} />
      <Button {...button} handleClick={handleClick} />
    </Card>
  );
};
