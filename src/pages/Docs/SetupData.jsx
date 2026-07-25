import { Link } from "react-router-dom";
import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";
import CodeBlock from "../../components/CodeBlock";
import { SmallLinkBox } from "../../components/LinkBox";

const Setup = () => {
  const back = {
    title: "Execute load test with yaml",
    path: "/docs/start/yaml",
  };
  const forward = { title: "Create api load test", path: "/docs/setup/api" };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Create API test cases",
      path: "/docs/setup/api",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"page-link"} to="/docs/config">
            Setup Test Cases
          </Link>
        </span>
        <h1>Setup test cases</h1>
        <p>
          Running load tests only using the command line interface is the most
          simple way to use <code>etz</code>. Sometimes simplicity is sufficient
          enough for our needs, but what if we would like to extend our load
          tests to have more complexity? We touched briefly execution with yaml
          files. In this chapter we will concentrate in execution of a much more
          complex testing scenarios with multiple requests and configurations.
          But instead of running it simply from terminal we can extend and
          create load test cases by writing a yaml file.
          <br></br>
          There are multiple ways to use additional yaml files to run load
          tests, some dedicated to one type of execution (e.g. to run api
          request or postgres queries - depends on what we need) and we can also
          extend our tests to include a general configuration with multiple
          scenarios and settings.
          <br></br>
          With <code>etz</code> we can write yaml execution files, which
          correlate to each of the sub-commands <code>api</code>,{" "}
          <code>pg</code> or <code>file</code> and adding a general
          configuration file that includes all type of execution in a dedicated
          scenarios. The type of tests that can be used with <code>etz</code>{" "}
          are the following:
        </p>
        <ul>
          <li>
            Writing api execution files to run http requests using methods and
            urls
          </li>
          <li>
            Create postgres execution files to test sql statements duration
          </li>
          <li>File upload execution file to an http service</li>
          <li>Testing with a general config file and multiple scenarios</li>
        </ul>
        <h3>Execution files vs General configuration file</h3>
        <p>
          Use the following links to go staright to the type of load test you'd
          like to run:
        </p>
        <div className="boxes">
          <SmallLinkBox
            title="API execution file"
            path="/docs/setup/api"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Postgres execution file"
            path="/docs/setup/postgres"
            className="small-box-link"
          />
          <SmallLinkBox
            title="File upload execution file"
            path="/docs/setup/file"
            className="small-box-link"
          />
          <SmallLinkBox
            title="General config"
            path="/docs/setup/general"
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

const ApiTestCases = () => {
  const back = { title: "Setup test cases", path: "/docs/setup/" };
  const forward = {
    title: "Test postgres statements",
    path: "/docs/setup/postgres/",
  };
  const interestLinks = [
    {
      title: "Command and arguments",
      path: "/docs/started/commands",
    },
    {
      title: "Program in yaml files",
      path: "/docs/advanced/program",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"page-link"} to="/docs/setup">
            Setup Test Cases {"  >  "}
          </Link>
          <Link className={"page-link"} to="/docs/setup/file">
            API
          </Link>
        </span>
        <h1>Create API Test Cases</h1>
        <p>
          API execution files used to run as a client that send http requests to
          a REST API service. An http request should have a method and a url to
          send the requests to. In the API execution file, <code>etz</code> can
          set the servic url (required), the method (required), payload
          (optional) and headers (optional). A typical api execution file
          exmaple:
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
          After you set the <code>url</code>, <code>method</code> and{" "}
          <code>payload</code> use the sub-command <code>api</code> with the
          argument <code>--exec</code> to the relative or absolute path of the
          execution file you've just created:
        </p>
        <CodeBlock
          type="term"
          code={`etz api --exec=path/to/executions.yaml`}
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

const PostgresTestCases = () => {
  const back = { title: "Create api test cases", path: "/docs/setup/api/" };
  const forward = {
    title: "File upload test cases",
    path: "/docs/setup/file/",
  };
  const interestLinks = [
    {
      title: "Command and arguments",
      path: "/docs/started/commands",
    },
    {
      title: "Program in yaml files",
      path: "/docs/advanced/program",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"page-link"} to="/docs/setup">
            Setup Test Cases {"  >  "}
          </Link>
          <Link className={"page-link"} to="/docs/setup/file">
            Postgres
          </Link>
        </span>
        <h1>Test postgres Statements Duration</h1>
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

const FileTestCases = () => {
  const back = {
    title: "Test postgres statements",
    path: "/docs/setup/postgres/",
  };
  const forward = {
    title: "Setup general configuration",
    path: "/docs/setup/general/",
  };
  const interestLinks = [
    {
      title: "Command and arguments",
      path: "/docs/started/commands",
    },
    {
      title: "Program in yaml files",
      path: "/docs/advanced/program",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"page-link"} to="/docs/setup">
            Setup Test Cases {"  >  "}
          </Link>
          <Link className={"page-link"} to="/docs/setup/file">
            File Upload
          </Link>
        </span>
        <h1>Test http File Upload Processing</h1>
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
  const back = { title: "File test cases", path: "/docs/setup/file" };
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
          <Link className={"page-link"} to="/docs/setup">
            Setup Test Cases {"  >  "}
          </Link>
          <Link className={"page-link"} to="/docs/setup/file">
            General Config
          </Link>
        </span>
        <h1>
          Run <code>etz</code> with general config file
        </h1>
        <p>
          General cofiguration file extend the yaml configurations we saw so
          far, and allow setting multiple scenarios which each of the scenarios
          contains execution and able to tune the load of each scenario. This
          will fine tune the type of tests: it could be a load test, a
          performance test, spike or stress test.
        </p>
        <p>
          General config file includes two data structures - settings and
          scenarios.
        </p>
        <h3>General config settings</h3>
        <p>
          You can define settings which will be applied for every scenario
          during the test, but if you decide to apply another settings for a
          different scanrio block in the same file, the scenario setting section
          will take precedence.
          <br></br>
          So let's open our editors and create a new file{" "}
          <code>my_config.yaml</code>:
        </p>
        <CodeBlock type="term" code={"vi my_config.yaml"} />
        <p>
          And let's create a general settings block that will be applied for all
          scenarios
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
  auth:
    sql:                        # credentials to authenticate to a database service
      host: localhost
      port: 5432
      database: etzba
      user: etzba
      password: Pass1234      
`}
        />
        <p>
          The <code>settings</code> block can have two sections:{" "}
          <code>config</code>
          and <code>auth</code>.<br></br>
          <code>config</code> section is meant for tuning the load during the
          test. It contains mainly command arguments as <code>-d=30s</code> to
          set the job duration to 30 seconds. The <code>config</code> section
          can have multiple arguments that explained in{" "}
          <Link className={"page-link"} to="/docs/started/commands">
            Commands and arguments
          </Link>
          .
        </p>
        <p>
          The <code>settings</code> block is optional while using general config
        </p>
        <h3>Scenarios in general config file</h3>
        <p>
          The main (non-optional) section of a general config file, contains the{" "}
          <code>scenarios</code> structure. The <code>scenarios</code> block
          define load test scenarios which each of them had executions (api,
          file or pg) in it. An example of <code>scenarios</code> for load tests
          could be edited in the config file like this:
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
          General config file requires only the <code>scenarios</code> structure
          but for each scenario we can add a settings block instead of the
          general settings:
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
        <p>
          Doing so will tune the tests and help imitating a situation while your
          service has only few requests in a given time (In the example about,
          easy scenario has only 40 requests per second using 10 workers) to a
          medium scenario while having about 120 requests per second, to very
          high amount of requests for a given duration of time.
          <br></br>
          The settings for each scenario can be also programmed for faster and
          easy creation of load, spike or stress tests{" "}
          <Link className={"page-link"} to="/docs/advanced/program">
            Program inside yaml files
          </Link>
        </p>
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

export { Setup, ApiTestCases, PostgresTestCases, FileTestCases, GeneralConfig };
