import InfoBlock from "../../components/InfoBlock";
import { DownloadLink, SmallLinkBox } from "../../components/LinkBox";
import linuxBinaryFile from "../../assets/etz_linux_amd64_v1?url";
import darwinBinaryFile from "../../assets/etz_darwin_amd64_v1?url";
import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const Welcome = () => {
  const forward = { title: "Getting started", path: "/docs/start/" };
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
        <h1>Welcome to etz docs!</h1>
        <h3>A simple load testing CLI tool</h3>
        <p>
          Welcome to etz docs! <code>etz</code> is a load and performance tests
          CLI tool that measure the performance of restful api services,
          postgres databases and file uploads to an http server.
        </p>
        <InfoBlock
          preText={
            "The word etzba in Hebrew, used as a measurement unit in biblical times and also means a pointing finger."
          }
        />
        <p>
          This CLI tool will measure the duration of http requests or sql
          queries and point the finger on potential issues and bottlenecks.
          <br></br>Built and compiled with golang, named <code>etz</code> for
          faster executions in command line - You can run it in your terminal,
          shell scripts or in CI pipelines.
        </p>
        <p>Go to the next sections to set it up: </p>
        <div className="boxes">
          <SmallLinkBox
            title="Getting Started"
            path="/docs/start"
            className="small-box-link"
          />
          <SmallLinkBox
            title="How To Install etz"
            path="/docs/start/install"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Setup Config Files"
            path="/docs/config/executions"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Continues Integration"
            path="/docs/config/executions"
            className="small-box-link"
          />
        </div>
        <br></br>
        <InfoBlock
          title={"Key Features"}
          bulletPoints={[
            "Terminal-native: Run and analyze tests with simple CLI commands",
            "Scriptable & automatable: Perfect for CI/CD pipelines and custom workflow",
            "Real-time metrics: Get instant feedback on throughput, latency, and errors",
            "YAML configuration: Define your test cases with a yaml file and extend it with functions",
          ]}
        />
        <p>
          <code>etz</code> is capable of running advanced load test scenarios by
          using additional <code>.yaml</code> files - you can create a complex
          test scenarios and automate test executions while defining requests
          per second, test duration and many more options.
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

export default Welcome;
