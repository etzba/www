import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const AdvancedConfiguration = () => {
  const back = { title: "Test cases", path: "/docs/config" };
  const forward = { title: "Using go templates", path: "/docs/advanced/gotmpl" };
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
        <h1>AdvancedConfiguration</h1>
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

const UseGoTemplates = () => {
  const back = { title: "Advanced configuration", path: "/docs/config" };
  const forward = { title: "Using go templates", path: "/docs/advanced/gotmpl" };
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
        <h1>UseGoTemplates</h1>
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

export { AdvancedConfiguration, UseGoTemplates };
