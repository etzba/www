import React from "react";
import { HeaderItems } from "../utils/headerItem";
import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={require("../assets/etzba.png")} alt="Logo" className="logo" />
      <ul className="header-links">
        {HeaderItems.map((item, index) => (
          <li key={index}>
            <Link
              key={item.id}
              to={item.path}
              className={"header-link"}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
