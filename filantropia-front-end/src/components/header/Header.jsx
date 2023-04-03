import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Header.scss";

const nav = [
  {
    id: "1",
    name: "¿Quienes somos?",
    href: "#",
  },
  {
    id: "2",
    name: "Causas",
    href: "#",
  },
  {
    id: "3",
    name: "Iniciativas",
    href: "#",
  },
  {
    id: "4",
    name: "¿Cómo donar?",
    href: "#",
  },
  {
    id: "5",
    name: "Testimonios",
    href: "#",
  },
  {
    id: "6",
    name: "Donaciones",
    href: "#",
  },
  {
    id: "7",
    name: "Más",
    href: "#",
  },
  ,
];

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header__imgContainer">
        <img
          className="Header__img"
          src="/src/assets/images/Logo_Filantropia.png"
          alt="Logo_Filantropia"
          title="Logo_Filantropia"
        />
      </div>
      <Navbar items={nav}/>
    </header>
  );
};
