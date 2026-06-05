import React from 'react';
import '../styles/layout.css';

function AboutPage({ collapsed, setCollapsed }) {
  setCollapsed(!collapsed)
  return (
    <div className='page'>
      <h1>AboutPage</h1>
      <p>Content is in progress</p>
    </div>
  );
}

export default AboutPage;