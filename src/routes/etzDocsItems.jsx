import {
  AdvancedConfiguration,
  AdvancedExamples,
  EtzEnvironmentVariables,
  UseGoTemplates,
  YAMLSyntax,
} from "../pages/Docs/AdvancedData";
import {
  ContinuesIntegration,
  CreateArgoWorkflowTemplate,
  IntegrateInGitLabCI,
} from "../pages/Docs/CIData";
import {
  Setup,
  ApiTestCases,
  PostgresTestCases,
  FileTestCases,
  GeneralConfig,
} from "../pages/Docs/SetupData";
import {
  GettingStarted,
  Install,
  Run,
  Commands,
  Yaml,
} from "../pages/Docs/GettingStartedData";
import { ContainerizedEnvironment, InstallWithHelm, RunInKubernetes, RunOnDocker } from "../pages/Docs/ContainerizationData";
import Welcome from "../pages/Docs/WelcomeData";
import {
  ImageUpdater,
  Products,
  SecretDistributor,
} from "../pages/Docs/ProductsData";

export const EtzDocsItems = [
  {
    id: "Welcome",
    title: "Welcome",
    path: "welcome",
    label: "Welcome",
    element: <Welcome />,
    exact: true,
  },
  {
    id: "start",
    title: "Getting started",
    path: "start",
    label: "Started",
    element: <GettingStarted />,
    children: [
      {
        id: "install",
        title: "Install etz",
        path: "install",
        label: "Install",
        element: <Install />,
      },
      {
        id: "run",
        title: "Running etz from terminal",
        label: "Run",
        path: "run",
        element: <Run />,
      },
      {
        id: "commands",
        title: "Commands and Arguments",
        label: "Commands",
        path: "commands",
        element: <Commands />,
      },
      {
        id: "yaml",
        title: "Run with a YAML file",
        label: "Yaml",
        path: "yaml",
        element: <Yaml />,
      },
    ],
  },
  {
    id: "setup",
    title: "Setup Test Cases",
    path: "setup",
    label: "Setup",
    element: <Setup />,
    children: [
      {
        id: "api",
        title: "Create api test cases",
        label: "Api",
        path: "api",
        element: <ApiTestCases />,
      },
      {
        id: "postgres",
        title: "Measure postgres queries time",
        label: "Postgres",
        path: "postgres",
        element: <PostgresTestCases />,
      },
      {
        id: "file",
        title: "Test http file upload speed",
        label: "File",
        path: "file",
        element: <FileTestCases />,
      },
      {
        id: "general",
        title: "Use general configuration with multiple scenarios",
        label: "General",
        path: "general",
        element: <GeneralConfig />,
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Configuration",
    path: "advanced",
    label: "Advanced",
    element: <AdvancedConfiguration />,
    children: [
      {
        id: "env",
        title: "Environment variables",
        label: "Env",
        path: "env",
        element: <EtzEnvironmentVariables />,
      },
      {
        id: "syntax",
        title: "More YAML syntax",
        label: "Syntax",
        path: "syntax",
        element: <YAMLSyntax />,
      },
      {
        id: "gotmpl",
        title: "Built-in golang templates functions",
        label: "Gotmpl",
        path: "gotmpl",
        element: <UseGoTemplates />,
      },
      {
        id: "examples",
        title: "Advanced test cases examples",
        label: "Examples",
        path: "examples",
        element: <AdvancedExamples />,
      },
    ],
  },
  {
    id: "container",
    title: "Containerization",
    path: "container",
    label: "Container",
    element: <ContainerizedEnvironment />,
    children: [
      {
        id: "docker",
        title: "Run on docker",
        label: "Docker",
        path: "docker",
        element: <RunOnDocker />,
      },
      {
        id: "kubernetes",
        title: "Run in Kubernetes",
        label: "kubernetes",
        path: "kubernetes",
        element: <RunInKubernetes />,
      },
      {
        id: "helm",
        title: "Install with helm",
        label: "helm",
        path: "helm",
        element: <InstallWithHelm />,
      },
    ],
  },
  {
    id: "ci",
    title: "Continues Integration",
    path: "ci",
    label: "CI",
    element: <ContinuesIntegration />,
    children: [
      {
        id: "argo",
        title: "Run etz in argo workflow",
        label: "Argo",
        path: "argo",
        element: <CreateArgoWorkflowTemplate />,
      },
      {
        id: "gitlab",
        title: "Integrate etz in gitlab ci",
        label: "Gitlab",
        path: "gitlab",
        element: <IntegrateInGitLabCI />,
      },
    ],
  },
  {
    id: "products",
    title: "Products",
    path: "products",
    label: "Products",
    element: <Products />,
    children: [
      {
        id: "image",
        title: "Image Updater",
        path: "image",
        label: "Image",
        element: <ImageUpdater />,
      },
      {
        id: "secret",
        title: "Secret Distributor",
        label: "Secret",
        path: "secret",
        element: <SecretDistributor />,
      },
    ],
  },
];
