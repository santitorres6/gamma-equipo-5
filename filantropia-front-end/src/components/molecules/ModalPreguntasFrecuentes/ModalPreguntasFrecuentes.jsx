import React from "react";
import "./ModalPreguntasFrecuentes.scss";
import { ModalCard } from "../../atoms/ModalCard/ModalCard";
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { ParagraphCard } from "../../atoms/ParagraphCard/ParagraphCard";

export const ModalPreguntasFrecuentes = (props) => {
  const { isOpen, onClose, dataModal } = props;
  const { title, paragraphs } = dataModal;
  return (
    <ModalCard isOpen={isOpen} onClose={onClose}>
      <TitleCard title={title} />
      {paragraphs?.map((paragraph, index) => {
        return <ParagraphCard key={index} paragraph={paragraph} />;
      })}
    </ModalCard>
  );
};
