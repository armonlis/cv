export default class Model {
    constructor(options) {
        if (!Model._isCreated) {
            const { HTMLStructure, toModelEventName, toViewerEventName, toControllerEventName } = options;
            const { header, nav, main, footer } = HTMLStructure;
            this._lang = 'en';
            this._mainContent = 'mainContent0';
            this.header = header;
            this.nav = nav;
            this.main = main;
            this.footer = footer;
            this.toViewerEventName = toViewerEventName !== null && toViewerEventName !== void 0 ? toViewerEventName : 'toViewer';
            this.toControllerEventName = toControllerEventName !== null && toControllerEventName !== void 0 ? toControllerEventName : 'toController';
            document.addEventListener(`${toModelEventName !== null && toModelEventName !== void 0 ? toModelEventName : 'toModel'}`, (event) => this.handler(event));
            Model._isCreated = true;
        }
        else {
            throw new Error('The model is allready exist.');
        }
    }
    ;
    getStruct(options) {
        var _a;
        this._mainContent = (_a = options === null || options === void 0 ? void 0 : options.mainContent) !== null && _a !== void 0 ? _a : this._mainContent;
        document.dispatchEvent(new CustomEvent(`${this.toViewerEventName}`, {
            detail: {
                from: 'model',
                action: 'structure',
                details: {
                    data: [
                        Object.assign(Object.assign({}, this.header), { fill: this.header.fill[this._lang] }),
                        Object.assign(Object.assign({}, this.nav), { fill: this.nav.fill[this._lang] }),
                        Object.assign(Object.assign({}, this.main), { fill: this.main.fill[this._lang][this._mainContent] }),
                        Object.assign(Object.assign({}, this.footer), { fill: this.footer.fill[this._lang] })
                    ]
                }
            }
        }));
    }
    ;
    resetMain() {
        this._mainContent = 'mainContent0';
        document.dispatchEvent(new CustomEvent(`${this.toViewerEventName}`, {
            detail: {
                from: 'model',
                action: 'resetMain',
                details: {
                    data: Object.assign(Object.assign({}, this.main), { fill: this.main.fill[this._lang][this._mainContent] })
                }
            }
        }));
    }
    ;
    changeMain(content) {
        this._mainContent = content;
        document.dispatchEvent(new CustomEvent(`${this.toViewerEventName}`, {
            detail: {
                from: 'model',
                action: 'changeMain',
                details: {
                    data: Object.assign(Object.assign({}, this.main), { fill: this.main.fill[this._lang][this._mainContent] })
                }
            }
        }));
        document.dispatchEvent(new CustomEvent(`${this.toControllerEventName}`, {
            detail: {
                from: 'model',
                action: 'addListeners',
                details: {
                    node: 'main'
                }
            }
        }));
    }
    ;
    setLang(lang) {
        if (lang === 'en' || lang === 'ru') {
            this._lang = lang;
        }
        ;
        this.getStruct();
        if (+this._mainContent.replace(/[^0-9]/g, '')) {
            document.dispatchEvent(new CustomEvent('toController', {
                detail: {
                    from: 'model',
                    action: 'activeNavBttn',
                    details: {
                        target: `#nav-button${this._mainContent.replace(/[^0-9]/g, '')}`
                    }
                }
            }));
        }
    }
    handler(event) {
        var _a, _b;
        const { from, action, details } = event.detail;
        const mainContent = (_a = details === null || details === void 0 ? void 0 : details.mainContent) !== null && _a !== void 0 ? _a : 'mainContent0';
        const lang = (_b = details === null || details === void 0 ? void 0 : details.lang) !== null && _b !== void 0 ? _b : 'en';
        switch (from) {
            case 'controller':
                switch (action) {
                    case 'get_structure':
                        this.getStruct({ mainContent });
                        return;
                    case 'resetMain':
                        this.resetMain();
                        return;
                    case 'changeMain':
                        this.changeMain(mainContent);
                        return;
                    case 'setLang':
                        this.setLang(lang);
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
