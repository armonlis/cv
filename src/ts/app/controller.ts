import { IController, IListener, IControllerConfig } from "./interfaces";

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
      this.listeners.forEach(listener => {
        const { type, target, action } = listener;
        const elem = document.querySelector(target);
        elem.addEventListener(`${type}`, event => {
          document.dispatchEvent(new CustomEvent(`${this.toControllerEventName}`, {detail: {
            from: 'app',
            action,
            details: {
              target,
            }
          }}))
        });
      });
    };
  };

  regListener(listener: IListener) {
    this.listeners.push(listener);
  };

  handler(event: CustomEvent) {
    const { from, action, details } = event.detail;
    const target = details?.target;
    switch (from) {
      case 'viewer': switch (action) {
        case 'addListeners': this.addListeners(); return;
        default: throw new Error('The controller does not know this action for the viewer.')
      }; 
      case 'model': switch (action) {
        default: throw new Error('The controller does not know this action for the model.')
      }; 
      case 'app': switch (action) {
        case 'activeNavBttn': 
        document.dispatchEvent(new CustomEvent('toModel', {
          detail: {
            from: 'controller',
            action: 'get_structure',
            details: {
              mainContent: `mainContent${target.replace(/[^0-9]/g, '')}`
            }
          }
        }));
        document.dispatchEvent(new CustomEvent('toViewer', {
          detail: {
            from: 'controller',
            action: 'activeNavBttn',
            details: {
              target
            }
          }
        })); return;
        default: throw new Error('The controller does not know this action for the app.')
      }; 
      default: throw new Error('The controller does not know this sender.');
    }
  };
};