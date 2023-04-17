import React from "react";
import { Card } from "../../atoms/Card/Card";
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { ParagraphCard } from "../../atoms/ParagraphCard/ParagraphCard";
import { Button } from "../../atoms/Button/Button";
import "./CardPreguntasFrecuentes.scss";

export const CardPreguntasFrecuentes = (props) => {
  const { title, paragraph, button, handleClick } = props;
  return (
    <Card>
      <TitleCard title={title} />
      <ParagraphCard paragraph={paragraph} />
      <Button
        title={button?.title}
        handleClick={() => handleClick(button.href)}
      />
    </Card>
  );
};
