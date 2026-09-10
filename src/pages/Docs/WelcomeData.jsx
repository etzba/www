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
          uploads to an http server.
        </p>
        <p>
          With <code>etz</code> you can measure the duration of http requests or
          sql queries and point a finger on potential issues and bottlenecks
          between end-user and your service.
          <br></br>
          <code>etz</code> can run in your terminal, shell scripts, docker,
          kubernetes or CI pipelines.
        </p>
        <p>
          To learn more about <code>etz</code> and install the latest
          version:{" "}
        </p>
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
            "YAML configuration: Define your test cases with a yaml file and extend it with functions",
            "Setup in CI: Add another step to your development cycle and test your app under stress",
            "Production ready: Prepare your product for larger request volume",
          ]}
        />
        <br></br>
        <p>
          <code>etz</code> is a versatile CLI tool that is capable of running
          advanced load testing scenarios by using additional <code>.yaml</code>{" "}
          files for complex, long and thorough load testing scenarios. You can
          automate load test executions while defining requests per second, test
          duration, workers, authentication and set many more options to
          create stress, soak, spike or load tests scenarios.
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
