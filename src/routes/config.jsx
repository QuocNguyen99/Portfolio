import { lazy } from 'react';

const HomePage = lazy(() => import('base/pages/home'));

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
];
export { routes };
