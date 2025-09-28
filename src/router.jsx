import {
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router';
import Header from './Components/Header';
import Aboutme from './Components/Aboutme';
import Projects from './Components/Projects/Projects';
import Technologies from './Components/Technologies/Technologies';
import Contact from './Components/Contact/Contact';

const rootRoute = createRootRoute({
  component: () => (
    <div className="relative min-h-screen flex flex-col items-center justify-start">
      <Header />
      <main className="w-full max-w-4xl flex flex-col items-center px-4 z-10">
        <Outlet />
      </main>
    </div>
  ),
});

// Child routes
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Aboutme,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects,
});

const technologiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/technologies',
  component: Technologies,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

// Router
const router = createRouter({
  routeTree: rootRoute.addChildren([
    aboutRoute,
    projectsRoute,
    technologiesRoute,
    contactRoute,
  ]),
});

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
