import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { lazy, Suspense, type PropsWithChildren } from 'react';
import LoadingSpinner from '../Views/LoadingSpinner';

const Home = lazy(() => import('../Views/home/Home'));
const Products = lazy(() => import('../Views/products/Products'));
const Details = lazy(() => import('../Views/details/Details'));
const About = lazy(() => import('../Views/about/About'));
const Contact = lazy(() => import('../Views/contact/Contact'));

import NotFound from '../Views/NotFound';
import PublicLayout from '../layouts/PublicLayout';

const LazyWrapper = ({ children }: PropsWithChildren) => (
  <Suspense fallback={
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoadingSpinner />
    </div>
  }>{children}</Suspense>
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
      {
        path: 'details/:id',
        element: (
          <LazyWrapper>
            <Details />
          </LazyWrapper>
        ),
      },
      {
        path: 'about',
        element: (
          <LazyWrapper>
            <About />
          </LazyWrapper>
        ),
      },
      {
        path: 'contact',
        element: (
          <LazyWrapper>
            <Contact />
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

export const router = createBrowserRouter(routes, {
  basename: '/car-rental',
});
