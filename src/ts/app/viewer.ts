import { IViewerConfig, IViewer, IElement } from "./interfaces";
export default class Viewer implements IViewer {
  readonly startLoaderId: string;
  readonly modelReadyEventName: string;
  readonly doneEvent: Event;
    
  constructor(options: IViewerConfig) {
    const { startLoaderId, toViewerEventName } = options;
    this.startLoaderId = startLoaderId;
    document.addEventListener(`${toViewerEventName ?? 'toViewer'}`, (event: CustomEvent) => this.handler(event));
  };

  buildHTML(data: IElement[]): HTMLElement {
    const app = document.createElement('div');
    app.id = 'app';
    data.forEach(el => {
      const node = document.createElement(el.tag);
      node.id = el.id;
      node.innerHTML = el.fill;
      app.append(node);
    });
    return app;
  };

  view(data: IElement[]) {
    const startLoader = document.querySelector(`#${this.startLoaderId}`);
    if (startLoader) { startLoader.remove() }
    let appDiv = document.querySelector('#app');
    if (appDiv) { appDiv.remove() }
      appDiv = this.buildHTML(data);
      document.querySelector('body').append(appDiv);
  };

  handler(event: CustomEvent) {
    const { from, action, details } = event.detail;
    const { data } = details;
    switch (from) {
      case 'model': switch (action) {
        case 'structure': this.view(data); return;
        default: throw new Error('The viewer does not know this action from the model.')
      } 
      default : throw new Error('The viewer does not know this sender.')
    }
  };
};