import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import "../styles/layout.css";

const SimpleExec = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="section">
          <h2>
            Simple <code>etz</code> run with an exectuion file
          </h2>
          <p>
            If running <code>etz</code> with one command from your terminal is
            not enough, we can create an execution file to list all of our tasks
            in one configuration. So let's open an editom (vi\vim whatever you
            prefer...) and create an execution file:
          </p>
          <CodeBlock
            code={`api:
- url: https://etzba.com
  method: POST
  payload:
    name: "etz"
    address: "etzba etz street 123"`}
          />
          <p>
            The <code>url</code>, <code>method</code> and <code>payload</code>{" "}
            will help set the http request to whatever required. After you saved
            the file, simply use again your terminal and run:
          </p>
          <CodeBlock code={`etz api --exec=path/to/executions.yaml`} />
          <p>
            When you feel like a pro, use our{" "}
            <Link to="/config/executions">api advanced configuration</Link>{" "}
            documentation to create more load test scenarios. In the following
            sections we will discover more ways to create your
            <code>.yaml</code> file for test configurations.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SimpleExec;
