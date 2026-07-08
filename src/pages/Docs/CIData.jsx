import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const CIIntegration = () => {
  const back = { title: "Install on OSX", path: "/docs/install/osx" };
  const forward = { title: "Installation", path: "/docs/install/" };
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
        <h1>CIIntegration</h1>
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

const CreateArgoWorkflowTemplate = () => {
  const back = { title: "Install on OSX", path: "/docs/install/osx" };
  const forward = { title: "Installation", path: "/docs/install/" };
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
        <h1>CreateArgoWorkflowTemplate</h1>
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

const IntegrateInGitLabCI = () => {
  const back = { title: "Install on OSX", path: "/docs/install/osx" };
  const forward = { title: "Installation", path: "/docs/install/" };
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
        <h1>IntegrateInGitLabCI</h1>
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

export { CIIntegration, CreateArgoWorkflowTemplate, IntegrateInGitLabCI };
