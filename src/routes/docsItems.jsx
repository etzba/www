import { AdvancedConfiguration, UseGoTemplates } from "../pages/Docs/AdvancedData";
import { CIIntegration, CreateArgoWorkflowTemplate, IntegrateInGitLabCI } from "../pages/Docs/CIData";
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
import { RunLoadTests, RunWithDocker } from "../pages/Docs/RunData";
import Welcome from "../pages/Docs/WelcomeData";

export const DocsItems = [
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
        title: "Available commands",
        label: "Commands",
        path: "commands",
        element: <Commands />,
      },
      {
        id: "yaml",
        title: "Execute load tests with a yaml file",
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
        id: "gotmpl",
        title: "Use built-in go template functions",
        label: "Gotmpl",
        path: "gotmpl",
        element: <UseGoTemplates />,
      },
    ],
  },
  {
    id: "run",
    title: "Running Load Tests",
    path: "run",
    label: "Run",
    element: <RunLoadTests />,
    children: [
      {
        id: "docker",
        title: "Use etzba test servers with docker",
        label: "Docker",
        path: "docker",
        element: <RunWithDocker />,
      },
    ],
  },
  {
    id: "ci",
    title: "CI integration",
    path: "ci",
    label: "CI",
    element: <CIIntegration />,
    children: [
      {
        id: "argo",
        title: "Run etz as argo workflow",
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
];
