import { activateLangButton } from "./langBttn/langBttn";
import { generateEventResetMain, generateEventChangeMain, generateEventActiveNavBttn, addList, generateEventSetLang } from './controllerFunc';
export default class Controller {
    constructor(options = {}) {
        const { toControllerEventName, toModelEventName, toViewerEventName } = options;
        if (!Controller._isCreated) {
            this.listeners = [];
            this.functions = [];
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
            this.listeners.forEach(listener => addList(listener, this.toControllerEventName));
            activateLangButton();
        }
        else {
            const listeners = this.listeners.filter(el => el.node === node);
            listeners.forEach(listener => addList(listener, this.toControllerEventName));
        }
    }
    ;
    launchFunctions() {
        this.functions.forEach(func => func());
    }
    ;
    regListener(listener) {
        this.listeners.push(listener);
    }
    ;
    regFunction(func) {
        this.functions.push(func);
    }
    ;
    handler(event) {
        var _a;
        const { from, action, details } = event.detail;
        const target = details === null || details === void 0 ? void 0 : details.target;
        const node = (_a = details === null || details === void 0 ? void 0 : details.node) !== null && _a !== void 0 ? _a : null;
        switch (from) {
            case 'viewer':
                switch (action) {
                    case 'addListeners':
                        this.addListeners(node);
                        return;
                    case 'launchFunctions':
                        this.launchFunctions();
                        return;
                    default: throw new Error('The controller does not know this action for the viewer.');
                }
                ;
            case 'model':
                switch (action) {
                    case 'activeNavBttn':
                        generateEventActiveNavBttn(target);
                        return;
                    case 'addListeners':
                        this.addListeners(node);
                        return;
                    default: throw new Error('The controller does not know this action for the model.');
                }
                ;
            case 'app':
                switch (action) {
                    case 'activeNavBttn':
                        generateEventChangeMain(target);
                        generateEventActiveNavBttn(target);
                        return;
                    case 'resetApp':
                        generateEventResetMain();
                        return;
                    case 'setLang':
                        generateEventSetLang(target);
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
