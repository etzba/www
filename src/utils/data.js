import GeneralConfig from "../pages/GeneralConfig";
import Home from "../pages/Home";
import Install from "../pages/Install";
import InstallLinux from "../pages/InstallLinux";
import InstallMacOS from "../pages/InstallMacOS";
import RunEtz from "../pages/RunEtz";
import RunWithExecutionFile from "../pages/RunWithExecutionFile";
import SimpleExec from "../pages/SimpleExec";
import TestCases from "../pages/TestCases";

// https://coolsymbol.com/
export const NavItems = [
    {
        id: "home",
        title: "Home",
        path: '/',
        label: "Home",
        icon: "⚒️",
        content: <Home />,
        exact: true,
    },
    {
        id: "install",
        title: "Install",
        path: '/install',
        label: "Install",
        icon: "⚒️",
        content: <Install />,
        children: [
            { id: "linux", title: "Install on Linux", label: "Linux", path: '/install/linux', content: <InstallLinux title="Linux installation" text="Install on a Linux machine" /> },
            { id: "macos", title: "Install on MacOS", label: "Mac", path: '/install/osx', content: <InstallMacOS title="MacOS installation" text="Install on a macbook" /> },
        ],
    },
    {
        id: "started",
        title: 'Getting started',
        path: '/start',
        label: "Started",
        icon: "⚒️",
        content: <Install />,
        children: [
            { id: "run", title: "Running etz from terminal", label: "Run", path: '/start/run', content: <RunEtz title="Run etz" text="Running etz" /> },
            { id: "simple", title: "Run etz with execution file", label: "Simple Execution", path: '/start/exec', content: <SimpleExec title="Using simple execution file" text="Using simple execution file" /> },
        ],
    },
    {
        id: "config",
        title: 'Configuring Test Cases',
        path: '/config',
        label: "Started",
        icon: "⚒️",
        content: <TestCases />,
        children: [
            { id: "general", title: "Run etz with general configuration", label: "General", path: '/config/general', content: <GeneralConfig title="General configuration" text="General configuration" /> },
            { id: "exec", title: "Run etz with execution file", label: "Execution", path: '/config/executions', content: <RunWithExecutionFile title="Using simple execution file" text="Using simple execution file" /> },
        ],
    },
];