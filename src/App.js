import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { NavItems } from "./utils/navItems";
import "./App.css";
import AboutPage from "./pages/AboutPage";

function App() {
  const [activeId, setActiveId] = useState("home");
  const [collapsed, setCollapsed] = useState(false);

  const routes = NavItems.flatMap(({ children, ...parent }) => [
    { ...parent },
    ...(children?.map((child) => ({ ...child, children: undefined })) ?? []),
  ]);
  return (
    <>
      <div className="layout">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/about" element={<AboutPage collapsed={collapsed} setCollapsed={() => setCollapsed((p) => !p)} />}></Route>
          </Routes>
          {collapsed ? (
            <></>
          ) : (
            <Sidebar
              activeId={activeId}
              onNavigate={setActiveId}
              onToggleCollapse={() => setCollapsed((p) => !p)}
            />
          )}
          <Routes>
            {routes.map((item) => (
              <Route path={item.path} element={item.content} />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
