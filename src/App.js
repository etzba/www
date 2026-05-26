import React, { useState } from "react";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routes'
import './App.css';

function App() {
  const [activeId, setActiveId] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Router>
        <div className="layout">
          <Header />
          <div className="content">
            <Sidebar activeId={activeId}
              onNavigate={setActiveId}
              collapsed={collapsed}
              onToggleCollapse={() => setCollapsed((p) => !p)} />
            <Routes >
              {routes.map((item) =>
                <Route path={item.path} element={item.element} />
              )};
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;