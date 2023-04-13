import React, { useContext } from "react";
import { DataContext } from "../../../utils/context/DataContext";
import { Link } from "react-router-dom";
import { Navbar } from "../../atoms/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

export const Header = () => {
  const { homePage } = useContext(DataContext);
  const { header } = homePage;
  const { logo, navbar } = header;
  return (
    <header className="header">
      <Logo {...logo} />
      <Navbar items={navbar} />
      <HamburgerMenu />
    </header>
  );
};

const Logo = (props) => {
  const { title, img, href } = props;
  return (
    <Link to={href} className="header__Logo">
      <img className="header__Logo-img" src={img} alt={title} title={title} />
    </Link>
  );
};

const HamburgerMenu = (props) => {
  return (
    <div className="header__hamburgerMenu">
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};
