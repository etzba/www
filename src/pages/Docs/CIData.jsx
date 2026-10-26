import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const ContinuesIntegration = () => {
  const back = { title: "Run etz with docker", path: "/docs/container/docker" };
  const forward = { title: "Setup tests in argo workflows", path: "/docs/ci/argo" };
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
        <h1>ContinuesIntegration</h1>
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
  const back = { title: "Integrate etz in pipelines", path: "/docs/ci" };
  const forward = { title: "Setup etz load tests in gitlab ci", path: "/docs/ci/gitlab" };
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
  const back = { title: "Setup tests in argo workflows", path: "/docs/ci/argo" };
  const forward = { title: "etzba products", path: "/docs/products" };
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

export { ContinuesIntegration, CreateArgoWorkflowTemplate, IntegrateInGitLabCI };
