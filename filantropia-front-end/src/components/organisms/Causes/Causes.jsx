import React, { useState } from "react";
import { TitleSection } from "../../atoms/TitleSection/TitleSection";
import { ListCard } from "../../molecules/ListCard/ListCard";
import { CardCauses } from "../../molecules/CardCauses/CardCauses";
import {DonateHere} from "../../molecules/DonateHere/DonateHere";
import "./Causes.scss";
import { useModalCauses } from "../../../utils/hooks/useModalCauses";
import { ModalCard } from "../../atoms/ModalCard/ModalCard";


export const Causes = (props) => {
  const { causes } = props;
  const { cards,donateHere } = causes;
  const { modalCause, handleModalCause } = useModalCauses();
  const [isOpen, setIsOpen] = useState(false);

  const titleWithFormat = causes.title.split(" ").join("");

  const handleClick = (href) => {
    handleModalCause(href);
    if (modalCause) {
      setIsOpen(!isOpen);
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="ourCauses" id="causas">
      <TitleSection title={causes.title} />
      <ListCard name={causes.title}>
        {cards.map((card) => {
          return (
            <CardCauses key={card.id} {...card} handleClick={handleClick} />
          );
        })}
      </ListCard>
      {!!modalCause && (
        <ModalCard
          title={titleWithFormat}
          isOpen={isOpen}
          onClose={onClose}
          width="60%"
        >
          {modalCause}
        </ModalCard>
      )}
      <DonateHere {...donateHere}/>
    </section>
  );
};
