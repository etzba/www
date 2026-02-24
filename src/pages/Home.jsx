import React from "react";
import "../styles/layout.css";
import "../styles/pages.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to etzba</h1>
      <h3>Load and performance testing tool</h3>
      <p>
        Hi There! Let me introduce a software that could be used to measure the
        performance of your api service. The word etzba in Hebrew, used as a
        measurement unit in biblical times and also means a pointing finger.
        This tool will measure the duration of http requests to your service and
        point the finger on potential issues and bottlenecks.
      </p>
      <p>
        The tool is compiled and shortly named <code>etz</code> for faster
        executions in your command line. This cli tool can run in your terminal,
        shell scripts or in CI pipelines.
      </p>
      <p>
        With additional <code>.yaml</code> files, you can create a complex test
        scenarios and automate your api \ postgres testing while defining the
        load on the service by requests per second, test duration and many more
        options.
      </p>
      <p>
        <b>Key Features</b>
      </p>
      <ul>
        <li>Terminal-native: Run and analyze tests with simple CLI commands</li>
        <li>
          Scriptable & automatable: Perfect for CI/CD pipelines and custom
          workflows
        </li>
        <li>
          Real-time metrics: Get instant feedback on throughput, latency, and
          errors
        </li>
        <li>
          YAML configuration: Define your test cases with a yaml file and extend
          it with functions
        </li>
      </ul>
    </div>
  );
}

export default Home;
