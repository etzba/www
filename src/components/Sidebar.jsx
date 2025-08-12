import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/sidebar.css'

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        {SidebarData.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>
              {item?.subPaths?.map((subItem, subIndex) =>
                <ul>
                  <li key={subIndex} className="subpath">
                    <Link to={subItem.path}>
                      <span>{subItem.title}</span>
                    </Link>
                  </li>
                  {subItem?.subPaths?.map((subChildItem, subChildIndex) =>
                    <ul>
                      <li key={subChildIndex} className="subpath">
                        <Link to={subChildItem.path}>
                          <span>{subChildItem.title}</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;