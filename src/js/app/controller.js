export default class Controller {
    constructor(options = {}) {
        const { eventName, viewDoneEventName } = options;
        if (!Controller._isCreated) {
            this.listeners = [];
            this.eventName = eventName !== null && eventName !== void 0 ? eventName : 'eventForController';
            Controller._isCreated = true;
        }
        else {
            throw new Error('The controller is allready exist.');
        }
        document.addEventListener(`${this.eventName}`, (event) => this.processEvent(event));
        document.addEventListener(`${viewDoneEventName !== null && viewDoneEventName !== void 0 ? viewDoneEventName : 'viewDone'}`, () => this.addListeners());
    }
    ;
    regListener(listener) {
        if (listener instanceof Array) {
            this.listeners.concat(...this.listeners, ...listener);
        }
        else {
            this.listeners.push(listener);
        }
        this.addListeners();
    }
    ;
    addListeners() {
        this.listeners.forEach(elem => {
            if (elem.element && document.querySelectorAll(elem.element)) {
                document.querySelectorAll(elem.element).forEach(el => {
                    el.addEventListener(elem.type, () => document.dispatchEvent(new CustomEvent(`${this.eventName}`, { detail: elem.detail })));
                });
            }
            else {
                document.addEventListener(elem.type, () => document.dispatchEvent(new CustomEvent(`${this.eventName}`, { detail: elem.detail })));
            }
        });
    }
    ;
    processEvent(event) {
        console.log('EVENT!!!');
    }
    ;
}
Controller._isCreated = false;
;
