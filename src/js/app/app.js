import { startLoaderId, structure, } from './constants';
const appConfig = {
    startLoaderId,
    structure,
};
class App {
    constructor(config) {
        const { startLoaderId, structure, lang } = config;
        this.startLoaderId = startLoaderId;
        this.structure = structure;
        this.lang = lang || 'en';
    }
    ;
    run(lang = 'en') {
        this.lang = lang;
        document.querySelector(`#${this.startLoaderId}`).remove();
        let appDiv = document.querySelector('#app');
        if (appDiv) {
            appDiv.remove();
        }
        appDiv = document.createElement('div');
        appDiv.id = 'app';
        document.querySelector('body').append(appDiv);
        this.structure.forEach(el => appDiv.append(this.createElement(el)));
    }
    ;
    createElement(elem) {
        const { tag, id, elClass, fill } = elem;
        const element = document.createElement(`${tag}`);
        if (id) {
            element.id = id;
        }
        if (elClass) {
            element.classList.add(elClass);
        }
        if (fill && fill[this.lang]) {
            element.innerHTML = fill[this.lang];
        }
        else {
            element.innerHTML = fill['en'];
        }
        return element;
    }
}
;
const app = new App(appConfig);
export default app;
