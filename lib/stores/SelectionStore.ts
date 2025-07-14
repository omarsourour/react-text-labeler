import { ConfigStore } from '@/stores/ConfigStore';
import { action, observable } from 'mobx';

const NOOP_VALUE = -1;

export class SelectionStore {
  @observable public accessor hoverEnd: number;
  @observable public accessor hoverStart: number;
  @observable public accessor isDragging: boolean;
  @observable public accessor selectionEnd: number;
  @observable public accessor selectionStart: number;

  private readonly _configStore: ConfigStore;

  constructor(configStore: ConfigStore) {
    this.isDragging = false;
    this.hoverEnd = NOOP_VALUE;
    this.hoverStart = NOOP_VALUE;
    this.selectionEnd = NOOP_VALUE;
    this.selectionStart = NOOP_VALUE;

    this._configStore = configStore;
  }

  @action
  public resetHover(): void {
    this.hoverEnd = NOOP_VALUE;
    this.hoverStart = NOOP_VALUE;
  }

  @action
  public resetSelection(): void {
    this.isDragging = false;
    this.selectionEnd = NOOP_VALUE;
    this.selectionStart = NOOP_VALUE;
  }

  @action
  public setIsDragging(isDragging: boolean): void {
    if (!this._configStore.isSelectionEnabled) {
      return;
    }

    this.isDragging = isDragging;
  }
}
