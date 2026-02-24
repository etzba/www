import React from "react";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import "../styles/layout.css";

const RunEtz = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="section">
          <h2>
            Run <code>etz</code> from terminal
          </h2>
          <p>
            <code>etz</code> uses several sub commands: <code>api</code>,
            <code>pg</code> and <code>file</code> each of these sub commands,
            uses different configuration to run different tests. So for example,{" "}
            <code>api</code> will use http protocol under the scene to run a
            load test on a remote server url:
          </p>
          <CodeBlock code={"etz api --url=https://etzba.com --method=GET"} />
          <p>
            Here is how to add payload to your request, run in duration of 3
            seconds, with 100 request per second using 50 workers (routines):
          </p>
          <CodeBlock
            code={`etz api --url=https://etzba.com \\ 
              --method=POST -d 3s -r 100 -w 50 \\
              -j '{"name":"Etz Ba","address":"Etzba etz 32"}'`}
          />
          <p>
            <code>file</code> sub command will help you upload a file and
            measure how long did it take:
          </p>
          <CodeBlock
            code={
              "etz file --url=https://etzba.com --method=POST --path=relative/path/to/files/"
            }
          />
          Note that you just need to give the path with the files to upload and
          <code>etz</code> will pick random files to upload to your service.
          <p>
            Assuming you'd like to store the results in a json format, use{" "}
            <code>--output=directory/filename.json</code> arg and the file will
            be save locally on your machine:
          </p>
          <CodeBlock
            code={
              "etz api --url=https://etzba.com --method=GET --output=files/result.json"
            }
          />
          <p>
            In the next section,{" "}
            <Link to="/start/exec">
              run <code>etz</code> with additional execution file
            </Link>
            , we will run more complex stuff with general configuration or
            execution file
          </p>
        </section>
      </div>
    </div>
  );
};

export default RunEtz;
