import { useRoutes } from 'react-router-dom';
import { routes } from './config';
import { Suspense } from 'react';
import GuestLayout from 'base/layouts/guest';
import DefaultLayout from 'base/layouts/default';
function AppRoutes() {
  const routingConfig = useRoutes(routes);
  const isAuth = localStorage.getItem('logged');
  return isAuth ? (
    <GuestLayout content={<Suspense>{routingConfig}</Suspense>} />
  ) : (
    <div>
      <DefaultLayout content={<Suspense>{routingConfig}</Suspense>} />
    </div>
  );
}

export default AppRoutes;
