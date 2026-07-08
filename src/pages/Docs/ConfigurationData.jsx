import { Link } from "react-router-dom";
import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";
import CodeBlock from "../../components/CodeBlock";
import { SmallLinkBox } from "../../components/LinkBox";

const TestCases = () => {
  const back = { title: "Simple execution", path: "/docs/start/exec" };
  const forward = { title: "etz commands", path: "/docs/config/commands" };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz with execution file",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"page-link"} to="/docs/config">
            Configuring Test Cases {" > "}
          </Link>
        </span>
        <h1>Configuring test cases</h1>
        <p>
          Let's explore a litte more how to set up some complex test scenarions
          and execution with <code>etz</code>. In this section you'll learn the
          following:
          <ul>
            <li>
              Get to know all available <code>etz</code> commands
            </li>
            <li>Run a load test with execution file</li>
            <li>Use a general config file to run multiple test scenarios</li>
          </ul>
        </p>
        <h3>Create complex load tests with yaml files</h3>
        <p>
          <code>etz</code> has two main configuraitons to run a load test from a{" "}
          <code>.yaml</code> file:{" "}
        </p>
        <div className="boxes">
          <SmallLinkBox
            title="General config"
            path="/docs/config/general"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Execution file"
            path="/docs/config/executions"
            className="small-box-link"
          />
        </div>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const Commands = () => {
  const back = { title: "Setup test cases", path: "/docs/config/" };
  const forward = { title: "Execution file", path: "/docs/config/executions/" };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz with execution file",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"page-link"} to="/docs/config">
            Configuring Test Cases {" > "}
          </Link>
          <Link className={"page-link"} to="/docs/config/commands">
            Commands
          </Link>
        </span>
        <h1>
          Getting familiar with <code>etz</code> commands
        </h1>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const GeneralConfig = () => {
  const back = { title: "etz commands", path: "/docs/config/commands" };
  const forward = { title: "Advanced configuration", path: "/docs/advanced" };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Use built-in go template functions",
      path: "/docs/advanced/gotmpl",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"page-link"} to="/docs/config">
            Configuring Test Cases {" > "}
          </Link>
          <Link className={"page-link"} to="/docs/config/general">
            General Config
          </Link>
        </span>
        <h1>
          Run <code>etz</code> with general config file
        </h1>
        <p>
          General cofiguration file helps setting multiple scenarios and
          executions and defining the type of tests to have: load test,
          performance test, spike or stress test.
        </p>
        <p>
          We will start by opening the editor and create a <code>.yaml</code>{" "}
          file from terminal:
        </p>
        <CodeBlock type="term" code={"vi my_config.yaml"} />
        <p>
          General config file includes two data structures - settings and
          executions.
        </p>
        <h3>General config settings</h3>
        <p>
          You can define settings which will be applied for every execution
          during the test. If you decide to apply another settings for a
          different execution block in the same file, the execution block
          setting section will take precedence.
        </p>
        <CodeBlock
          type="yaml"
          code={`settings:
  config:
    workers: 10                 # number of workers during execution
    rps: 200                    # request per second during execution
    duration: 3s                # execution duration
    output: /tmp/results.json   # results output file
    verbose: true               # debug workers during execution    
`}
        />
        <h3>Create multiple scenarios in general config file</h3>
        <p>
          After defining default settings to all executions, we will add
          execution blocks To the file. Note that this is added as a{" "}
          <code>map[string]*Execution</code> golang map. The map should contain
          a scenario name followed by its execution:
        </p>
        <CodeBlock
          type="yaml"
          code={`scenarios:
  locations:                    # scenario name
    api:
    - url: http://localhost:8080/locations
      method: GET
    - url: http://localhost:8080/locations/2
      method: GET
  posts:                        # scenario name
    file:
    - url: http://localhost:8080/posts
      method: POST
      directory: myfiles/
`}
        />
        <br></br>
        <p>
          General config file requires only scenarios section and for each
          scenario we can add a settings block instead of the general settings:
        </p>
        <CodeBlock
          type="yaml"
          code={`scenarios:
  easy:
    config:
      workers: 10
      rps: 40
      duration: 5s
      output: /tmp/results/easy.json"
    api:
    - url: http://localhost:8080/distance
      method: POST
      data: 
        fromPlace: "My home 123"
        longtitude: -89.123126721
        latitude: 12.23124123123
  medium:
    config:
      workers: 30
      rps: 120
      duration: 5s
      output: /tmp/results/medium.json
    api:      
    - url: http://localhost:8080/distance
      method: POST
      data: 
        fromPlace: "Her house 321"
        longtitude: -119.123126721
        latitude: 56.23124123123
          `}
        />
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const RunWithExecutionFile = () => {
  const back = { title: "etz commands", path: "/docs/config/commands/" };
  const forward = { title: "General config", path: "/docs/config/general/" };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz with execution file",
      path: "/docs/config/executions",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"page-link"} to="/docs/config">
            Configuring Test Cases {" > "}
          </Link>
          <Link className={"page-link"} to="/docs/config/executions">
            General Config
          </Link>
        </span>
        <h1>RunWithExecutionFile</h1>
        <p>Content is in progress</p>
        <GuideLinks
          intrestsLinks={interestLinks}
          backTitle={back.title}
          backLink={back.path}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

export { TestCases, Commands, GeneralConfig, RunWithExecutionFile };
