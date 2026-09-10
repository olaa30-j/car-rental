import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../Views/LoadingSpinner';

// Lazy load pages
const Home = lazy(() => import('../Views/home/Home'));

// Import NotFound directly (not lazy) for faster loading
import NotFound from '../Views/NotFound';
import PublicLayout from '../layouts/PublicLayout';

const LazyWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

export const routes = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: (
          <LazyWrapper>
            <Home />
          </LazyWrapper>
        ),
      }
    ],
  },
  // NotFound outside RootLayout - no header, full page
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);