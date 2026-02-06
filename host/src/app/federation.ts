import { createInstance } from '@module-federation/enhanced/runtime';

export interface ReactRemoteMountModule {
  mount: (container: HTMLElement) => () => void;
}

const moduleFederationInstance = createInstance({
  name: 'host',
  remotes: [
    {
      name: 'remote',
      entry: 'http://localhost:5173/remoteEntry.js',
      type: 'module'
    }
  ]
});

let remoteMountModulePromise: Promise<ReactRemoteMountModule> | undefined;

export const loadReactRemoteMountModule = (): Promise<ReactRemoteMountModule> => {
  if (!remoteMountModulePromise) {
    remoteMountModulePromise = (
      moduleFederationInstance.loadRemote('remote/mount') as Promise<ReactRemoteMountModule>
    ).catch((error) => {
      remoteMountModulePromise = undefined;
      throw error;
    });
  }

  return remoteMountModulePromise;
};
