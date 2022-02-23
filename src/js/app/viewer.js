export default class Viewer {
    constructor(options) {
        const { startLoaderId, modelReadyEventName, doneEventName } = options;
        this.startLoaderId = startLoaderId;
        document.addEventListener(`${modelReadyEventName !== null && modelReadyEventName !== void 0 ? modelReadyEventName : 'modReady'}`, (event) => this.view(event));
        this.doneEvent = new Event(`${doneEventName !== null && doneEventName !== void 0 ? doneEventName : 'viewDone'}`);
    }
    ;
    view(event) {
        document.querySelector(`#${this.startLoaderId}`).remove();
        let appDiv = document.querySelector('#app');
        if (appDiv) {
            appDiv.remove();
        }
        appDiv = document.createElement('div');
        appDiv.id = 'app';
        document.querySelector('body').append(appDiv);
        event.detail.structure.forEach((elem) => {
            document.querySelector('#app').append(elem);
        });
        document.dispatchEvent(this.doneEvent);
    }
    ;
}
;
