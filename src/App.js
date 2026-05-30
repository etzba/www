import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavItems } from "./utils/navItems";
import "./App.css";

function App() {
  const [activeId, setActiveId] = useState("home");
  const [collapsed, setCollapsed] = useState(false);

  const routes = NavItems.flatMap(({ children, ...parent }) => [
    { ...parent },
    ...(children?.map((child) => ({ ...child, children: undefined })) ?? []),
  ]);
  return (
    <>
      <Router>
        <div className="layout">
          <Header />
          <div className="content">
            <Sidebar
              activeId={activeId}
              onNavigate={setActiveId}
              collapsed={collapsed}
              onToggleCollapse={() => setCollapsed((p) => !p)}
            />
            <Routes>
              {routes.map((item) => (
                <Route path={item.path} element={item.content} />
              ))}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
