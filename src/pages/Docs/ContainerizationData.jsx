import { Link } from "react-router-dom";
import GuideLinks from "../../components/GuideLinks";
import "../../styles/layout.css";
import CodeBlock from "../../components/CodeBlock";
import InfoBlock from "../../components/InfoBlock";

const ContainerizedEnvironment = () => {
  const back = {
    title: "Advanced test cases",
    path: "/docs/advanced/examples",
  };
  const forward = { title: "Run on Docker", path: "/docs/container/docker" };
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
        <h1>Containerized Environment</h1>
        <p>
          <code>etz</code> can run from a container image in a containerized
          development environment. You can find all etzba public container
          images in{" "}
          <Link className={"docs-link"} to="https://hub.docker.com/u/etzba">
            Dockerhub
          </Link>
          . In this section, we will use <code>docker.io/etzba/etz</code>{" "}
          container image, which is available publicly. etzba providing more
          container images that available in docker hub and if you are
          interested in their documentation, go to the{" "}
          <Link className={"docs-link"} to="/docs/products">
            Products page
          </Link>
          .
        </p>
        <h3>In this section you'll learn:</h3>
        <ul>
          <li>
            How to run <code>etz</code> container image in docker
          </li>
          <li>
            Possible ways to run <code>etz</code> in Kubernetes
          </li>
          <li>Use a public helm chart to run in Kubernetes</li>
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

const RunOnDocker = () => {
  const back = { title: "Containerization", path: "/docs/container/" };
  const forward = {
    title: "Run in Kubernetes",
    path: "/docs/container/kubernetes",
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
        <h1>Run etz in Docker</h1>
        <p>
          Although <code>etz</code> binary file doesn't have any package
          dependencies while running in a Linux or Mac machines and is super
          easy to run, sometimes it is preferred or needed to run as a container
          in docker development environment.
        </p>
        <h3>Use docker run only with additional etz commands</h3>
        <p>
          Before try to run <code>etz</code> as a docker container, you need to
          decide which kind of load test to run and possibly to prepare an
          execution file or general config file in advance. To make it easy,
          let's start first by running a docker container with only commands
          instead of running it with an execution file:
        </p>
        <CodeBlock
          type="term"
          code={
            "docker run -t --rm docker.io/etzba/etz etz api \\\n   --url=https://etzba.com --method=GET \\\n   --workers=2 --rps=10 --duration=2s"
          }
        />
        <br></br>
        <h3>Run a container with mounted execution file</h3>
        <p>
          In this section, we will mount a YAML file (execution or general
          config file) to the container and run it. If you need to refresh your
          mind how to create an execution file or a general config file, go back
          to{" "}
          <Link className={"docs-link"} to="/docs/setup">
            setup test cases
          </Link>{" "}
          page and create a YAML file for the load test.
        </p>
        <p>
          When ready, mount the YAML file to the container using the{" "}
          <code>-v</code> option, to mount the file from your local volume:
        </p>
        <CodeBlock
          type="term"
          code={`docker run -t -v /path/to/yaml/file:/data \\\n   --rm docker.io/etzba/etz etz api \\\n   --exec=/data/locations.yaml \\\n   --workers=2 --rps=10 --duration=2s`}
        />
        <br></br>
        <h3>Add environment variables to docker command</h3>
        <p>
          In some cases, we would like to take advantage of built-in environment
          variables of etzba
        </p>
        <CodeBlock
          type="term"
          code={
            "docker run -t -v /path/to/yaml/file:/data \\\n   -e ETZBA_POSTGRES_DB=etzba \\\n   -e ETZBA_POSTGRES_HOST=localhost \\\n   -e ETZBA_POSTGRES_PORT=5432 \\\n   -e ETZBA_POSTGRES_USER=etzba \\\n   -e ETZBA_POSTGRES_PASSWORD=Pass1234 \\\n   --rm docker.io/etzba/etz etz pg \\\n   --exec=/data/executions.yaml \\\n   --duration=3s --workers=2"
          }
        />
        <h3>Build a whole test case environment with Docker-Compose</h3>
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

const RunInKubernetes = () => {
  const back = { title: "Run on Docker", path: "/docs/container/docker" };
  const forward = { title: "Install with helm", path: "/docs/container/helm" };
  const interestLinks = [
    {
      title: "etzba products",
      path: "/docs/products",
    },
    {
      title: "Run etz in argo workflow",
      path: "/docs/ci/argo",
    },
  ];
  return (
    <div>
      <section className="section">
        <h1>Kubernetes setup</h1>
        <h3>Why Kubernetes?</h3>
        <p>
          Docker containers fit perfectly to a local development environment,
          but it lacks the ability to tune the service you are testing and
          imitating real production environment. In Docker, you can't assign
          resources, like memory, CPU or GPU in an environment that could scale
          nodes up and down. For this reason, it is desired to run{" "}
          <code>etz</code> in a Kubernetes clusters.
        </p>
        <InfoBlock
          preText={
            "Kubernetes is an open-source platform that automates the deployment, scaling, and management of containerized applications. To read more about it, go to"
          }
          linkText={"Kubernetes docs"}
          linkPath={"https://kubernetes.io/docs"}
        />
        <h3>Run etz as a Kubernetes Job</h3>
        <p>
          Since <code>etz</code> container is running until the task is
          completed, it is perfect to run it as a Kubernetes job instead of
          other Kubernetes resources like deployments or stateful sets.
        </p>
        <InfoBlock
          preText={
            "Jobs represent one-off tasks that run to completion and then stop. To find out more about, go to "
          }
          linkText={"Kubernetes jobs"}
          linkPath={
            "https://kubernetes.io/docs/concepts/workloads/controllers/job/"
          }
        />
        <p>
          Here you can find a Job specification in a YAML file, to apply with{" "}
          <code>kubectl</code> inside a Kubernetes namespace:
        </p>
        <CodeBlock
          type="yaml"
          code={`apiVersion: batch/v1
kind: Job
metadata:
  name: etz
  labels:
    app: etz
spec:
  completions: 3
  parallelism: 1
  template:
    metadata:
      labels:
        app: etz
    spec:
      containers:
      - name: etz
        image: etzba/etz:v0.0.4
        command: [ "etz" ]
        args:
        - "--url=https://etzba.com"
        - "--method=GET"
        - "-d"
        - "30s"
        - "-r"
        - "2"
        imagePullPolicy: Always
        resources:
          limits:
            cpu: 1000m
            memory: 1024Mi
          requests:
            cpu: 200m
            memory: 256Mi
      restartPolicy: OnFailure
  backoffLimit: 4`}
        />
        <br></br>
        <h3>Use a ConfigMap to run load tests in Kubernetes</h3>
        <p>
          The Job in the topic above, use only <code>etz</code> commands and
          arguments to run a simple load test. In addition to that, you can also
          create a{" "}
          <Link
            className={"docs-link"}
            to="https://kubernetes.io/docs/concepts/configuration/configmap/"
          >
            ConfigMap
          </Link>
          , execution file or general config file, and mount it to the Job:
        </p>
        <CodeBlock
          type="yaml"
          code={`apiVersion: v1
kind: ConfigMap
metadata:
  name: etz-cfg
  labels:
    name: etz
data:
  config.yaml: |-
      {{ $baseUrl := printf "%s" "http://service.namespace.svc.cluster.local:8080" }}
      {{ $intSlice := makeIntSlice 1 2 3 4 }}
      {{ $sumSlice := makeIntSliceBySum 100 }}
      {{ $path := printf "%s" "/tmp" }}

      executions:
        easyCalc:
          config:
            workers: 10
            rps: 50
            duration: 5m
            output: {{ $path }}/easyCalc.json
          api:
          {{ range $sumSlice }}
            {{ $firstInt := getFloatInRange 5 10 }}
            {{ $secondInt := getFloatInRange 20 40 }}
            {{ $firstFloat := getFloatInRange 2 4 }}
            {{ $secondFloat := getFloatInRange 6 8 }}
          - url: {{ $baseUrl }}/plus
            method: POST
            payload: '[{{$firstFloat}},{{$secondFloat}}]'
          - url: {{ $baseUrl }}/minus
            method: POST
            payload: '[{{$firstFloat}},{{$secondInt}}]'
          - url: {{ $baseUrl }}/multi
            method: POST
            payload: '[{{$firstInt}},{{$secondInt}}]'
          - url: {{ $baseUrl }}/divide
            method: POST
            payload: '[{{$firstFloat}},{{$secondInt}}]'
          {{ end }}
        mediumCalc:
          config:
            workers: 50
            rps: 200
            duration: 7m
            output: {{ $path }}/mediumCalc.json
          api:
          {{ range $sumSlice }}
            {{ $firstInt := getFloatInRange 5 10 }}
            {{ $secondInt := getFloatInRange 20 40 }}
            {{ $firstFloat := getFloatInRange 2 4 }}
            {{ $secondFloat := getFloatInRange 6 8 }}
          - url: {{ $baseUrl }}/plus
            method: POST
            payload: '[{{$firstFloat}},{{$secondFloat}}]'
          - url: {{ $baseUrl }}/minus
            method: POST
            payload: '[{{$firstFloat}},{{$secondInt}}]'
          - url: {{ $baseUrl }}/multi
            method: POST
            payload: '[{{$firstInt}},{{$secondInt}}]'
          - url: {{ $baseUrl }}/divide
            method: POST
            payload: '[{{$firstFloat}},{{$secondInt}}]'
          {{ end }}
        hardCalc:
          config:
            workers: 100
            rps: 500
            duration: 5m
            output: {{ $path }}/hardCalc.json
          api:
          {{ range $sumSlice }}
            {{ $firstInt := getFloatInRange 5 10 }}
            {{ $secondInt := getFloatInRange 20 40 }}
            {{ $firstFloat := getFloatInRange 2 4 }}
            {{ $secondFloat := getFloatInRange 6 8 }}
          - url: {{ $baseUrl }}/plus
            method: POST
            payload: '[{{$firstFloat}},{{$secondFloat}}]'
          - url: {{ $baseUrl }}/minus
            method: POST
            payload: '[{{$firstFloat}},{{$secondInt}}]'
          - url: {{ $baseUrl }}/multi
            method: POST
            payload: '[{{$firstInt}},{{$secondInt}}]'
          - url: {{ $baseUrl }}/divide
            method: POST
            payload: '[{{$firstFloat}},{{$secondInt}}]'
          {{ end }}`}
        />
        <p>
          In order to mount the config map to the Job, the Job specification
          should include a volume and a volume mount and a different set of
          commands and args:
        </p>
        <CodeBlock
          type="yaml"
          code={`apiVersion: batch/v1
kind: Job
metadata:
  name: etz
  labels:
    app: etz
spec:
  completions: 3
  parallelism: 1
  template:
    metadata:
      labels:
        app: etz
    spec:
      containers:
      - name: etz
        image: etzba/etz:latest
        command: [ "etz", "--config=/data/config.yaml" ]
        volumeMounts:
          - name: etz-cfg
            mountPath: /data/config.yaml
            subPath: config.yaml
        imagePullPolicy: Always
        resources:
          limits:
            cpu: 2000m
            memory: 8192Mi
          requests:
            cpu: 100m
            memory: 1024Mi
      volumes:
        - name: etz-cfg
          configMap:
            name: etz-cfg
      restartPolicy: OnFailure
  backoffLimit: 4`}
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

const InstallWithHelm = () => {
  const back = {
    title: "Run in Kubernetes",
    path: "/docs/container/kubernetes",
  };
  const forward = { title: "Continues integration", path: "/docs/ci/" };
  const interestLinks = [
    {
      title: "etzba products",
      path: "/docs/products",
    },
    {
      title: "Run etz in argo workflow",
      path: "/docs/ci/argo",
    },
  ];
  return (
    <div>
      <section className="section">
        <h1>Install with helm</h1>
        <p>
          Helm charts help installing resources in Kubernetes cluster faster and
          write specifications more efficiently than regular Kubernetes YAML
          specifications. You can fork or clone{" "}
          <Link className={"docs-link"} to="https://github.com/etzba/charts">
            etzba helm charts
          </Link>{" "}
          and configure it the way you need it, or add it to existing resources
          as you wish.
        </p>
        <InfoBlock
          preText={
            "A Helm chart is a package that contains all the resource definitions, configuration files, and templates needed to run an application or service inside a Kubernetes cluster."
          }
          linkText={"Read helm docs"}
          linkPath={"https://helm.sh/docs/"}
        />
        <p>
          By adding etzba helm repositories to <code>helm</code>, everything can
          run directly from your terminal:
        </p>
        <CodeBlock
          type="term"
          code={`helm repo add etzba https://raw.githubusercontent.com/etzba/charts/master/
helm repo update
helm repo list`}
        />
        <p>
          To install <code>etz</code> chart in a new namespace, using api
          execution directly from command and args:
        </p>
        <CodeBlock
          type="term"
          code={`helm install etz etzba/etz -n etz --create-namespace --set etz.executionType=api --set etz.commandArgs[0]="--url=https://etzba.com" --set etz.commandArgs[1]="--method=GET" --set etz.commandArgs[2]="-r=2" --set etz.commandArgs[3]="-d=30s"
`}
        />
        <p>
          But there are more ways to setup the chart by reading the chart and
          the comments on the values.yaml file in{" "}
          <Link className={"docs-link"} to="https://github.com/etzba/charts">
            github repository
          </Link>
          . Feel free to play with the chart in a way that fits your environment
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

export {
  ContainerizedEnvironment,
  RunOnDocker,
  RunInKubernetes,
  InstallWithHelm,
};
