import app from './app/app';
import { startLoaderId } from './app/constants';

function runApp(): void {
  function checkLoader() {
    const isDone = document.querySelector(`#${startLoaderId}`).getAttribute('data-done') === 'true' ? true : false;
    if (isDone) {
      app.run();
    } else {
      setTimeout(checkLoader, 500)
    }
  };
  setTimeout(checkLoader, 500)
};

runApp();