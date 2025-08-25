import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/layout.css';

function Install() {
  return (
    <div className='home'>
      <h1>Install</h1>
      <p><code>etz</code> installation is available on both Linux and OSX</p>
      <h3>Quick links</h3>
      <Link to="/install/linux">
        <p>Install <code>etz</code> on Linux</p>
      </Link>
      <Link to="/install/osx">
          <p>Install <code>etz</code> on OSX</p>
      </Link>
    </div>
  );
}

export default Install;