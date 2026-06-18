import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData, getIcon } from "./SidebarData";
import { FaList, FaBeer, FaHome, FaSnowboarding, FaWrench, FaWhmcs, FaTruckMonster } from "react-icons/fa";
import "../styles/sidebar.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState("");

  return (
    <div
      className={`bg-white text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-md border-[rgba(0,0,0,0.08)]
        ${isOpen ? "w-64" : "w-16"}`}
    >
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-[#F3F5F7] p-2 rounded-lg"
        >
          {isOpen ? (
            <FaList size={20} strokeWidth={1.5} />
          ) : (
            <></>
          )}
        </button>
      </div>

      <nav className="sidebar">
        <ul>
          {SidebarData.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} onClick={() => setIsOpen(!isOpen)}>
                  <div>
                    <div
                      className="px-4 py-3 hover:bg-[#F3F5F7] cursor-pointer flex items-center justify-between"
                      onClick={() =>
                        item.hasDropdown &&
                        isOpen &&
                        setActiveDropdown(
                          activeDropdown === item.title ? "" : item.title,
                        )
                      }
                    ></div>
                    <span
                      className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300
                  ${isOpen ? "w-32 opacity-100" : "w-0 opacity-0"}`}
                    >
                      {item.title}
                    </span>
                    {item.hasDropdown && isOpen && (
                      <item.icon 
                        color='#000'
                        size={16}
                        strokeWidth={1.5}
                        className={`transition-transform duration-200 
                    ${activeDropdown === item.title ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>
                </Link>
                <ul>
                  {item?.subPaths?.map((subItem, subIndex) => (
                    <li key={subIndex} className="subpath">
                      <Link to={subItem.path}>
                        <span>{subItem.title}</span>
                      </Link>
                      <ul>
                        {subItem?.subPaths?.map(
                          (subChildItem, subChildIndex) => (
                            <li key={subChildIndex} className="subpath">
                              <Link to={subChildItem.path}>
                                <span>{subChildItem.title}</span>
                              </Link>
                            </li>
                          ),
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
