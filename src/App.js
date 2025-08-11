import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Install from './pages/Install';
import Run from './pages/Run';
import NotFound from './pages/NotFound';
import Commands from './pages/Commands';

function App() {
  return (
    <>
      <Router>
        <div className="layout">
          <Header />
        <div className="content">
          <Sidebar />
            <Routes >
              <Route path='/' exact element={<Home />} />
              <Route path='/install' element={<Install />} />
              <Route path='/run' element={<Run />} />
              <Route path='/commands' element={<Commands />} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;