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
            const { HTMLStructure, eventReadyName } = options;
            this.HTMLStructure = HTMLStructure;
            this.lang = 'en';
            this.eventReadyName = eventReadyName !== null && eventReadyName !== void 0 ? eventReadyName : 'modReady';
            Model._isCreated = true;
        }
        else {
            throw new Error('The model is allready exist.');
        }
    }
    ;
}
Model._isCreated = false;
;
