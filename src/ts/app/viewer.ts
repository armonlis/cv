import { IViewerConfig, IViewer, IElement } from "./interfaces";
export default class Viewer implements IViewer {
  readonly startLoaderId: string;
  readonly toControllerEventName: string;
    
  constructor(options: IViewerConfig) {
    const { startLoaderId, toViewerEventName, toControllerEventName } = options;
    this.startLoaderId = startLoaderId;
    this.toControllerEventName = toControllerEventName ?? 'toController';
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
    document.dispatchEvent(new CustomEvent(`${this.toControllerEventName}`, {
      detail: {
        from: 'viewer',
        action: 'addListeners'
      }
    }))
  };

  handler(event: CustomEvent) {
    const { from, action, details } = event.detail;
    const data = details?.data;
    const target = details?.target;
    switch (from) {
      case 'model': switch (action) {
        case 'structure': this.view(data); return;
        default: throw new Error('The viewer does not know this action from the model.');
      };
      case 'controller': switch (action) {
        case 'activeNavBttn':
          
          document.querySelector(`${target}`).classList.add('active'); 
          return;
        default: throw new Error('The viewer does not know this action from the model.');
      }; 
      default : throw new Error('The viewer does not know this sender.')
    }
  };
};