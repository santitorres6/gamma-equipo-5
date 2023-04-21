import React from 'react';
import { TitleSection } from '../../atoms/TitleSection/TitleSection';
import {CardHowToDonate} from "../../atoms/CardHowToDonate/CardHowToDonate";
import { ListCard } from '../../molecules/ListCard/ListCard';
import "./HowToDonate.scss";

export const HowToDonate = (props) => {
  const {howToDonate} = props;
  const { cards } = howToDonate;
  return (
    <section className='howToDonate' id="como_donar">
        <TitleSection title =  {howToDonate.title} />
        <ListCard name = {howToDonate.title} >
        {cards. map((card) => {
            return <CardHowToDonate key = {card.id} {...card}/>
        } )}</ListCard>
    </section>);
};


