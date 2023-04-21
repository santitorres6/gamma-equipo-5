import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../../utils/context/DataContext";
import { ImageCard } from "../../../atoms/ImageCard/ImageCard";
import { TitleCard } from "../../../atoms/TitleCard/TitleCard";
import { TitleSection } from "../../../atoms/TitleSection/TitleSection";
import { ParagraphCard } from "../../../atoms/ParagraphCard/ParagraphCard";
import { Card } from "../../../atoms/Card/Card";
import { Button } from "../../../atoms/Button/Button";
import "./ModalEquidadSocial.scss";

export const ModalEquidadSocial = () => {
  const navigate = useNavigate();
  const { HOME_PAGE } = useContext(DataContext);
  const { ourCauses } = HOME_PAGE;
  const { equidadSocial } = ourCauses.modals;
  const { img, title, body, fondoBecas, button } = equidadSocial;

  const handleClick = (href) => {
    navigate(href);
  };

  return (
    <article className="modalEquidadSocial">
      <ImageCard {...img} />
      <TitleCard title={title} />
      <SectionStatistics {...body} />
      <SectionFondoBecas {...fondoBecas} />
      <Button {...button} handleClick={handleClick} />
    </article>
  );
};

const SectionStatistics = (props) => {
  const { title, paragraphs, spans } = props;
  return (
    <section className="modalEquidadSocial__statistics">
      <TitleSection title={title} />
      {paragraphs.map((paragraph, index) => (
        <ParagraphCard key={index} paragraph={paragraph} />
      ))}
      {spans.map((span, index) => {
        return (
          <span key={index} className="modalEquidadSocial__statistics-span">
            {span}
          </span>
        );
      })}
    </section>
  );
};

const SectionFondoBecas = (props) => {
  const { title, subtitle, card, paragraph } = props;
  return (
    <section className="modalEquidadSocial__fondoBecas">
      <TitleSection title={title} />
      <Card>
        <ImageCard {...card.img} />
        <ParagraphCard paragraph={card.paragraph} />
      </Card>
      <ParagraphCard paragraph={paragraph} />
      <h4 className="modalEquidadSocial__subtitle">{subtitle}</h4>
    </section>
  );
};
