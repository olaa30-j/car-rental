import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { lazy, Suspense, type PropsWithChildren } from 'react';
import LoadingSpinner from '../Views/LoadingSpinner';

const Home = lazy(() => import('../Views/home/Home'));
const Products = lazy(() => import('../Views/products/Products'));

import NotFound from '../Views/NotFound';
import PublicLayout from '../layouts/PublicLayout';

const LazyWrapper = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);

export const routes: RouteObject[] = [
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
      },
      {
        path: 'products',  
        element: (
          <LazyWrapper>
            <Products />
          </LazyWrapper>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);