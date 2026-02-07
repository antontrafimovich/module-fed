import { mount } from './mount.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Could not find root element for React remote.');
}

mount(rootElement, { routingMode: 'browser' });
