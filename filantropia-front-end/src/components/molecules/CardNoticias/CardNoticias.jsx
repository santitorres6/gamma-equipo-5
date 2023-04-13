import React from "react";
import { Card } from "../../atoms/Card/Card";
import { ImageCard } from "../../atoms/ImageCard/ImageCard";
import { ParagraphCard } from "../../atoms/ParagraphCard/ParagraphCard";
import { Button } from "../../atoms/Button/Button";
import "./CardNoticias.scss";

export const CardNoticias = (props) => {
  const { img, date, category, paragraph, button } = props;

  const handleClick = () => {};

  return (
    <Card>
      <ImageCard {...img} />
      <div className="informationContainer">
        <h5 className="informationContainer__date">{date}</h5>
        <h5 className="informationContainer__category">{category}</h5>
      </div>
      <ParagraphCard paragraph={paragraph} />
      <a href={button?.href} target="_blank">
        <Button title={button?.title} handleClick={handleClick} />
      </a>
    </Card>
  );
};
