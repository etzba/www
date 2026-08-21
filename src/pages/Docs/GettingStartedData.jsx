import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import { DownloadLink, SmallLinkBox } from "../../components/LinkBox";
import linuxBinaryFile from "../../assets/etz_linux_amd64_v1?url";
import darwinBinaryFile from "../../assets/etz_darwin_amd64_v1?url";
import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";
import "../../styles/table.css";
import OptionsTable from "../../components/Table";
import { ArgumentsTableData, SubCommandsTableData } from "./gettingStartedData";

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
        <p>
          Let's start first with a short introduction of this docs website and
          how to use it while reading the docs.
        </p>
        <ul>
          <li>
            We use Linux terminal to run <code>etz</code>, so make sure that
            your terminal is available to run <code>etz</code>
          </li>
          <li>
            In some of the pages you'll find a block of code, marked as "term" -
            this code can be copied and run in terminal
          </li>
          <li>
            For more complex testing scenarios, <code>yaml</code> files can be
            added to the command. Code block for <code>yaml</code> will be
            marked as "yaml".
          </li>
        </ul>
        <p>
          Let's setup <code>etz</code> in the{" "}
          <Link className={"docs-link"} to="/docs/start/install">
            Install section{" "}
          </Link>
          and run it for the first time, or if you know your way around - simply
          use the download links:
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
          If you already downloaded <code>etz</code> you can go directly to the
          fun sections and start load testing your environment:
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
        </div>
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
            Getting started {"  >  "}
          </Link>
          <Link className={"docs-link"} to="/docs/start/install">
            Installation
          </Link>
        </span>
        <h1>
          Install <code>etz</code>
        </h1>
        <p>
          Since <code>etz</code> is a binary file, no requirements needed other
          than download it. Below you can find download links per operating
          system:
        </p>
        <DownloadTable />
        <p>
          Move the file to bin directory (If your download directory is
          different than <code>/~Downloads</code>, edit the code accordingly)
        </p>
        <CodeBlock
          type="term"
          code={"sudo mv ~/Downloads/etz /usr/local/bin/"}
        />
        <p>
          Check the version of <code>etz</code>
        </p>
        <CodeBlock type="term" code={"etz version"} />

        <h2>
          Install <code>etz</code> on a Linux machine from terminal
        </h2>
        <div>
          <h3>Requirements</h3>
          <p>
            Before installing <code>etz</code> from terminal, check the
            following prerequisities:
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
              "wget https://raw.githubusercontent.com/etzba/etz/master/v0.0.4-rc4/etzba_linux_amd64_v1/etz"
            }
          />
          <p>Move to bin directory:</p>
          <CodeBlock
            type="term"
            code={"chmod +x etz && sudo mv etz /usr/local/bin/"}
          />
          <p>Check from terminal that you can see the version:</p>
          <CodeBlock type="term" code={"etz version"} />
          <h2>
            Verify <code>etz</code> binary with gpg
          </h2>
          <p>
            To validate the binary file integrity, use <code>gpg</code> and
            download the public key and signature of <code>etz</code>:
          </p>
          <CodeBlock
            type="term"
            code={`curl -LO https://raw.githubusercontent.com/etzba/etz/master/v0.0.4-rc4/etzba_linux_amd64_v1/etz
curl -LO https://raw.githubusercontent.com/etzba/etz/master/v0.0.4-rc4/etzba_linux_amd64_v1/etz.sig
curl -LO https://raw.githubusercontent.com/etzba/etz/master/pubkey.asc

gpg --import pubkey.asc
gpg --verify etz.sig etz`}
          />
          <p>
            The command above should change according to the binary you've
            downloaded and should work for mac users
          </p>
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
            Getting started {"  >  "}
          </Link>
          <Link className={"docs-link"} to="/docs/start/run">
            Run etz from terminal
          </Link>
        </span>
        <h1>
          Run <code>etz</code> from terminal
        </h1>
        <p>
          <code>etz</code> uses several sub commands: <code>api</code>,{" "}
          <code>pg</code> and <code>file</code> each of these sub commands, uses
          different configurations to run different load tests. For example,{" "}
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
          <code>file</code> sub command will help you upload a file and measure
          how long did it take:
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
          file of your load test will be save locally on your machine:
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
            run <code>etz</code> with additional yaml files
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
  const forward = { title: "Run with yaml file", path: "/docs/start/yaml" };
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
            Getting Started {"  >  "}
          </Link>
          <Link className={"docs-link"} to="/docs/start/commands">
            Commands and Arguments
          </Link>
        </span>
        <h1>
          Explore <code>etz</code> commands and arguments
        </h1>
        <p>
          To run load tests <code>etz</code> has several sub-commands and each
          of these sub-commands require several arguments unless using aditional
          YAML file.
        </p>
        <h4>Sub-Commands</h4>
        <p>
          When using <code>etz</code> sub-commands it is required to set few
          arguments to the command or the argument <code>--exec</code> and
          provide an execution yaml file. In the table below, you can find all
          the available sub-commands:
        </p>
        <br></br>
        <OptionsTable data={SubCommandsTableData} />
        <p>
          If none of the sub-command is used, <code>etz</code> will expect an
          argument <code>--config</code> with a general configuration file.
        </p>
        <h4>Arguments</h4>
        <p>
          <code>etz</code> arguments allow you to tune the load tests further.
          Only the arguments <code>--exec</code> and <code>--config</code>{" "}
          required while using YAML file. If you would like to use{" "}
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
            Getting started {"  >  "}
          </Link>
          <Link className={"docs-link"} to="/docs/start/excution">
            Run with execution file
          </Link>
        </span>
        <h1>
          Run <code>etz</code> with exectuion file
        </h1>
        <p>
          So far we could run <code>etz</code> by one command from terminal.
          Using only command line arguments is the simplest way to run{" "}
          <code>etz</code>, but what if you want to create more complex testing
          scenarios to your api and postgres service? <br></br>For this case,
          adding additional execution file in <code>.yaml</code>, can extend the
          capabilities or <code>etz</code> and allow running executions from a
          file and later on, create complex scenarios or multiple execution in
          one file. This is a short and simple example of running{" "}
          <code>etz</code> with execution file:
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
          This is just a short introduction to execution files and it shows only
          the simplest way of running <code>etz</code>. Going forward to{" "}
          <Link className={"docs-link"} to="/docs/setup">
            Setup test cases
          </Link>{" "}
          , you'll be able to set multiple execution files for each sub-command
          or create a general configuration file to run load tests in multiple
          scenarios.
          <br></br>
          Afterwards, you can see also how to write advanced <code>
            .yaml
          </code>{" "}
          files using conditional statements, golang template functions and many
          more in{" "}
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
              <p className="download-head">Darwin (amd64)</p>
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
                Download
              </a>
            </td>
            <td>
              <a
                className="download-link"
                href={darwinBinaryFile}
                download="etz"
              >
                Download
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { GettingStarted, Install, Run, Commands, Yaml };
