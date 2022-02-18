export default class Model {
    constructor(HTMLStructure) {
        this.getStruct = () => {
            const elements = [];
            this.HTMLStructure.forEach(elem => {
                const HTMLElem = document.createElement(elem.tag);
                HTMLElem.id = elem.id;
                HTMLElem.innerHTML = elem.fill[this.lang];
                elements.push(HTMLElem);
            });
            return elements;
        };
        if (!Model._isCreated) {
            this.HTMLStructure = HTMLStructure;
            this.lang = 'en';
            Model._isCreated = true;
        }
    }
    ;
}
Model._isCreated = false;
;
