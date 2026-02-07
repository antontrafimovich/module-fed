import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import { RouterProvider } from 'atomic-router-react';
import App from './App.tsx';
import { createAppRouter, type RoutingMode } from './router';
import './index.css';

export type Unmount = () => void;
export interface MountOptions {
  routingMode?: RoutingMode;
  initialPath?: string;
}

export const mount = (
  container: HTMLElement,
  options: MountOptions = {}
): Unmount => {
  const root: Root = createRoot(container);
  const router = createAppRouter({
    mode: options.routingMode ?? 'browser',
    initialPath: options.initialPath
  });

  root.render(
    <StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StrictMode>
  );

  return () => {
    root.unmount();
  };
};
