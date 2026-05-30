import Welcome from "../pages/Welcome";
import Install from "../pages/Install";
import AdvancedConfig from "../pages/AdvancedConfig";
import Usage from "../pages/Usage";
import InstallLinux from "../pages/InstallLinux";
import InstallMacOS from "../pages/InstallMacOS";
import GettingStarted from "../pages/GettingStarted";
import RunEtz from "../pages/RunEtz";
import SimpleExec from "../pages/SimpleExec";
import TestCases from "../pages/TestCases";
import GeneralConfig from "../pages/GeneralConfig";
import RunWithExecutionFile from "../pages/RunWithExecutionFile";
import SqlExec from "../pages/SQL";
import ApiExec from "../pages/API";
import FileExec from "../pages/FileExec";
import RunWithGeneral from "../pages/RunWithGeneral";
import CliArgs from "../pages/CLIArgs";
import UsageExamples from "../pages/UsageExamples";
import AuthFile from "../pages/AuthFile";
import GoTemplatesFunctions from "../pages/GoTemplatesFunctions";

// https://coolsymbol.com/
export const NavItems = [
  {
    id: "Welcome",
    title: "Welcome",
    path: "/",
    label: "Welcome",
    icon: "⚒️",
    content: <Welcome />,
    exact: true,
  },
  {
    id: "install",
    title: "Install",
    path: "/install",
    label: "Install",
    icon: "⚒️",
    content: <Install />,
    children: [
      {
        id: "linux",
        title: "Install on Linux",
        path: "/install/linux",
        label: "Linux",
        content: <InstallLinux />,
      },
      {
        id: "macos",
        title: "Install on MacOS",
        path: "/install/osx",
        label: "Mac",
        content: <InstallMacOS />,
      },
    ],
  },
  {
    id: "started",
    title: "Getting started",
    path: "/start",
    label: "Started",
    icon: "⚒️",
    content: <GettingStarted />,
    children: [
      {
        id: "run",
        title: "Running etz from terminal",
        label: "Run",
        path: "/start/run",
        content: <RunEtz />,
      },
      {
        id: "simple",
        title: "Run etz with execution file",
        label: "Simple Execution",
        path: "/start/exec",
        content: <SimpleExec />,
      },
    ],
  },
  {
    id: "config",
    title: "Configuring Test Cases",
    path: "/config",
    label: "Started",
    icon: "⚒️",
    content: <TestCases />,
    children: [
      {
        id: "general",
        title: "Run etz with general configuration",
        label: "General",
        path: "/config/general",
        content: <GeneralConfig />,
      },
      {
        id: "exec",
        title: "Run etz with execution file",
        label: "Execution",
        path: "/config/executions",
        content: <RunWithExecutionFile />,
      },
    ],
  },
  {
    id: "usage",
    title: "Usage",
    path: "/usage",
    label: "Usage",
    icon: "⚒️",
    content: <Usage />,
    children: [
      {
        id: "general",
        title: "Run tests with general configuration file",
        path: "/usage/general",
        content: <RunWithGeneral />,
      },
      {
        id: "execution",
        title: "Run test with execution file",
        path: "/usage/execution",
        content: <RunWithExecutionFile />,
      },
      {
        id: "api",
        title: "Configuring api executions",
        path: "/config/executions/api",
        element: <ApiExec />,
      },
      {
        id: "sql",
        title: "Configuring sql executions",
        path: "/config/executions/sql",
        element: <SqlExec />,
      },
      {
        id: "file",
        title: "Configuring file executions",
        path: "/config/executions/file",
        element: <FileExec />,
      },
      {
        id: "cli",
        title: "Running etz from command line",
        path: "/usage/cli",
        content: <CliArgs />,
      },
      {
        id: "examples",
        title: "Examples",
        path: "/usage/examples",
        content: <UsageExamples />,
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced configuration",
    path: "/advanced",
    content: <AdvancedConfig />,
    icon: "⚒️",
    children: [
      {
        id: "auth",
        title: "Set general authentication",
        path: "/advanced/auth",
        content: <AuthFile />,
      },
      {
        id: "go_func",
        title: "Use go functions inside a yaml template",
        path: "/advanced/gofunc",
        content: <GoTemplatesFunctions />,
      },
    ],
  },
];
