import Home from "../pages/Home";
import About from "../pages/About";
import Tools from "../pages/Tools";

export const HeaderItems = [
  {
    id: "docs",
    title: "Docs",
    path: "/",
    label: "Docs",
    content: <Home setSidebar={true} />,
    sidebar: true,
    exact: true,
  },
  {
    id: "tools",
    title: "Tools",
    path: "/tools",
    label: "Tools",
    sidebar: false,
    content: <Tools setSidebar={false} />,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    label: "About",
    icon: "⚒️",
    sidebar: false,
    content: <About setSidebar={false} />,
  },
];
