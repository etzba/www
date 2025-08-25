import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/layout.css';

const GettingStarted = () => {
  return (
    <div className='home'>
      <h1>Getting started</h1>
      <p>This guide will walk you through how to run <code>etz</code> locally after you've already installed <code>etz</code></p>
      <p>To simple run <code>etz</code> from terminal without any additional setting</p>
      <Link to="/start/run">
        <p>Run <code>etz</code> from terminal</p>
      </Link>
      <p>To start using additional config files and complex testing</p>
      <Link to="/start/exec">
        <p>Run <code>etz</code> with additional execution file</p>
      </Link>
    </div>
  );
}

export default GettingStarted;