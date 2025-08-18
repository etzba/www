import React from 'react';
import '../styles/layout.css';
import '../styles/pages.css';

function Home() {
  return (
    <div className='home'>
      <h1>Welcome to etz</h1>
      <h3>Load and performance testing tool</h3>
      <p>Meet your new favorite performance testing companion. etz CLI is a powerful tool for load tests, stress tests and benchmarking written in go</p>
      <p><b>Key Features</b>
        <ul>
            <li>Terminal-native: Run and analyze tests with simple CLI commands</li>
            <li>Scriptable & automatable: Perfect for CI/CD pipelines and custom workflows</li>
            <li>Real-time metrics: Get instant feedback on throughput, latency, and errors</li>
            <li>YAML configuration: Define your test cases with a yaml file and extend it with functions</li>
        </ul>
      </p>
    </div>
  );
}

export default Home;