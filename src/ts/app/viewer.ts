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
  
  private buildElement(data: IElement): HTMLElement {
    const node = document.createElement(data.tag);
    node.id = data.id;
    node.innerHTML = data.fill;
    return node;
  };

  private buildHTML(data: IElement[]): HTMLElement {
    const app = document.createElement('div');
    app.id = 'app';
    data.forEach(el => app.append(this.buildElement(el)));
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
    }));
    document.dispatchEvent(new CustomEvent(`${this.toControllerEventName}`, {
      detail: {
        from: 'viewer',
        action: 'launchFunctions'
      }
    }));
  };

  handler(event: CustomEvent) {
    const { from, action, details } = event.detail;
    const data = details?.data;
    const target = details?.target;
    switch (from) {
      case 'model': switch (action) {
        case 'structure': this.view(data); return;
        case 'resetMain':
          document.querySelectorAll('.app-nav__elem').forEach(el => el.classList.remove('app-nav__elem_active'));
          document.querySelector('#app-main').replaceWith(this.buildElement(data));
          return;
        case 'changeMain':
          document.querySelectorAll('.app-nav__elem').forEach(el => el.classList.remove('app-nav__elem_active'));
          document.querySelector('#app-main').replaceWith(this.buildElement(data));
          return;
        default: throw new Error('The viewer does not know this action from the model.');
      };
      case 'controller': switch (action) {
        case 'activeNavBttn':
          document.querySelectorAll('.app-nav__elem').forEach(el => el.classList.remove('app-nav__elem_active'));
          document.querySelector(`${target}`).classList.add('app-nav__elem_active'); 
          return;
        default: throw new Error('The viewer does not know this action from the model.');
      }; 
      default : throw new Error('The viewer does not know this sender.')
    }
  };
};