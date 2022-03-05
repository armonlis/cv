export default class Viewer {
    constructor(options) {
        const { startLoaderId, toViewerEventName } = options;
        this.startLoaderId = startLoaderId;
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
    }
    ;
    handler(event) {
        const { from, action, details } = event.detail;
        const { data } = details;
        switch (from) {
            case 'model': switch (action) {
                case 'structure':
                    this.view(data);
                    return;
                default: throw new Error('The viewer does not know this action from the model.');
            }
            default: throw new Error('The viewer does not know this sender.');
        }
    }
    ;
}
;
