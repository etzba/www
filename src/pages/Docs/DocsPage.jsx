import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import "../../styles/docs.css";

const DocsPage = ({ items, isMobile }) => {
  const [activeId, setActiveId] = useState("docs");
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="docs" style={{ display: "flex", height: "100%" }}>
        <Sidebar
          items={items}
          activeId={activeId}
          collapsed={collapsed}
          onNavigate={setActiveId}
          isMobile={isMobile}
        />
        <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DocsPage;
