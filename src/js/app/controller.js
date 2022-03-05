export default class Controller {
    constructor(options = {}) {
        var _a;
        const { eventName, viewDoneEventName, eventChangeModelName } = options;
        if (!Controller._isCreated) {
            this.listeners = [];
            this.eventName = eventName !== null && eventName !== void 0 ? eventName : 'eventForController';
            (_a = this.eventChangeModelName == eventChangeModelName) !== null && _a !== void 0 ? _a : 'modChange';
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
                    el.addEventListener(elem.type, () => {
                        const detail = [...elem.detail];
                        detail.forEach(det => { var _a, _b; return det.actTarget = (_b = (_a = det.actTarget) !== null && _a !== void 0 ? _a : el.id) !== null && _b !== void 0 ? _b : ''; });
                        document.dispatchEvent(new CustomEvent(`${this.eventName}`, { detail }));
                    });
                });
            }
        });
    }
    ;
    processEvent(event) {
        console.log('PROCESS>>>', event.detail);
        event.detail.forEach((elem) => {
            const { action, actTarget, fill } = elem;
            switch (action) {
                case 'addClass': document.dispatchEvent(new CustomEvent(`${this.eventChangeModelName}`, { detail: { action, actTarget, fill } }));
            }
            ;
        });
    }
    ;
}
Controller._isCreated = false;
;
