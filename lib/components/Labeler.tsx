import { RootStoreProvider } from '@/components/RootStoreContext';
import { RootStore } from '@/stores/RootStore';
import { useLocalObservable } from 'mobx-react';

export const Labeler = () => {
  const rootStore = useLocalObservable(() => new RootStore());

  return (
    <RootStoreProvider rootStore={rootStore}>
      <div>Hello world! This is the Labeler component.</div>
    </RootStoreProvider>
  );
};
