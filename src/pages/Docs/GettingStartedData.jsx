import { Link } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import "../../styles/layout.css";

const GettingStarted = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>Getting started</h1>
        <p>
          So... now after you installed <code>etz</code> and it can run in your
          terminal, let's run few commands for a short warm-up.
        </p>
        <p>
          Let's start by checking <code>etz</code> version and run:
        </p>
        <CodeBlock type="term" code={"etz version"} />
        <p>And before we are getting to the juicy part, let's ask for help:</p>
        <CodeBlock type="term" code={"etz --help"} />
        <p>
          It's ok if <code>--help</code> was not that helpful at the moment.
          Soon you'll understand better what to do with the commands from the
          help output. Let's go further to next sections and simply{" "}
          <Link className={"page-link"} to="/docs/start/run">
            run it from terminal
          </Link>
        </p>
        <p>
          And later when you'll start to feel more comfortable, let's add some
          configs and run more complex tasks
          <Link className={"page-link"} to="/docs/start/exec">
            {" "}
            with additional execution file
          </Link>
        </p>
      </section>
    </div>
  );
};

const RunEtz = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>
          Run <code>etz</code> from terminal
        </h1>
        <p>
          <code>etz</code> uses several sub commands: <code>api</code>,{" "}
          <code>pg</code> and <code>file</code> each of these sub commands, uses
          different configuration to run different tests. So for example,{" "}
          <code>api</code> will use http protocol under the scene to run a load
          test on a remote server url:
        </p>
        <CodeBlock
          type="term"
          code={"etz api --url=https://etzba.com --method=GET"}
        />
        <p>
          Here is how to add payload to your request, run in duration of 3
          seconds, with 100 request per second using 50 workers (routines):
        </p>
        <CodeBlock
          type="term"
          code={`etz api --url=https://etzba.com \\ 
              --method=POST -d 3s -r 100 -w 50 \\
              -j '{"name":"Etz Ba","address":"Etzba etz 32"}'`}
        />
        <p>
          <code>file</code> sub command will help you upload a file and measure
          how long did it take:
        </p>
        <CodeBlock
          type="term"
          code={`etz file --url=https://etzba.com \\ 
            --method=POST \\ 
            --path=relative/path/to/files/"
          `}
        />
        <p>
          Note that you just need to give the path with the files to upload and
          <code>etz</code> will pick random files to upload to your service.
        </p>
        <p>
          Assuming you'd like to store the results in a json format, use{" "}
          <code>--output=directory/filename.json</code> arg and the file will be
          save locally on your machine:
        </p>
        <CodeBlock
          type="term"
          code={
            "etz api --url=https://etzba.com --method=GET --output=files/result.json"
          }
        />
        <p>
          In the next section,{" "}
          <Link className={"page-link"} to="/docs/start/exec">
            run <code>etz</code> with additional execution file
          </Link>
          , we will run more complex stuff with general configuration or
          execution file
        </p>
      </section>
    </div>
  );
};

const SimpleExec = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>
          Simple <code>etz</code> run with an exectuion file
        </h1>
        <p>
          If running <code>etz</code> with one command from your terminal is not
          enough, we can create an execution file to list all of our tasks in
          one configuration. So let's open an editom (vi\vim whatever you
          prefer...) and create an execution file:
        </p>
        <CodeBlock
          type="yaml"
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
        <CodeBlock
          type="term"
          code={`etz api --exec=path/to/executions.yaml`}
        />
        <p>
          When you feel like a pro, use our{" "}
          <Link className={"page-link"} to="/config/executions">
            api advanced configuration
          </Link>{" "}
          documentation to create more load test scenarios. In the following
          sections we will discover more ways to create your
          <code>.yaml</code> file for test configurations.
        </p>
      </section>
    </div>
  );
};

export { GettingStarted, RunEtz, SimpleExec };
