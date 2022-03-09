import { IController, IListener, IControllerConfig } from "./interfaces";

function generateEventGetStructure(target: string) {
  document.dispatchEvent(new CustomEvent('toModel', {
    detail: {
      from: 'controller',
      action: 'get_structure',
      details: {
        mainContent: `mainContent${target.replace(/[^0-9]/g, '')}`
      }
    }
  }));
};

function generateEventActiveNavBttn(target: string) {
  document.dispatchEvent(new CustomEvent('toViewer', {
    detail: {
      from: 'controller',
      action: 'activeNavBttn',
      details: {
        target
      }
    }
  }));
};

function addList(listener: IListener, toControllerEventName: string) {
  const { type, target, action } = listener;
  const elem = document.querySelector(target);
  if (elem) {
    elem.addEventListener(`${type}`, event => {
      document.dispatchEvent(new CustomEvent(`${toControllerEventName}`, {detail: {
        from: 'app',
        action,
        details: {
          target,
        }
      }}))
    });
  }
};

export default class Controller implements IController {
  static _isCreated: boolean = false;
  readonly toControllerEventName: string;
  readonly toModeEventName: string;
  readonly toViewerEventName: string;
  private listeners: IListener[];
  
  constructor(options: IControllerConfig = {}) {
    const { toControllerEventName, toModelEventName, toViewerEventName } = options;
    if (!Controller._isCreated) {
      this.listeners = [];
      this.toControllerEventName = toControllerEventName ?? 'toController';
      this.toModeEventName = toModelEventName ?? 'toModel';
      this.toViewerEventName = toViewerEventName ?? 'toViewer';
      document.addEventListener(`${this.toControllerEventName}`, (event: CustomEvent) => this.handler(event));
      Controller._isCreated = true;
    } else {
      throw new Error('The controller is allready exist.');
    }
  };

  addListeners(node: IListener['node'] = null) {
    if (!node) {
      this.listeners.forEach(listener => addList(listener, this.toControllerEventName));
    } else {
      const listeners = this.listeners.filter(el => el.node === node);
      listeners.forEach(listener => addList(listener, this.toControllerEventName));
    }
  };

  regListener(listener: IListener) {
    this.listeners.push(listener);
  };

  handler(event: CustomEvent) {
    const { from, action, details } = event.detail;
    const target = details?.target;
    const node = details?.node ?? null;
    switch (from) {
      case 'viewer': switch (action) {
        case 'addListeners': this.addListeners(node); return;
        default: throw new Error('The controller does not know this action for the viewer.')
      }; 
      case 'model': switch (action) {
        case 'activeNavBttn': generateEventActiveNavBttn(target); return;
        default: throw new Error('The controller does not know this action for the model.')
      }; 
      case 'app': switch (action) {
        case 'activeNavBttn': generateEventGetStructure(target); generateEventActiveNavBttn(target); return;
        case 'resetApp': generateEventGetStructure('mainContent0'); return;
        default: throw new Error('The controller does not know this action for the app.')
      }; 
      default: throw new Error('The controller does not know this sender.');
    }
  };
};

