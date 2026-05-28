import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import "../styles/layout.css";

const GettingStarted = () => {
  return (
    <div className='page'>
      <h1>Getting started</h1>
      <p>
        So... now after you installed <code>etz</code> and it can run in your
        terminal, let's run few commands for a short warm-up.
      </p>
      <p>
        Let's start by checking <code>etz</code> version and run:
      </p>
      <CodeBlock code={"etz version"} />
      <p>And before we are getting to the juicy part, let's ask for help:</p>
      <CodeBlock code={"etz --help"} />
      <p>
        It's ok if <code>--help</code> was not that helpful at the moment. Soon
        you'll understand better what to do with the commands from the help
        output. Let's go further to next sections and simply{" "}
        <Link to="/start/run">run it from terminal</Link>
      </p>
      <p>
        And later when you'll start to feel more comfortable, let's add some
        configs and run more complex tasks
        <Link to="/start/exec"> with additional execution file</Link>
      </p>
    </div>
  );
};

export default GettingStarted;
