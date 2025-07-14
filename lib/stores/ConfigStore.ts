import { observable } from 'mobx';

export class ConfigStore {
  @observable public accessor isSelectionEnabled: boolean;

  constructor() {
    this.isSelectionEnabled = true;
  }
}
