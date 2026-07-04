import { AdvancedConfiguration, UseGoTemplates } from "../pages/Docs/AdvancedData";
import { CIIntegration, CreateArgoWorkflowTemplate, IntegrateInGitLabCI } from "../pages/Docs/CIData";
import {
  GeneralConfig,
  Commands,
  RunWithExecutionFile,
  TestCases,
} from "../pages/Docs/ConfigurationData";
import {
  GettingStarted,
  InstallEtz,
  RunEtz,
  SimpleExec,
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
        element: <InstallEtz />,
      },
      {
        id: "run",
        title: "Running etz from terminal",
        label: "Run",
        path: "run",
        element: <RunEtz />,
      },
      {
        id: "simple",
        title: "Run etz with execution file",
        label: "Simple Execution",
        path: "exec",
        element: <SimpleExec />,
      },
    ],
  },
  {
    id: "config",
    title: "Configuring Test Cases",
    path: "config",
    label: "Config",
    element: <TestCases />,
    children: [
      {
        id: "commands",
        title: "Available commands",
        label: "Commands",
        path: "commands",
        element: <Commands />,
      },
      {
        id: "exec",
        title: "Configuring execution file",
        label: "Execution",
        path: "executions",
        element: <RunWithExecutionFile />,
      },
      {
        id: "general",
        title: "Run etz with general configuration",
        label: "General",
        path: "general",
        element: <GeneralConfig />,
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Test Cases Configuration",
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
    title: "Run etz Load Tests",
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
