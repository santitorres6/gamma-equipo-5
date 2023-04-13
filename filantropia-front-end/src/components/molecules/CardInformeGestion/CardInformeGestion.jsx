import React from "react";
import { Card } from "../../atoms/Card/Card";
import { ImageCard } from "../../atoms/ImageCard/ImageCard";
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { Button } from "../../atoms/Button/Button";
import "./CardInformeGestion.scss";

export const CardInformeGestion = (props) => {
  const { img, title, button } = props;

  const handleClick = () => {};

  return (
    <Card>
      <ImageCard {...img} />
      <TitleCard title={title} />
      <a href={button?.href} target="_blank">
        <Button title={button?.title} handleClick={handleClick} />
      </a>
    </Card>
  );
};
