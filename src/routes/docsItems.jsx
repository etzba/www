import { GeneralConfig, RunWithExecutionFile, TestCases } from "../pages/Docs/ConfigurationData";
import {
  GettingStarted,
  RunEtz,
  SimpleExec,
} from "../pages/Docs/GettingStartedData";
import { Install, InstallLinux, InstallMacOS } from "../pages/Docs/InstallData";
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
    id: "install",
    title: "Install",
    path: "install",
    label: "Install",
    element: <Install />,
    children: [
      {
        id: "linux",
        title: "Install on Linux",
        path: "linux",
        label: "Linux",
        element: <InstallLinux />,
      },
      {
        id: "macos",
        title: "Install on MacOS",
        path: "osx",
        label: "Mac",
        element: <InstallMacOS />,
      },
    ],
  },
  {
    id: "start",
    title: "Getting started",
    path: "start",
    label: "Started",
    element: <GettingStarted />,
    children: [
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
        id: "general",
        title: "Run etz with general configuration",
        label: "General",
        path: "general",
        element: <GeneralConfig />,
      },
      {
        id: "exec",
        title: "Run etz with execution file",
        label: "Execution",
        path: "executions",
        element: <RunWithExecutionFile />,
      },
    ],
  },
];
