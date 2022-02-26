import { IController, IListener, IControllerConfig, IListenerDetail } from "./interfaces";

export default class Controller implements IController {
  static _isCreated: boolean = false;
  readonly eventName: string;
  readonly eventChangeModelName: string;
  private listeners: IListener[];

  constructor(options: IControllerConfig = {}) {
    const { eventName, viewDoneEventName, eventChangeModelName } = options;
    if (!Controller._isCreated) {
      this.listeners = [];
      this.eventName = eventName ?? 'eventForController';
      this.eventChangeModelName == eventChangeModelName ?? 'modChange';
      Controller._isCreated = true;
    } else {
      throw new Error('The controller is allready exist.');
    }
    document.addEventListener(`${this.eventName}`, (event: CustomEvent) => this.processEvent(event));
    document.addEventListener(`${viewDoneEventName ?? 'viewDone'}`, () => this.addListeners()); 
  };
  
  regListener(listener: IListener | IListener[]) {
    if (listener instanceof Array ) {
      this.listeners.concat(...this.listeners, ...listener);
    } else {
      this.listeners.push(listener);
    }
    this.addListeners();
  };

  private addListeners() {
    this.listeners.forEach(elem => {
      if (elem.element && document.querySelectorAll(elem.element)) {
        document.querySelectorAll(elem.element).forEach(el => {
          el.addEventListener(elem.type, () => {
            elem.detail.forEach(det => det.actTarget = det.actTarget ?? el);
            document.dispatchEvent(new CustomEvent(`${this.eventName}`, { detail: elem.detail }));
          });
        }) 
      } else {
        document.addEventListener(elem.type, () => document.dispatchEvent(new CustomEvent(`${this.eventName}`, {detail: elem.detail})));
      }
    }); 
  };

  private processEvent(event: CustomEvent) {
    event.detail.forEach((elem: IListenerDetail) => {
      const { action, actTarget, fill } = elem;
      switch (action) {
        case 'addClass': document.dispatchEvent(new CustomEvent(`${this.eventChangeModelName}`, { detail: { action, actTarget, fill } }));
    }; 
    });
  };
  
};