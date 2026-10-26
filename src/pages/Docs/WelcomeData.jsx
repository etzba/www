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
        <h3>The strongest load testing CLI tool in the forest</h3>
        <p>
          <code>etz</code> is a load testing CLI tool that measures the
          performance of restful api services, postgres databases and file
          uploads to an http server. With <code>etz</code> you can measure the
          duration of http requests or sql queries and point a finger on
          potential issues and bottlenecks between end-user and your service.{" "}
          <code>etz</code> can run in your terminal, shell scripts, docker,
          kubernetes or CI pipelines.
        </p>
        <InfoBlock
          title={"Key Features"}
          bulletPoints={[
            "Terminal-native: Run and analyze tests with simple CLI commands",
            "Scriptable & automatable: Perfect for CI/CD pipelines and custom workflows",
            "YAML configuration: Define your test cases with a yaml file and extend it with functions",
            "Setup in CI: Add another step to your development cycle and test your app under stress",
            "Docker and Kubernetes: It can do both",
            "Production ready: Prepare your product for larger request volume",
          ]}
        />
        <p>
          To learn more about <code>etz</code> and install the latest
          version:{" "}
        </p>
        <div className="boxes">
          <SmallLinkBox
            title="Download and Install"
            path="/docs/start/install"
            className="small-box-link"
          />
          <SmallLinkBox
            title="Run etz with YAML"
            path="/docs/start/yaml"
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
        <h3>Why you should use this CLI tool</h3>
        <h4>Simplicity - Writing load tests can be fast and simple</h4>
        <p>
          With <code>etz</code> load tests can be executed directly from the
          command line interface. For sophisticated load testing scenarios,
          additional YAML files can be added to the party. Instead of writing
          long and slow python or javascript code, YAML can cover most of the
          requirements of your load testing and let you create load tests in
          several minutes.
        </p>
        <h4>
          Efficiency - This tool is fast and using low amount of resources
        </h4>
        <p>
          Written in golang, <code>etz</code> is capable of running a super high
          amount of goroutines while using a low amount of hardware resources.
        </p>
        <h4>
          Versatility - It's capable of running complex and simple load tests
          with multiple options for each scenario
        </h4>
        <p>
          You can automate load test executions while defining scenarios,
          executions, requests per second, test duration, workers,
          authentication and many more options to create stress, soak, spike or
          load tests scenarios. Yes, you can choose between simplicity running
          with commands and arguments directly from terminal, or using
          additional YAML files for complex and thorough load tests scenarios.
        </p>
        <h4>Compatibility - Run it in every environment</h4>
        <p>
          Whether you'd like to run in Docker locally on your machine, or
          imitate a real production environment by running in Kubernetes -{" "}
          <code>etz</code> can do both. Take it further and run it in Argo
          workflows or Gitlab CI pipelines. This tool can be used in CI\CD.
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
