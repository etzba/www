import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../styles/layout.css';

function Layout({ pageName }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main">
          {pageName}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;