import React, { useContext } from "react";
import { DataContext } from "../../../../utils/context/DataContext";
import { ImageCard } from "../../../atoms/ImageCard/ImageCard";
import { TitleCard } from "../../../atoms/TitleCard/TitleCard";
import { TitleSection } from "../../../atoms/TitleSection/TitleSection";
import { ParagraphCard } from "../../../atoms/ParagraphCard/ParagraphCard";
import { ListCard } from "../../../molecules/ListCard/ListCard";
import { Card } from "../../../atoms/Card/Card";
import "./ModalTransformacionHumanista.scss";

export const ModalTransformacionHumanista = () => {
  const { HOME_PAGE } = useContext(DataContext);
  const { ourCauses } = HOME_PAGE;
  const { transformacionHumanista } = ourCauses.modals;
  const { img, title, body, fondos } = transformacionHumanista;

  return (
    <article className="modalTransformacion">
      <ImageCard {...img} />
      <TitleCard title={title} />
      <SectionPrimary {...body} />
      <SectionSecondary {...fondos} titleModal={title} />
    </article>
  );
};

const SectionPrimary = (props) => {
  const { title, paragraphs } = props;
  return (
    <section className="modalTransformacion__section-primary">
      <TitleSection title={title} />
      {paragraphs.map((paragraph, id) => (
        <ParagraphCard key={id} paragraph={paragraph} />
      ))}
    </section>
  );
};

const SectionSecondary = (props) => {
  const { title, cards, paragraphs, titleModal } = props;
  return (
    <section className="modalTransformacion__section-secondary">
      <TitleSection title={title} />
      <ListCard name={titleModal}>
        {cards.map((card) => {
          const { id, img, title, paragraph } = card;
          return (
            <Card key={id}>
              <ImageCard {...img} />
              <div className="wrapper">
                <TitleCard title={title} />
                <ParagraphCard paragraph={paragraph} />
              </div>
            </Card>
          );
        })}
      </ListCard>
      {paragraphs.map((paragraph, id) => (
        <ParagraphCard key={id} paragraph={paragraph} />
      ))}
    </section>
  );
};
