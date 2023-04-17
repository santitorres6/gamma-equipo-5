import React from 'react';
import { TitleSection } from '../../atoms/TitleSection/TitleSection';
import {ListCard} from "../../molecules/ListCard/ListCard";
import {CardCauses} from "../../molecules/CardCauses/CardCauses"
import "./Causes.scss";


    export const Causes = (props) => {
    const { causes } = props;
    const { cards } = causes; 
    return  (
        <section className='ourCauses'>
            <TitleSection title = {causes.title}/>
            <ListCard name = {causes.title}>
        {cards.map((card) => {
        return <CardCauses key={card.id} {...card} />
    })}</ListCard>;
        </section>
    )
};


