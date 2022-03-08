function generateEventGetStructure(target) {
    document.dispatchEvent(new CustomEvent('toModel', {
        detail: {
            from: 'controller',
            action: 'get_structure',
            details: {
                mainContent: `mainContent${target.replace(/[^0-9]/g, '')}`
            }
        }
    }));
}
;
function generateEventActiveNavBttn(target) {
    document.dispatchEvent(new CustomEvent('toViewer', {
        detail: {
            from: 'controller',
            action: 'activeNavBttn',
            details: {
                target
            }
        }
    }));
}
;
export default class Controller {
    constructor(options = {}) {
        const { toControllerEventName, toModelEventName, toViewerEventName } = options;
        if (!Controller._isCreated) {
            this.listeners = [];
            this.toControllerEventName = toControllerEventName !== null && toControllerEventName !== void 0 ? toControllerEventName : 'toController';
            this.toModeEventName = toModelEventName !== null && toModelEventName !== void 0 ? toModelEventName : 'toModel';
            this.toViewerEventName = toViewerEventName !== null && toViewerEventName !== void 0 ? toViewerEventName : 'toViewer';
            document.addEventListener(`${this.toControllerEventName}`, (event) => this.handler(event));
            Controller._isCreated = true;
        }
        else {
            throw new Error('The controller is allready exist.');
        }
    }
    ;
    addListeners(node = null) {
        if (!node) {
            this.listeners.forEach(listener => {
                const { type, target, action } = listener;
                const elem = document.querySelector(target);
                elem.addEventListener(`${type}`, event => {
                    document.dispatchEvent(new CustomEvent(`${this.toControllerEventName}`, { detail: {
                            from: 'app',
                            action,
                            details: {
                                target,
                            }
                        } }));
                });
            });
        }
        ;
    }
    ;
    regListener(listener) {
        this.listeners.push(listener);
    }
    ;
    handler(event) {
        const { from, action, details } = event.detail;
        const target = details === null || details === void 0 ? void 0 : details.target;
        switch (from) {
            case 'viewer':
                switch (action) {
                    case 'addListeners':
                        this.addListeners();
                        return;
                    default: throw new Error('The controller does not know this action for the viewer.');
                }
                ;
            case 'model':
                switch (action) {
                    case 'activeNavBttn':
                        generateEventActiveNavBttn(target);
                        return;
                    default: throw new Error('The controller does not know this action for the model.');
                }
                ;
            case 'app':
                switch (action) {
                    case 'activeNavBttn':
                        generateEventGetStructure(target);
                        generateEventActiveNavBttn(target);
                        return;
                    default: throw new Error('The controller does not know this action for the app.');
                }
                ;
            default: throw new Error('The controller does not know this sender.');
        }
    }
    ;
}
Controller._isCreated = false;
;
