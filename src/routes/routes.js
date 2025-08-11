import Home from '../pages/Home';
import Docs from '../pages/Run';
import NotFound from '../pages/NotFound';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/docs/*', element: <Docs /> },
  { path: '*', element: <NotFound /> },
];