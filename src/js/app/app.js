import { startLoaderId } from './constants';
const appConfig = {
    startLoaderId
};
class App {
    constructor(config) {
        const { startLoaderId } = config;
        this.startLoaderId = startLoaderId;
    }
    ;
    run() {
        document.querySelector(`#${this.startLoaderId}`).remove();
    }
    ;
}
;
const app = new App(appConfig);
export default app;
