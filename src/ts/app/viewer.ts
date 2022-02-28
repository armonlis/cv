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
    console.log(event.detail.structure)
    document.querySelector(`#${this.startLoaderId}`).remove();
    let appDiv = document.querySelector('#app');
    if (appDiv) { 
      appDiv.replaceWith(event.detail.structure);
    } else {
      document.querySelector('body').append(event.detail.structure);
    };
    document.dispatchEvent(this.doneEvent);
  };
};