import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const Products = () => {
  const back = { title: "Setup tests in gitlab ci", path: "/docs/ci/gitlab" };
  const forward = { title: "Explore image updater", path: "/docs/products/image" };
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
        <h1>Products</h1>
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

const ImageUpdater = () => {
  const back = { title: "etzba products", path: "/docs/products" };
  const forward = { title: "Explore secret distributor", path: "/docs/products/secret" };
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
        <h1>ImageUpdater</h1>
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

const SecretDistributor = () => {
  const back = { title: "Explore image updater", path: "/docs/products/image" };
  const forward = { title: "Getting started", path: "/docs/start" };
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
        <h1>SecretDistributor</h1>
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

export { Products, ImageUpdater, SecretDistributor };
