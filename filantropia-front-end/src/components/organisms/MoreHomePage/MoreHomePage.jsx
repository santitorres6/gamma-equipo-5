import React from "react";
import { TitleSection } from "../../atoms/TitleSection/TitleSection";
import { Accordion } from "../../molecules/Accordion/Accordion";
import { InformesDeGestion } from "../InformesDeGestion/InformesDeGestion";
import { Noticias } from "../Noticias/Noticias";
import "./MoreHomePage.scss";
import { PreguntasFrecuentes } from "../PreguntasFrecuentes/PreguntasFrecuentes";
export const MoreHomePage = (props) => {
  const { title, accordion } = props;
  const { informesDeGestion, noticias, preguntasFrecuentes, contact } =
    accordion;
  return (
    <section className="moreSection">
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
      </Accordion>

      <div style={{ width: "30%", margin: "auto" }}></div>
    </section>
  );
};
