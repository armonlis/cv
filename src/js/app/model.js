export default class Model {
    constructor(options) {
        if (!Model._isCreated) {
            const { HTMLStructure, toModelEventName, toViewerEventName } = options;
            const { header, nav, main, footer } = HTMLStructure;
            this.header = header;
            this.nav = nav;
            this.main = main;
            this.footer = footer;
            this.toViewerEventName = toViewerEventName !== null && toViewerEventName !== void 0 ? toViewerEventName : 'toViewer';
            document.addEventListener(`${toModelEventName !== null && toModelEventName !== void 0 ? toModelEventName : 'toModel'}`, (event) => this.handler(event));
            Model._isCreated = true;
        }
        else {
            throw new Error('The model is allready exist.');
        }
    }
    ;
    getStruct(lang = 'en') {
        document.dispatchEvent(new CustomEvent(`${this.toViewerEventName}`, {
            detail: {
                from: 'model',
                action: 'structure',
                details: {
                    data: [
                        Object.assign(Object.assign({}, this.header), { fill: this.header.fill[lang] }),
                        Object.assign(Object.assign({}, this.nav), { fill: this.nav.fill[lang] }),
                        Object.assign(Object.assign({}, this.main), { fill: this.main.fill[lang] }),
                        Object.assign(Object.assign({}, this.footer), { fill: this.footer.fill[lang] })
                    ]
                }
            }
        }));
    }
    ;
    handler(event) {
        const { from, action, details } = event.detail;
        const { lang } = details;
        switch (from) {
            case 'viewer':
                switch (action) {
                    case 'get_structure':
                        this.getStruct(lang);
                        return;
                    default: throw new Error('The model does not know this action for viewer.');
                }
                ;
            default: throw new Error('The model does not know this sender.');
        }
        ;
    }
    ;
}
Model._isCreated = false;
;
