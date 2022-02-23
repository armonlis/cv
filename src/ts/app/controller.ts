import { IController, IListener, IControllerConfig } from "./interfaces";

export default class Controller implements IController {
  static _isCreated: boolean = false;
  readonly eventName: string;
  private listeners: IListener[];

  constructor(options: IControllerConfig = {}) {
    const { eventName, viewDoneEventName } = options;
    if (!Controller._isCreated) {
      this.listeners = [];
      this.eventName = eventName ?? 'eventForController';
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
          el.addEventListener(elem.type, () => document.dispatchEvent(new CustomEvent(`${this.eventName}`, {detail: elem.detail})));
        }) 
      } else {
        document.addEventListener(elem.type, () => document.dispatchEvent(new CustomEvent(`${this.eventName}`, {detail: elem.detail})));
      }
    }); 
  };

  private processEvent(event: CustomEvent) {
    console.log('EVENT!!!');   
  };
  
};