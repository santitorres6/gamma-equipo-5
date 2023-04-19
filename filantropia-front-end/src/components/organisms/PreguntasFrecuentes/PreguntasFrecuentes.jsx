import React, { useState } from "react";
import { ListCard } from "../../molecules/ListCard/ListCard";
import { CardPreguntasFrecuentes } from "../../molecules/CardPreguntasFrecuentes/CardPreguntasFrecuentes";
import { ModalPreguntasFrecuentes } from "../../molecules/ModalPreguntasFrecuentes/ModalPreguntasFrecuentes";
import "./PreguntasFrecuentes.scss";

export const PreguntasFrecuentes = (props) => {
  const { preguntasFrecuentes } = props;
  const { cards } = preguntasFrecuentes;
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState();

  const handleClick = (href) => {
    let cardClicked = cards.find((card) => card.id === href);
    if (cardClicked) {
      let data = cardClicked.modal;
      setDataModal(data);
    }
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ListCard name={preguntasFrecuentes.title}>
        {cards.map((card) => {
          return (
            <CardPreguntasFrecuentes
              key={card.id}
              {...card}
              handleClick={handleClick}
            />
          );
        })}
      </ListCard>
      {!!dataModal && (
        <ModalPreguntasFrecuentes
          isOpen={isOpen}
          onClose={onClose}
          dataModal={dataModal}
        />
      )}
    </>
  );
};
