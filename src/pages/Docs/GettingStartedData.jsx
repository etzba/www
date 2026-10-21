import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import { DownloadLink, SmallLinkBox } from "../../components/LinkBox";
import linuxBinaryFile from "../../assets/etz_linux_amd64_v1?url";
import darwinBinaryFile from "../../assets/etz_darwin_amd64_v1?url";
import linuxArmBinaryFile from "../../assets/etz_linux_arm64_v8.0?url";
import darwinArmBinaryFile from "../../assets/etz_darwin_arm64_v8.0?url";
import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";
import "../../styles/table.css";
import OptionsTable from "../../components/Table";
import {
  ArgumentsTableData,
  LICENSE,
  SubCommandsTableData,
} from "./gettingStartedData";

const GettingStarted = () => {
  const forward = {
    title: "Download and install etz",
    path: "/docs/start/install/",
  };
  const interestLinks = [
    {
      title: "Run etz From Linux terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz With General Config File",
      path: "/docs/setup/general",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"docs-link"} to="/docs/start">
            Getting started
          </Link>
        </span>
        <h1>Getting started</h1>
        <h3>What are we doing here</h3>
        <p>
          This docs website created to help you using <code>etz</code> CLI load
          testing tool from a linux terminal and later present how to integrate
          it in Docker, Kubernetes together with additional tools that can
          improve your CI\CD processes.
          <br></br>The documentation starts here and cover the following topics:
        </p>
        <ul>
          <li>
            Install and run <code>etz</code> in a linux terminal
          </li>
          <li>Guide how to create testing scenarios with YAML files</li>
          <li>Setup advance configuration for complex test scenarios</li>
          <li>
            Show how to integrate this tool in other environments like
            Kubernetes or CI pipelines
          </li>
          <li>
            Additional documentation for products that can run with or without{" "}
            <code>etz</code> in a Kubernetes cluster to automate load tests as
            part of CI\CD
          </li>
        </ul>
        <p>
          If you are already familiar with <code>etz</code> docs, feel free to
          go directly to the fun sections and start load testing your
          environment:
        </p>
        <div className="boxes">
          <SmallLinkBox
            title="Run etz from terminal"
            path="/docs/start/run"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Explore etz commands"
            path="/docs/start/commands"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Created API Execution"
            path="/docs/setup/api"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Advanced Setup"
            path="/docs/advanced/examples"
            className="small-box-link"
          />
        </div>
        <h3>Reading the docs</h3>
        <p>Here are some tips that will help you use this website better:</p>
        <ul>
          <li>
            If you are using mobile phone, you are welcome to stay and read the
            docs, but it is important to know that this CLI tool works only on
            Linux and Mac operating systems
          </li>
          <li>
            Since it is a CLI tool, you need your terminal available to run{" "}
            <code>etz</code> commands - running it from GUI simply won't work.
            Make sure to have <code>sudo</code> permissions
          </li>
          <li>
            In some of the pages you'll find a block of code, marked as "term",
            this code can be copied and run in terminal
          </li>
          <li>
            For more complex testing scenarios, <code>yaml</code> files can be
            added to the command. Code blocks for <code>yaml</code> will be
            marked as "yaml".
          </li>
        </ul>
        <p>
          Let's setup <code>etz</code> in the{" "}
          <Link className={"docs-link"} to="/docs/start/install">
            Install section
          </Link>
          , run it for the first time and see what it can do.
        </p>
        <GuideLinks
          intrestsLinks={interestLinks}
          forwardTitle={forward.title}
          forwardLink={forward.path}
        />
      </section>
    </div>
  );
};

const Install = () => {
  const [open, setOpen] = useState(false);
  const back = { title: "Getting started", path: "/docs/start/" };
  const forward = { title: "Run from terminal", path: "/docs/start/run/" };
  const interestLinks = [
    {
      title: "Explore etz commands",
      path: "/docs/start/commands",
    },
    {
      title: "Run etz with api execution file",
      path: "/docs/setup/api",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"docs-link"} to="/docs/start">
            Getting started{" "}
          </Link>
          {"  >  "}
          <Link className={"docs-link"} to="/docs/start/install">
            Installation
          </Link>
        </span>
        <h1>
          Install <code>etz</code>
        </h1>
        {open ? (
          <section>
            <br></br>
            <div onClick={() => setOpen(false)}>
              <div className="license-window">{LICENSE}</div>
            </div>
            <br></br>
          </section>
        ) : (
          <>
            <h3>Download links</h3>
            <p>
              Since <code>etz</code> is a binary file, no requirements needed
              other than download it. Please read the{" "}
              <button className={"license-link"} onClick={() => setOpen(true)}>
                LICENSE
              </button>{" "}
              before downloading. Below, you can find download links per
              operating system:
            </p>
            <DownloadTable />
            <h3>Setup in shell</h3>
            <p>
              Set the binary to executable mode and move the file to bin
              directory (if it is needed, go to download directory by running
              first <code>cd ~/Downloads</code>):
            </p>
            <CodeBlock
              type="term"
              code={"chmod +x etz && sudo mv etz /usr/local/bin/"}
            />
            <h3>Check installation</h3>
            <p>
              Check the version of <code>etz</code>
            </p>
            <CodeBlock type="term" code={"etz version"} />
            <p>And to read the license:</p>
            <CodeBlock type="term" code={"etz license"} />
            <h2>
              Install <code>etz</code> from terminal
            </h2>
            <div>
              <h3>Linux installation</h3>
              <p>
                Before installing <code>etz</code> directly from the terminal,
                check that you have <code>wget</code> and optionally{" "}
                <code>curl</code> installed on your linux machine. Use{" "}
                <code>wget</code> to download from github:
              </p>
              <CodeBlock
                type="term"
                code={
                  "wget https://raw.githubusercontent.com/etzba/etz/master/v0.0.4/etzba_linux_amd64_v1/etz"
                }
              />
              <p>Move the binary to bin directory:</p>
              <CodeBlock
                type="term"
                code={"chmod +x etz && sudo mv etz /usr/local/bin/"}
              />
              <p>
                Check from terminal that you can see the version and license:
              </p>
              <CodeBlock type="term" code={"etz version && etz license"} />
              <br></br>
              <h3>
                Install <code>etz</code> and veirfy binary with gpg
              </h3>
              <p>
                To validate the binary file integrity, use <code>gpg</code> and
                download the public key and signature of <code>etz</code> (Note
                that in the step above you already used <code>wget</code> to get
                the binary as in the first <code>curl</code> command):
              </p>
              <CodeBlock
                type="term"
                code={`curl -LO https://raw.githubusercontent.com/etzba/etz/master/v0.0.4/etzba_linux_amd64_v1/etz
curl -LO https://raw.githubusercontent.com/etzba/etz/master/v0.0.4/etzba_linux_amd64_v1/etz.sig
curl -LO https://raw.githubusercontent.com/etzba/etz/master/pubkey.asc

gpg --import pubkey.asc
gpg --verify etz.sig etz`}
              />
              <p>
                You can find more versions of <code>etz</code> (and their
                signatures) to download in{" "}
                <Link
                  className={"docs-link"}
                  to="https://github.com/etzba/etz/"
                >
                  etz github repository
                </Link>
                . Follow etzba in github and star this repository if you like
                what's going on here. Thanks ;)
              </p>
            </div>
          </>
        )}
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

const Run = () => {
  const back = { title: "Install etz", path: "/docs/start/install/" };
  const forward = {
    title: "Explore etz commands",
    path: "/docs/start/commands",
  };
  const interestLinks = [
    {
      title: "Run etz With General Config File",
      path: "/docs/setup/general",
    },
    {
      title: "Run etz with api execution file",
      path: "/docs/setup/api",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"docs-link"} to="/docs/start">
            Getting started{" "}
          </Link>
          {"  >  "}
          <Link className={"docs-link"} to="/docs/start/run">
            Run etz from terminal
          </Link>
        </span>
        <h1>Run from terminal</h1>
        <h3>Overview</h3>
        <p>
          <code>etz</code> uses several sub commands: <code>api</code>,{" "}
          <code>pg</code> and <code>file</code>. Each of these sub commands is
          dedicated to run a different type of load test. You'll find out soon
          that each of these sub-commands, can also use a dedicated YAML
          configurations to run different load tests.
          <br></br>
          While <code>api</code> and <code>file</code> sub-commands run http
          requests to a remote http service, <code>pg</code> sub-command is
          dedicated for measuring postgres queries performance inside a
          database.
          <br></br>
          In the examples below, you can see how to run each sub-command
          directly from terminal and without any need for additional YAML
          configuration files.
        </p>
        <h3>Examples</h3>
        <p>
          <code>api</code> will use http protocol under the scene to run a load
          test on a remote server url:
        </p>
        <CodeBlock
          type="term"
          code={"etz api --url=https://etzba.com --method=GET"}
        />
        <p>
          To add a payload to the http request, run in duration of 3 seconds,
          with 100 request per second using 50 workers (golang routines):
        </p>
        <CodeBlock
          type="term"
          code={`etz api --url=https://etzba.com \\ 
              --method=POST -d 3s -r 100 -w 50 \\
              -j '{"name":"Etz Ba","address":"Etzba etz 32"}'`}
        />
        <p>
          Running <code>file</code> sub-command will help measure how long did
          it take to upload a file to a remote http service:
        </p>
        <CodeBlock
          type="term"
          code={`etz file --url=https://etzba.com \\ 
            --method=POST \\ 
            --path=relative/path/to/files/
          `}
        />
        <p>
          Note that you just need to give the path of the files directory to
          upload and <code>etz</code> will pick random files to upload to your
          service.
        </p>
        <p>
          Assuming you'd like to store the results in a json format, use{" "}
          <code>--output=directory/filename.json</code> argument and a results
          file of your load test will be saved locally on your machine:
        </p>
        <CodeBlock
          type="term"
          code={
            "etz api --url=https://etzba.com --method=GET --output=files/result.json"
          }
        />
        <p>
          In the next section,{" "}
          <Link className={"docs-link"} to="/docs/start/yaml">
            run <code>etz</code> with additional YAML files
          </Link>
          , we will run more complex stuff with general configuration or
          execution file
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

const Commands = () => {
  const back = { title: "Run from terminal", path: "/docs/start/run" };
  const forward = { title: "Run with YAML file", path: "/docs/start/yaml" };
  const interestLinks = [
    {
      title: "Setup test cases",
      path: "/docs/setup/",
    },
    {
      title: "Run etz With General Config File",
      path: "/docs/setup/general",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"docs-link"} to="/docs/start">
            Getting Started{" "}
          </Link>
          {"  >  "}
          <Link className={"docs-link"} to="/docs/start/commands">
            Commands and Arguments
          </Link>
        </span>
        <h1>
          Explore <code>etz</code> commands and arguments
        </h1>
        <p>
          To run load tests <code>etz</code> has several sub-commands and each
          of these sub-commands requires several arguments unless using an
          additional YAML file.
        </p>
        <h3>Sub-Commands</h3>
        <p>
          When using <code>etz</code> sub-commands it is required to set a few
          arguments to the command or the argument <code>--exec</code> and
          provide an execution YAML file. In the table below, you can find all
          the available sub-commands:
        </p>
        <br></br>
        <OptionsTable data={SubCommandsTableData} />
        <p>
          If none of the sub-command is used, <code>etz</code> will expect an
          argument <code>--config</code> with a general configuration file.
        </p>
        <h3>Arguments</h3>
        <p>
          <code>etz</code> arguments allow you to tune the load tests further.
          Only the arguments <code>--exec</code> and <code>--config</code>{" "}
          required while using a YAML file. If you would like to use{" "}
          <code>etz</code> with a sub-command but without a YAML file, these are
          all the available command arguments with the related sub-command:
        </p>
        <br></br>
        <OptionsTable data={ArgumentsTableData} />
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

const Yaml = () => {
  const back = { title: "Explore etz commands", path: "/docs/start/commands" };
  const forward = { title: "Create test cases", path: "/docs/setup/" };
  const interestLinks = [
    {
      title: "Run etz from terminal",
      path: "/docs/start/run",
    },
    {
      title: "Run etz with api execution file",
      path: "/docs/setup/api",
    },
  ];
  return (
    <div>
      <section className="section">
        <span className="guide">
          <Link className={"docs-link"} to="/docs/start">
            Getting started{" "}
          </Link>
          {"  >  "}
          <Link className={"docs-link"} to="/docs/start/excution">
            Run with execution file
          </Link>
        </span>
        <h1>
          Run <code>etz</code> with execution file
        </h1>
        <p>
          So far, we could run <code>etz</code> by one command from the
          terminal, using only command line arguments. This is the simplest way
          to run <code>etz</code>, but what if we need to add more complexity
          for our testing scenarios? <br></br>For this case, creating an
          execution file in <code>.yaml</code>, can extend the capabilities of{" "}
          <code>etz</code> and allow running load test executions from a file.
          We can create complex load test scenarios with multiple executions of
          sql statements or api calls in one file. This is a short and simple
          example of running <code>etz</code> with an execution file:
        </p>
        <CodeBlock
          type="yaml"
          code={`api:
- url: https://etzba.com
  method: POST
  data:
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
          This is just a short introduction to execution files which shows only
          the simplest way to run <code>etz</code>. Going forward to{" "}
          <Link className={"docs-link"} to="/docs/setup">
            Setup test cases
          </Link>{" "}
          , you'll be able to create sophisticated execution files for each
          sub-command or compose a general configuration file to run load tests
          in multiple scenarios, increasing the load or set a type of a load,
          soak, stress or spike tests.
          <br></br>
          You can also check out how to write advanced <code>.yaml</code> files
          using conditional statements, golang template functions and many more
          in{" "}
          <Link className={"docs-link"} to="/docs/advanced">
            advanced configuration
          </Link>{" "}
          .
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

const DownloadTable = () => {
  return (
    <div className="download">
      <table>
        <thead>
          <tr>
            <th>
              <p className="download-head">Linux (amd64)</p>
            </th>
            <th>
              <p className="download-head">Linux (arm64)</p>
            </th>
            <th>
              <p className="download-head">Darwin (amd64)</p>
            </th>
            <th>
              <p className="download-head">Darwin (arm64)</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                className="download-link"
                href={linuxBinaryFile}
                download="etz"
              >
                <b>Download</b>
              </a>
            </td>
            <td>
              <a
                className="download-link"
                href={linuxArmBinaryFile}
                download="etz"
              >
                <b>Download</b>
              </a>
            </td>
            <td>
              <a
                className="download-link"
                href={darwinBinaryFile}
                download="etz"
              >
                <b>Download</b>
              </a>
            </td>
            <td>
              <a
                className="download-link"
                href={darwinArmBinaryFile}
                download="etz"
              >
                <b>Download</b>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { GettingStarted, Install, Run, Commands, Yaml };
