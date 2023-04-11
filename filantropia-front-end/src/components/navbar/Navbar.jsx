import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HOME } from "../../routes/paths";
import "./Navbar.scss";

export const Navbar = ({ items }) => {
  const location = useLocation();
  const ITEMS_HOME = items.slice(1);
  const ITEMS_ANOTHER_PAGE = [items[0], items[6], items[7]];

  return (
    <nav className="navbar">
      <ul
        className={`navbar__list ${
          location.pathname !== HOME ? "navbar__list-noHome" : ""
        }`}
      >
        <Items
          items={location.pathname !== HOME ? ITEMS_ANOTHER_PAGE : ITEMS_HOME}
        />
      </ul>
    </nav>
  );
};

const Items = ({ items }) => {
  return items.map(({ id, title, href }) => {
    if (
      title === "Testimonios" ||
      title === "Donaciones" ||
      title === "Inicio"
    ) {
      return (
        <li key={id} className="navbarItem">
          <Link className="navbarItem__link" to={href}>
            {title}
          </Link>
        </li>
      );
    }
    return (
      <li className="navbarItem" key={id}>
        <a className="navbarItem__link" href={href}>
          {title}
        </a>
      </li>
    );
  });
};
