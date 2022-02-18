import { IViewerConfig, IViewer } from "./interfaces";

export default class Viewer implements IViewer {
  readonly startLoaderId: string;
  readonly getHTML: () => HTMLElement[];
  
  constructor(options: IViewerConfig) {
    const { startLoaderId, getHTML } = options;
    this.startLoaderId = startLoaderId;
    this.getHTML = getHTML;
  };

  view() {
    document.querySelector(`#${this.startLoaderId}`).remove();
    let appDiv = document.querySelector('#app');
    if (appDiv) { appDiv.remove() }
    appDiv = document.createElement('div');
    appDiv.id = 'app';
    document.querySelector('body').append(appDiv);
    this.getHTML().forEach(elem => {
      document.querySelector('#app').append(elem);
    });
  };
};