import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Siderbar";
import "../../styles/pages.css";

const DocsPage = ({ items }) => {
  const [activeId, setActiveId] = useState("docs");
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="page" style={{ display: "flex", height: "100%" }}>
        <Sidebar items={items} activeId={activeId} collapsed={collapsed} onNavigate={setActiveId} />
        <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DocsPage;
