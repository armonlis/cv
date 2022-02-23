import { IViewerConfig, IViewer } from "./interfaces";
export default class Viewer implements IViewer {
  readonly startLoaderId: string;
  readonly modelReadyEventName: string;
  readonly doneEvent: Event;
    
  constructor(options: IViewerConfig) {
    const { startLoaderId, modelReadyEventName, doneEventName } = options;
    this.startLoaderId = startLoaderId;
    document.addEventListener(`${modelReadyEventName ?? 'modReady'}`, (event: CustomEvent) => this.view(event));
    this.doneEvent = new Event(`${doneEventName ?? 'viewDone'}`);
  };

  view(event: CustomEvent) {
    document.querySelector(`#${this.startLoaderId}`).remove();
    let appDiv = document.querySelector('#app');
    if (appDiv) { appDiv.remove() }
    appDiv = document.createElement('div');
    appDiv.id = 'app';
    document.querySelector('body').append(appDiv);
    event.detail.structure.forEach((elem: HTMLElement) => {
      document.querySelector('#app').append(elem);
    });
    document.dispatchEvent(this.doneEvent);
  };
};