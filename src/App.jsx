import { Routes, Route, Navigate } from "react-router-dom";
import DocsPage from "./pages/Docs/DocsPage";
import AboutPage from "./pages/About/AboutPage";
import ToolsPage from "./pages/Tools/ToolsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DocsItems } from "./routes/docsItems";
import { HeaderItems } from "./routes/headerItems";
import UseMediaQuery from "./utils/media";

const App = () => {
  const isMobile = UseMediaQuery("(max-width: 768px)");
  return (
    <>
      <div className="layout">
        <Header items={HeaderItems} isMobile={isMobile} />
        <div className="content">
          <Routes>
            <Route path="/">
              <Route
                path=""
                element={<Navigate to="/docs/welcome" replace />}
              />
              <Route
                path="docs"
                element={<DocsPage items={DocsItems} isMobile={isMobile} />}
              >
                <Route
                  index
                  element={<Navigate to="/docs/welcome" replace />}
                />
                {DocsItems.map((item, idx) =>
                  item.children ? (
                    <Route key={idx} path={item.path}>
                      <Route index element={item.element} />
                      {item.children.map((childIten, ChildIdx) => (
                        <Route
                          key={ChildIdx}
                          path={childIten.path}
                          element={childIten.element}
                        />
                      ))}
                    </Route>
                  ) : (
                    <Route key={idx} path={item.path} element={item.element} />
                  ),
                )}
              </Route>
              <Route path="about" element={<AboutPage />} />
              <Route path="tools" element={<ToolsPage />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
