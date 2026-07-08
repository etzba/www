import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import { DownArrow, RightArrow } from "./Arrows";
import "../styles/sidebar.css";

const Sidebar = ({
  items,
  activeId,
  onNavigate,
  collapsed,
  onToggleCollapse,
  isMobile,
}) => {
  const [openMenus, setOpenMenus] = useState({});
  const toggleMenu = (id) =>
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  return isMobile ? (
    <></>
  ) : (
    <>
      <nav className="sidebar">
        <ul>
          {items.map((item, index) =>
            item.children ? (
              <li key={index}>
                <Link
                  className={`nav-item leaf ${openMenus[item.id] ? "open" : ""} ${item.children.some((c) => c.id === activeId) ? "active-parent" : ""}`}
                  onClick={() => toggleMenu(item.path)}
                  to={item.path}
                  key={item.id}
                >
                  <Title text={item.title} />
                  {openMenus[item.id] && !collapsed ? (
                    <DownArrow />
                  ) : (
                    <RightArrow />
                  )}
                </Link>
                {openMenus[item.id] && !collapsed && (
                  <div className="sub-menu">
                    <ul>
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            to={item.path + "/" + child.path}
                            key={child.id}
                            className={`nav-item child ${activeId === child.id ? "active" : ""}`}
                            onClick={() =>
                              onNavigate(item.path + "/" + child.path)
                            }
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
                onClick={() => onNavigate(item.path)}
              >
                {!collapsed && <Title text={item.title} />}
              </Link>
            ),
          )}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
