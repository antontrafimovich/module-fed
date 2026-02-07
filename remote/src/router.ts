import { createHistoryRouter, type HistoryRouter } from 'atomic-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import {
  assessmentDetailsRoute,
  assessmentRoute,
  homeRoute,
  notFoundRoute
} from './routes';

export type RoutingMode = 'browser' | 'memory';

export interface AppRouterOptions {
  mode?: RoutingMode;
  initialPath?: string;
}

const normalizePath = (path: string | undefined): string => {
  if (!path || path.trim().length === 0) {
    return '/';
  }

  return path.startsWith('/') ? path : `/${path}`;
};

export const createAppRouter = (options: AppRouterOptions = {}): HistoryRouter => {
  const initialPath = options.initialPath || '';
  const router = createHistoryRouter({
    routes: [
      { path: initialPath || '/', route: homeRoute },
      { path: `${initialPath}/assessment`, route: assessmentRoute },
      { path: `${initialPath}/assessment-details`, route: assessmentDetailsRoute }
    ],
    notFoundRoute
  });

  if (options.mode === 'memory') {
    router.setHistory(
      createMemoryHistory({
        initialEntries: [normalizePath(options.initialPath)]
      })
    );

    return router;
  }

  router.setHistory(createBrowserHistory());

  return router;
};
