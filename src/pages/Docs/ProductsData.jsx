import { Link } from "react-router-dom";
import CodeBlock from "../../components/CodeBlock";
import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";

const Products = () => {
  const back = { title: "Setup tests in gitlab ci", path: "/docs/ci/gitlab" };
  const forward = {
    title: "Explore image updater",
    path: "/docs/products/image",
  };
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
        <p>
          In this section you can find other developer tools that help setting
          up automation of <code>etz</code> load testing inside a kubernetes
          cluster, but can also solve other unrelated issues of devops.
          <br></br>
          etzba products consolidated into a collection of devops tools, in
          order to ease your CI\CD processes and automate the following tasks
          inside a Kubernetes cluser:
        </p>
        <ul>
          <li>
            Secret distributions: A dedicated kubernetes operator that helps
            spreading secrets in other namespaces in a kubernetes cluster.
          </li>
          <li>
            Updating deployment images automatically: By using the image url
            (with the relevant tag), additional controller can set the latest
            image that was pushed to your remote registry.
          </li>
        </ul>
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
  const forward = {
    title: "Explore secret distributor",
    path: "/docs/products/secret",
  };
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
        <h1>Image Updater</h1>
        <h3>Overview</h3>
        <p>
          Image Updater is a kubernetes controller that looks for deployments
          with specific annotation <code>etzba.com/image-updater: enabled</code>{" "}
          and update these deployments images to the latest image that was
          pushed to a remote registry with the tag.
          <br></br>
          Image updater container image can be pulled from{" "}
          <Link
            className={"docs-link"}
            to="https://hub.docker.com/repository/docker/etzba/image-updater/general"
          >
            DockerHub
          </Link>{" "}
          and works only inside a kubernetes cluster.
        </p>
        <h3>Setup</h3>
        <h4>Kubernetes cluster deployments</h4>
        <p>
          To let image updater update deployments images, add an annotation to
          the kubernetes deployment. You can do it with <code>kubectl</code> if
          installed:
        </p>
        <CodeBlock
          type="term"
          code={`kubectl annotate deployment <deployment_name> "etzba.com/image-updater"="enabled"`}
        />
        <p>
          Or you can add it to the deployment specifications in a yaml file:
        </p>
        <CodeBlock
          type="yaml"
          code={`apiVersion: apps/v1
kind: Deployment
metadata:
  name: deployment-name
  annotations:
    etzba.com/image-updater: enabled`}
        />
        <h4>Install image-updater with helm</h4>
        <p>Add helm chart to helm repository:</p>
        <CodeBlock
          type="term"
          code={`helm repo add etzba/image-updater 'https://raw.githubusercontent.com/etzba/charts/master/image-updater'
helm repo update
helm repo list`}
        />
        <p>To install in kubernetes cluster:</p>
        <CodeBlock
          type="term"
          code={`helm install etzba/image-updater -n image-updater --create-namespace`}
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
        <h1>Secret Distributor</h1>
        <h3>Overview</h3>
        <p>
          Secret Distributor is a kubernetes operator that distibutes secrets
          from it's own namespace to other namespaces inside the same kubernetes
          cluster.
          <br></br>
          By looking for a{" "}
          <Link
            className={"docs-link"}
            to="https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"
          >
            Custom Resources
          </Link>{" "}
          in kubernetes namespaces of kind <code>Distribution</code> with
          apiVersion <code>secdist.etzba.com/v1</code>, secret-distibutor will
          search for the <code>specs.secretName</code> that matches in the{" "}
          <code>Distribution</code> specifications, to the secret that is set in
          it's own namespace. If the secret name matches, secret-distributor
          will set the same secret in the namespace where the Custom Resource
          exists.
          <br></br>
          Secret distributor is an open source that exists in a public{" "}
          <Link
            className={"docs-link"}
            to="https://github.com/etzba/secret-distributor"
          >
            Github Repository
          </Link>
          . A docker container is available in{" "}
          <Link
            className={"docs-link"}
            to="https://hub.docker.com/repository/docker/etzba/secret-distributor/general"
          >
            DockerHub
          </Link>
          .
        </p>
        <h3>Setup</h3>
        <h4>Install secret-distributor with helm</h4>
        <p>Add helm chart to helm repository:</p>
        <CodeBlock
          type="term"
          code={`helm repo add etzba/secret-distributor 'https://raw.githubusercontent.com/etzba/charts/master/secret-distributor'
helm repo update
helm repo list`}
        />
        <p>To install in kubernetes cluster:</p>
        <CodeBlock
          type="term"
          code={`helm install etzba/secret-distributor -n secret-distributor --create-namespace`}
        />
        <br></br>
        <h4>Create secrets in secert distributor namespace</h4>
        <p>
          There are several ways to setup your secrets in a kubenretes
          namespace. Wether you are using a secret management tool, kustomize
          with sops or terraform and Gitlab CI variables, secret distributor is
          operating only inside the cluster. No matter what you'll choose, the
          setup should be simple as setting this example secret in the cluster:
        </p>
        <CodeBlock
          type="term"
          code={`kubectl apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: docker-config
type: Opaque
data:
  .dockerconfigjson: $(echo -n "etzba123" | base64 -w0)
EOF`}
        />
        <p>
          This task can be set in different places in your infrastructure code,
          so please keep your secrets in a safe place with other tools.
        </p>
        <h4>Create a Distribution CRD in another namespace</h4>
        <p>
          To add a Distribution CRD to your helm charts, kustomize bases or
          simply by using <code>kubectl</code>:
        </p>
        <CodeBlock
          type="yaml"
          code={`apiVersion: secdist.etzba.com/v1
kind: Distribution
metadata:
  labels:
    app.kubernetes.io/name: secret-distributor
    app.kubernetes.io/managed-by: kustomize
  name: docker-config-distribution
spec:
  secretName: docker-config`}
        />
        <p>
          Or if you want to use <code>kubectl</code> directly from terminal, to
          apply the resource in the relevant namespace:
        </p>
        <CodeBlock
          type="term"
          code={`kubectl apply -f - <<EOF
apiVersion: secdist.etzba.com/v1
kind: Distribution
metadata:
  labels:
    app.kubernetes.io/name: secret-distributor
    app.kubernetes.io/managed-by: kustomize
  name: docker-config-distribution
spec:
  secretName: docker-config
EOF`}
        />
        <p>
          After doing so, you will find the same secret from secret-distributor
          namespace, in the namespace you applied the CRD.
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

export { Products, ImageUpdater, SecretDistributor };
