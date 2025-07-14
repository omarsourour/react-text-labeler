import { createContext, PropsWithChildren, useContext } from 'react';
import { RootStore } from '../stores/RootStore';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useRootStore = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error('useRootStore must be used within a RootStoreProvider');
  }

  return context;
};

export const RootStoreProvider = (props: PropsWithChildren<{ rootStore: RootStore }>) => {
  const { rootStore, children } = props;

  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>;
};
