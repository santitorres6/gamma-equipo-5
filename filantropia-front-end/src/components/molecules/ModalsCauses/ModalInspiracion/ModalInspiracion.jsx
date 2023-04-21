import React, { useContext } from "react";
import { DataContext } from "../../../../utils/context/DataContext";
import { ImageCard } from "../../../atoms/ImageCard/ImageCard";
import { TitleCard } from "../../../atoms/TitleCard/TitleCard";
import { TitleSection } from "../../../atoms/TitleSection/TitleSection";
import { ParagraphCard } from "../../../atoms/ParagraphCard/ParagraphCard";
import { ListCard } from "../../ListCard/ListCard";
import { Card } from "../../../atoms/Card/Card";
import { Button } from "../../../atoms/Button/Button";
import "./ModalInspiracion.scss";

export const ModalInspiracion = () => {
  const { HOME_PAGE } = useContext(DataContext);
  const { ourCauses } = HOME_PAGE;
  const { inspiracionInnovacion } = ourCauses.modals;
  const { img, title, body, statistics } = inspiracionInnovacion;
  return (
    <article className="modalInspiracion">
      <ImageCard {...img} />
      <TitleCard title={title} />
      <SectionPrimary {...body} />
      <Statistics {...statistics} />
    </article>
  );
};

const SectionPrimary = (props) => {
  const { title, paragraphs, cards, subtitle, button } = props;
  const handleClick = () => {};
  return (
    <section className="modalInspiracion__section-primary">
      <TitleSection title={title} />
      {paragraphs.map((paragraph, index) => (
        <ParagraphCard key={index} paragraph={paragraph} />
      ))}
      <CardsInspiaracion cards={cards} title={title} />
      <h4 className="modalInspiracion__subtitle">{subtitle}</h4>
      <a href={button.href} target="_blank">
        <Button {...button} handleClick={handleClick} />
      </a>
    </section>
  );
};

const CardsInspiaracion = (props) => {
  const { cards, title } = props;
  const handleClick = () => {};
  return (
    <ListCard name={title}>
      {cards.map((card) => {
        const { id, title, paragraph, button } = card;
        return (
          <Card key={id}>
            <TitleCard title={title} />
            <ParagraphCard paragraph={paragraph} />
            <a href={button.href} target="_blank">
              <Button {...button} handleClick={handleClick} />
            </a>
          </Card>
        );
      })}
    </ListCard>
  );
};

const Statistics = (props) => {
  const { img, subtitle, button } = props;
  const handleClick = () => {};
  return (
    <section className="modalInspiracion__statistics">
      <img
        className="modalInspiracion__statistics-img"
        src={img.src}
        title={img.title}
        alt={img.title}
      />
      <h4 className="modalInspiracion__statistics-subtitle">{subtitle}</h4>
      <a href={button.href} target="_blank">
        <Button {...button} handleClick={handleClick} />
      </a>
    </section>
  );
};
