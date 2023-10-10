import React, { lazy, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router';
import type { ComponentType, PropsWithChildren, FC } from 'react';

/*
 * Suspense is a component that wraps the custom components and
 * enables them to communicate to React that they are waiting
 * for some data to load before the component is rendered.
 */
const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const LazyComponents: FC<P> = (props: PropsWithChildren<P>) => {
    return (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Component {...props} />
      </Suspense>
    );
  };

  return LazyComponents;
};
/* Lazy Loaded Todos Pages for code splitting */
const WorkTodosPage = Loadable(
  lazy(() => {
    return import('./pages/WorkTodosPage');
  }),
);
const ShoppingListPage = Loadable(
  lazy(() => {
    return import('./pages/ShoppingListPage');
  }),
);
const LoginPage = Loadable(
  lazy(() => {
    return import('./pages/LoginPage');
  }),
);
type Paths = { work: string; shoppingList: string; auth: string };
/* we will reuse this in creating todos */
export const pathNames: Paths = {
  auth: '/auth',
  shoppingList: '/shopping-list',
  work: '/',
};
