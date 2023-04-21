import React, { useContext } from "react";
import { DataContext } from "../../../../utils/context/DataContext";
import { ImageCard } from "../../../atoms/ImageCard/ImageCard";
import { TitleCard } from "../../../atoms/TitleCard/TitleCard";
import { TitleSection } from "../../../atoms/TitleSection/TitleSection";
import { ParagraphCard } from "../../../atoms/ParagraphCard/ParagraphCard";
import "./ModalCienciaTecnologia.scss";

export const ModalCienciaTecnologia = () => {
  const { HOME_PAGE } = useContext(DataContext);
  const { ourCauses } = HOME_PAGE;
  const { cienciaTecnologia } = ourCauses.modals;
  const { img, title, body } = cienciaTecnologia;

  return (
    <article className="modalCienciaTecnologia">
      <ImageCard {...img} />
      <TitleCard title={title} />
      <SectionPrimary {...body} />
    </article>
  );
};

const SectionPrimary = (props) => {
  const { title, paragraphs } = props;
  return (
    <section className="modalCienciaTecnologia__section-primary">
      <TitleSection title={title} />
      {paragraphs.map((paragraph, index) => (
        <ParagraphCard key={index} paragraph={paragraph} />
      ))}
    </section>
  );
};
