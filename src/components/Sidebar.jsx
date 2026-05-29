import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RightArrow, DownArrow } from "./Arrows"
import { NavItems } from "../utils/navItems";
import { Title } from "./Title";
import "../styles/sidebar.css";

const Sidebar = ({ activeId, onNavigate, collapsed, onToggleCollapse }) => {
  const [openMenus, setOpenMenus] = useState({});
  const toggleMenu = (id) =>
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <nav className="sidebar">
      <ul>
        {NavItems.map((item, index) =>
          item.children ? (
            <li key={index}>
              <Link
                className={`nav-item leaf ${openMenus[item.id] ? "open" : ""} ${item.children.some((c) => c.id === activeId) ? "active-parent" : ""}`}
                onClick={() => toggleMenu(item.id)}
                to={item.path}
                key={item.id}
              >
                <Title text={item.title} />
                {openMenus[item.id] && !collapsed ? (
                  <RightArrow />
                ) : (
                  <DownArrow />
                )}
              </Link>
              {openMenus[item.id] && !collapsed && (
                <div className="sub-menu">
                  <ul>
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link
                          to={child.path}
                          key={child.id}
                          className={`nav-item child ${activeId === child.id ? "active" : ""}`}
                          onClick={() => onNavigate(child.id)}
                        >
                          <Title text={child.title} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ) : (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-item leaf ${activeId === item.id ? "active-parent" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              {!collapsed && (
                <Title text={item.title} />
              )}
            </Link>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
