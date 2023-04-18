import React, { useContext } from "react";
import { DataContext } from "../../../utils/context/DataContext";
import { TitleSection } from "../../atoms/TitleSection/TitleSection";
import { IconsFooter } from "../../atoms/IconsFooter/IconsFooter";
import "./Footer.scss";

export const Footer = () => {
  const { FOOTER } = useContext(DataContext);
  const { title, icons } = FOOTER;
  return (
    <section className="footer">
      <TitleSection title={title} />
      <IconsFooter icons={icons} />
    </section>
  );
};
