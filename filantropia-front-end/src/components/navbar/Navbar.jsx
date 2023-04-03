import React from "react";
import "./Navbar.scss";

export const Navbar = ({ items }) => {
  return (
    <ul className="Navbar">
      {items.map((elemento) => {
        return (
          <li key={elemento.id}>
            <a href="#">{elemento.name}</a>
          </li>
        );
      })}
    </ul>
  );
};
