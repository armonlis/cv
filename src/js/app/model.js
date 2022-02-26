export default class Model {
    constructor(options) {
        this.getStruct = () => {
            const elements = [];
            this.HTMLStructure.forEach(elem => {
                const HTMLElem = document.createElement(elem.tag);
                HTMLElem.id = elem.id;
                HTMLElem.innerHTML = elem.fill[this.lang];
                elements.push(HTMLElem);
            });
            document.dispatchEvent(new CustomEvent(`${this.eventReadyName}`, { detail: { structure: elements } }));
        };
        if (!Model._isCreated) {
            const { HTMLStructure, eventReadyName, eventChangeModelName } = options;
            this.HTMLStructure = HTMLStructure;
            this.lang = 'en';
            this.eventReadyName = eventReadyName !== null && eventReadyName !== void 0 ? eventReadyName : 'modReady';
            document.addEventListener(`${eventChangeModelName}`, (event) => this.changeModel(event));
            Model._isCreated = true;
        }
        else {
            throw new Error('The model is allready exist.');
        }
    }
    ;
    changeModel(event) {
        const { action, actTarget, fill } = event.detail;
        console.log(this.HTMLStructure);
    }
}
Model._isCreated = false;
;
