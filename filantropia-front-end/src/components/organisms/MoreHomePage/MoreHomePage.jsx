import React from "react";
import { TitleSection } from "../../atoms/TitleSection/TitleSection";
import { Accordion } from "../../molecules/Accordion/Accordion";
import { InformesDeGestion } from "../InformesDeGestion/InformesDeGestion";
import { Noticias } from "../Noticias/Noticias";
import { PreguntasFrecuentes } from "../PreguntasFrecuentes/PreguntasFrecuentes";
import { Contacto } from "../Contacto/Contacto";
import "./MoreHomePage.scss";

export const MoreHomePage = (props) => {
  const { title, accordion } = props;
  const { informesDeGestion, noticias, preguntasFrecuentes, contacto } =
    accordion;
  return (
    <section className="moreSection" id="mas">
      <TitleSection title={title} />
      <Accordion>
        <InformesDeGestion
          title={informesDeGestion.title}
          informesDeGestion={informesDeGestion}
        />
        <Noticias title={noticias.title} noticias={noticias} />
        <PreguntasFrecuentes
          title={preguntasFrecuentes.title}
          preguntasFrecuentes={preguntasFrecuentes}
        />
        <Contacto title={contacto.title} contacto={contacto} />
      </Accordion>
    </section>
  );
};
