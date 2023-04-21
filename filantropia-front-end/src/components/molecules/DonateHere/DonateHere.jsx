import React from 'react';
import { useNavigate} from "react-router-dom"
import { TitleCard } from "../../atoms/TitleCard/TitleCard";
import { Button } from "../../atoms/Button/Button";
import "./DonateHere.scss";

export const DonateHere = (props) => {
    const {title, button} = props;
    const navigate = useNavigate ()
    const handleClick = (href) => {navigate(href)};

  return (
    <section className='donateHere'>
        <TitleCard title={title} />
        <Button {...button} handleClick ={handleClick} />
    </section>
  );
};




