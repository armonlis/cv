import Model from './app/model';
import Viewer from './app/viewer';
import Controller from './app/controller';
import { startLoaderId, structure } from './app/constants';
const viewer = new Viewer({ startLoaderId });
const model = new Model({ HTMLStructure: structure });
const controller = new Controller();
controller.regListener({ type: 'click', element: '.app-nav__elem', detail: [{ action: 'addClass', actTarget: null, fill: 'active' }] });
function runApp() {
    function checkLoader() {
        const isDone = document.querySelector(`#${startLoaderId}`).getAttribute('data-done') === 'true' ? true : false;
        if (isDone) {
            model.getStruct();
        }
        else {
            setTimeout(checkLoader, 500);
        }
    }
    setTimeout(checkLoader, 500);
}
;
runApp();
