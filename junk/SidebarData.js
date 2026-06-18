import {
  FaHome,
  FaSnowboarding,
  FaWrench,
  FaWhmcs,
  FaTruckMonster,
} from "react-icons/fa";
// choose icons https://react-icons.github.io/react-icons/icons/fa/
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: FaHome,
    hasDropdown: false,
  },
  {
    title: "Installation",
    path: "/install",
    hasDropdown: true,
    subPaths: [
      {
        title: "Linux",
        path: "/install/linux",
      },
      {
        title: "macOS",
        path: "/install/osx",
      },
    ],
  },
  {
    title: "Getting started",
    path: "/start",
    hasDropdown: true,
    icon: FaSnowboarding,
    subPaths: [
      {
        title: "Run etz",
        path: "/start/run",
      },
      {
        title: "Using simple execution file",
        path: "/start/exec",
      },
    ],
  },
  {
    title: "Configuring Test Cases",
    path: "/config",
    hasDropdown: true,
    icon: FaWrench,
    subPaths: [
      {
        title: "General configuration",
        path: "/config/general",
      },
      {
        title: "With execution files",
        path: "/config/executions",
        subPaths: [
          {
            title: "api",
            path: "/config/executions/api",
          },
          {
            title: "sql",
            path: "/config/executions/sql",
          },
          {
            title: "file",
            path: "/config/executions/file",
          },
        ],
      },
    ],
  },
  {
    title: "Usage",
    path: "/usage",
    hasDropdown: true,
    icon: FaTruckMonster,
    subPaths: [
      {
        title: "Running etz with General Configuration",
        path: "/usage/general",
      },
      {
        title: "Running etz with Executions File",
        path: "/usage/execution",
      },
      {
        title: "CLI Arguments",
        path: "/usage/cli",
      },
      {
        title: "Usage examples",
        path: "/usage/examples",
      },
    ],
  },
  {
    title: "Advanced Configuration",
    path: "/advanced",
    hasDropdown: true,
    icon: FaWhmcs,
    subPaths: [
      {
        title: "Using an Authentication File",
        path: "/advanced/auth",
      },
      {
        title: "Using Go Templates",
        path: "/advanced/gofunc",
      },
    ],
  },
];

const getIcon = (item) => {
  return <item.icon size={20} strokeWidth={1.5} color="#000" />;
};

export default getIcon

/*
Home
Installation
-Linux
-macOS
Getting started
-Run etz
-Using simple execution file
Configuring Test Cases
-General configuration
-Execution configurations
 -api execution
 -sql execution
 -file execution
Usage
-Running etz with General Configuration
-Running etz with Executions File
-CLI Arguments
-Usage examples
Advanced Configuration
-Using an Authentication File
-Using Go Templates
*/
