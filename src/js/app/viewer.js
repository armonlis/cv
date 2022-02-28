export default class Viewer {
    constructor(options) {
        const { startLoaderId, modelReadyEventName, doneEventName } = options;
        this.startLoaderId = startLoaderId;
        document.addEventListener(`${modelReadyEventName !== null && modelReadyEventName !== void 0 ? modelReadyEventName : 'modReady'}`, (event) => this.view(event));
        this.doneEvent = new Event(`${doneEventName !== null && doneEventName !== void 0 ? doneEventName : 'viewDone'}`);
    }
    ;
    view(event) {
        console.log(event.detail.structure);
        document.querySelector(`#${this.startLoaderId}`).remove();
        let appDiv = document.querySelector('#app');
        if (appDiv) {
            appDiv.replaceWith(event.detail.structure);
        }
        else {
            document.querySelector('body').append(event.detail.structure);
        }
        ;
        document.dispatchEvent(this.doneEvent);
    }
    ;
}
;
