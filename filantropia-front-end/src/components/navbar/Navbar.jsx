import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = ({ items }) => {
  return (
    <ul className="Navbar">
      {items.map((elemento) => {
        return (
          <li key={elemento.id}>
            <Link to={elemento.href}>{elemento.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
