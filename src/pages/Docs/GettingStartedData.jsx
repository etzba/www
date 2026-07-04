import { Link } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import { DownloadLink, SmallLinkBox } from "../../components/LinkBox";
import linuxBinaryFile from "../../assets/etz_linux_amd64_v1?url";
import darwinBinaryFile from "../../assets/etz_darwin_amd64_v1?url";
import "../../styles/layout.css";
import "../../styles/table.css";

const GettingStarted = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>Getting started</h1>
        <p>
          Let's start with a short explanation about this docs website and how
          to use this program while following the pages sections.
        </p>
        <ul>
          <li>
            We use our terminal to run <code>etz</code>, so make sure that your
            terminal is available
          </li>
          <li>
            In some of the pages you'll see a block of code, marked as "term"
            (to use in linux or mac terminal), you can copy and run it in your
            terminal
          </li>
          <li>
            Although this CLI tool is planned to run as a fast execution from
            command line, we can also use <code>yaml</code> files in addition to
            the command and set more complex scenarios for our test cases. Code
            block for <code>yaml</code> will be marked as "yaml" and you can
            simply copy and paste to any editor
          </li>
        </ul>
        <p>
          So to set it up jump over to{" "}
          <Link className={"page-link"} to="/docs/start/install">
            Install section{" "}
          </Link>
          or if you know your way around, simply use the download links:
        </p>
        <div className="boxes">
          <DownloadLink
            title="Download (Linux)"
            file={linuxBinaryFile}
            className="small-box-link"
          />
          <DownloadLink
            title="Download (OSX)"
            file={darwinBinaryFile}
            className="small-box-link"
          />
        </div>
        <p>
          If you already downloaded <code>etz</code> you can go directly to the fun sections and start load testing your environment:
        </p>
        <div className="boxes">
          <SmallLinkBox
            title="Run etz from terminal"
            path="/docs/start/run"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Create execution files"
            path="/docs/start/exec"
            className="small-box-link"
          />
        </div>
      </section>
    </div>
  );
};

const InstallEtz = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>
          Install <code>etz</code>
        </h1>
        <p>
          Since <code>etz</code> is a go binary file, no requirements needed
          other than simply download it.
        </p>
        <p>Below you can find download links per operating system:</p>
        <DownloadTable />
        <p>
          Move to bin directory (The default downloads directory might set to a
          different location)
        </p>
        <CodeBlock
          type="term"
          code={"sudo mv ~/Downloads/etz /usr/local/bin/"}
        />
        <p>Check the version of <code>etz</code></p>
        <CodeBlock type="term" code={"etz version"} />

        <h2>
          Install <code>etz</code> on a Linux machine from terminal
        </h2>
        <div>
          <h3>Requirements</h3>
          <p>
            Make sure that you have the following:
          </p>
          <ul>
            <li key={1}>Ubuntu 20.04+ or compatible distro</li>
            <li key={2}>
              <code>bash</code> or compatible shell
            </li>
            <li key={3}>
              <code>wget</code> or <code>curl</code>
            </li>
          </ul>
          <h3>Steps</h3>
          <p>
            Use <code>wget</code> to download from github:
          </p>
          <CodeBlock
            type="term"
            code={
              "wget https://raw.githubusercontent.com/etzba/etz/master/etzba_linux_amd64_v1/etz"
            }
          />
          <p>Move to bin directory:</p>
          <CodeBlock type="term" code={"sudo mv etz /usr/local/bin/"} />
          <p>Check from terminal that you can see the version:</p>
          <CodeBlock type="term" code={"etz version"} />
        </div>
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

const DownloadTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <p className="column">Linux (amd64)</p>
          </th>
          <th>
            <p className="column">Darwin (amd64)</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a className="td-link" href={linuxBinaryFile} download="etz">
              Download
            </a>
          </td>
          <td>
            <a className="td-link" href={darwinBinaryFile} download="etz">
              Download
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { GettingStarted, InstallEtz, RunEtz, SimpleExec };
