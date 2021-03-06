import Model from './app/model';
import Viewer from './app/viewer';
import Controller from './app/controller';
import { startLoaderId, structure } from './app/constants';
import { activateLangButton } from './app/langBttn/langBttn';

const viewer = new Viewer({ startLoaderId });
const model = new Model({ HTMLStructure: structure });
const controller = new Controller();
controller.regListener({ type: 'click', node: 'nav', target: '#nav-button1', action: 'activeNavBttn' });
controller.regListener({ type: 'click', node: 'nav', target: '#nav-button2', action: 'activeNavBttn' });
controller.regListener({ type: 'click', node: 'nav', target: '#nav-button3', action: 'activeNavBttn' });
controller.regListener({ type: 'click', node: 'main', target: '#backBttn', action: 'resetApp' });
controller.regListener({ type: 'click', node: null, target: '#lang-button__ru', action: 'setLang' });
controller.regListener({ type: 'click', node: null, target: '#lang-button__en', action: 'setLang' });
controller.regFunction(activateLangButton);

function runApp(): void {
  function checkLoader() {
    const isDone = document.querySelector(`#${startLoaderId}`).getAttribute('data-done') === 'true' ? true : false;
    if (isDone) {
      model.getStruct();
    } else {
      setTimeout(checkLoader, 500);
    }
  }
  setTimeout(checkLoader, 500);
}

runApp();