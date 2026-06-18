import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = ({ items }) => {
  return (
    <>
      <header className="header">
        <img
          src={require("src/assets/etzba.png")}
          alt="Logo"
          className="logo"
        />
        <ul className="header-links">
          {items.map((item, index) => (
            <li key={index}>
              <Link key={item.id} to={item.path} className={"header-link"}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
};

export default Header;
