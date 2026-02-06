import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

export type Unmount = () => void;

export const mount = (container: HTMLElement): Unmount => {
  const root: Root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  return () => {
    root.unmount();
  };
};
