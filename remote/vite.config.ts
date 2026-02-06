import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? './' : '/',
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      dts: false,
      exposes: {
        './mount': './src/mount.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5173,
    strictPort: true,
    origin: 'http://localhost:5173',
    cors: true
  },
  build: {
    target: 'chrome89'
  }
}));
