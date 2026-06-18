import ToolsPage from "../pages/Tools/ToolsPage";
import AboutPage from "../pages/About/AboutPage";
import DocsPage from "../pages/Docs/DocsPage";

export const HeaderItems = [
  {
    id: "docs",
    title: "Docs",
    path: "/docs/welcome",
    content: <DocsPage />,
    exact: true,
  },
  {
    id: "tools",
    title: "Tools",
    path: "/tools",
    content: <ToolsPage/>,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    content: <AboutPage/>,
  },
];
