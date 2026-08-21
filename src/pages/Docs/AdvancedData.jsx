import CodeBlock from "../../components/CodeBlock";
import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const AdvancedConfiguration = () => {
  const back = {
    title: "Setup General config file",
    path: "/docs/setup/general",
  };
  const forward = {
    title: "YAML syntax and programming",
    path: "/docs/advanced/syntax",
  };
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
        <h1>Advanced Configuration</h1>
        <p>
          In this section you'll learn how to create sophisticated test cases
          with <code>etz</code> YAML execution and general config files.
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

const YAMLSyntax = () => {
  const back = { title: "Advanced Configuration", path: "/docs/advanced" };
  const forward = {
    title: "Using go templates",
    path: "/docs/advanced/gotmpl",
  };
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
        <h1>YAML syntax and programming</h1>
        <p>
          YAML files allow us to set identifiers inside a YAML file. So for
          example, you can set a variable in your YAML setup:
        </p>
        <CodeBlock
          type="yaml"
          code={`{{ $username := "Etzli Betzli" }}
{{ $baseUrl := printf "%s" "http://localhost:8080" }}
{{ $dir := printf "%s" "assets/" }}`}
        />
        <p>This is how to create a for loop inside <code>etz</code> general config file:</p>
        <CodeBlock
          type="yaml"
          code={`scenarios:
  locations:
    api:
    {{ range 1 2 3 4 }}
    - url: {{ $baseUrl }}/locations/{{ . }}
      method: GET
    {{ end }}`}
        />
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
  const forward = { title: "CI integration", path: "/docs/advanced/gotmpl" };
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

const AdvancedExamples = () => {
  const back = { title: "Test cases", path: "/docs/config" };
  const forward = {
    title: "Using go templates",
    path: "/docs/advanced/gotmpl",
  };
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
        <h1>Advanced Examples</h1>
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

export { AdvancedConfiguration, YAMLSyntax, UseGoTemplates, AdvancedExamples };
