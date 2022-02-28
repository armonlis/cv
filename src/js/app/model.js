export default class Model {
    constructor(options) {
        this.buildModel = (basicStruct) => {
            basicStruct.forEach((elem) => {
                const HTMLElem = document.createElement(elem.tag);
                HTMLElem.id = elem.id;
                HTMLElem.innerHTML = elem.fill[this.lang];
                this.HTMLModel.append(HTMLElem);
            });
        };
        if (!Model._isCreated) {
            const { HTMLStructure, eventReadyName, eventChangeModelName } = options;
            this.lang = 'en';
            this.HTMLModel = document.createElement('div');
            this.HTMLModel.id = 'app';
            this.buildModel(HTMLStructure);
            this.eventReadyName = eventReadyName !== null && eventReadyName !== void 0 ? eventReadyName : 'modReady';
            document.addEventListener(`${eventChangeModelName}`, (event) => this.changeModel(event));
            Model._isCreated = true;
        }
        else {
            throw new Error('The model is allready exist.');
        }
    }
    ;
    getStruct() {
        document.dispatchEvent(new CustomEvent(`${this.eventReadyName}`, { detail: { structure: this.HTMLModel } }));
    }
    ;
    changeModel(event) {
        const { action, actTarget, fill } = event.detail;
    }
}
Model._isCreated = false;
;
