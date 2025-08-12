import Home from '../pages/Home';
import Install from '../pages/Install';
import Run from '../pages/Run';
import NotFound from '../pages/NotFound';
import Usage from '../pages/Usage';

export const routes = [
  { path: '/', element: <Home />, exact: true},
  { path: '/install', element: <Install /> },
  { path: '/run', element: <Run /> },
  { path: '/usage', element: <Usage/> },
  { path: '*', element: <NotFound /> },
];

export default routes;