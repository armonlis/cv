import {
  IApp,
  IAppConfig
} from './interfaces';
import { startLoaderId } from './constants'

const appConfig = {
    startLoaderId
  };

class App implements IApp {
  readonly startLoaderId: string;

  constructor(config: IAppConfig) {
    const {
      startLoaderId
    } = config;
    this.startLoaderId = startLoaderId;
  };
  
  run(): void {
    document.querySelector(`#${this.startLoaderId}`).remove();
  };   
};

const app = new App(appConfig);

export default app;