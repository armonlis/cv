import Model from './app/model';
import Viewer from './app/viewer';
import Controller from './app/controller';
import { startLoaderId, structure } from './app/constants';

const viewer = new Viewer({ startLoaderId });
const model = new Model({ HTMLStructure: structure });

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
};

runApp();