import { ConfigStore } from '@/stores/ConfigStore';

export class RootStore {
  public configStore: ConfigStore;

  constructor() {
    this.configStore = new ConfigStore();
  }
}
