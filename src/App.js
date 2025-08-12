import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routes'

function App() {
  return (
    <>
      <Router>
        <div className="layout">
          <Header />
        <div className="content">
          <Sidebar />
            <Routes >
              {routes.map((item) =>
                <Route path={item.path} element={item.element}/>
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