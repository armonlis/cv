export default class Viewer {
    constructor(options) {
        const { startLoaderId, toViewerEventName, toControllerEventName } = options;
        this.startLoaderId = startLoaderId;
        this.toControllerEventName = toControllerEventName !== null && toControllerEventName !== void 0 ? toControllerEventName : 'toController';
        document.addEventListener(`${toViewerEventName !== null && toViewerEventName !== void 0 ? toViewerEventName : 'toViewer'}`, (event) => this.handler(event));
    }
    ;
    buildHTML(data) {
        const app = document.createElement('div');
        app.id = 'app';
        data.forEach(el => {
            const node = document.createElement(el.tag);
            node.id = el.id;
            node.innerHTML = el.fill;
            app.append(node);
        });
        return app;
    }
    ;
    view(data) {
        const startLoader = document.querySelector(`#${this.startLoaderId}`);
        if (startLoader) {
            startLoader.remove();
        }
        let appDiv = document.querySelector('#app');
        if (appDiv) {
            appDiv.remove();
        }
        appDiv = this.buildHTML(data);
        document.querySelector('body').append(appDiv);
        document.dispatchEvent(new CustomEvent(`${this.toControllerEventName}`, {
            detail: {
                from: 'viewer',
                action: 'addListeners'
            }
        }));
    }
    ;
    handler(event) {
        const { from, action, details } = event.detail;
        const data = details === null || details === void 0 ? void 0 : details.data;
        const target = details === null || details === void 0 ? void 0 : details.target;
        switch (from) {
            case 'model':
                switch (action) {
                    case 'structure':
                        this.view(data);
                        return;
                    default: throw new Error('The viewer does not know this action from the model.');
                }
                ;
            case 'controller':
                switch (action) {
                    case 'activeNavBttn':
                        document.querySelectorAll('.app-nav__elem').forEach(el => el.classList.remove('app-nav__elem_active'));
                        document.querySelector(`${target}`).classList.add('app-nav__elem_active');
                        return;
                    default: throw new Error('The viewer does not know this action from the model.');
                }
                ;
            default: throw new Error('The viewer does not know this sender.');
        }
    }
    ;
}
;
