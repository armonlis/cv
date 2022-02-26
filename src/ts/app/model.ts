import { IModel, IElement, IModelConfig } from './interfaces';

export default class Model implements IModel {
  static _isCreated = false;
  private HTMLStructure: IElement[];
  private lang: string;
  private eventReadyName: string;

  constructor(options: IModelConfig) {
    if (!Model._isCreated) {
      const { HTMLStructure, eventReadyName, eventChangeModelName } = options;
      this.HTMLStructure = HTMLStructure;
      this.lang = 'en';
      this.eventReadyName = eventReadyName ?? 'modReady';
      document.addEventListener(`${eventChangeModelName}`, (event: CustomEvent) => this.changeModel(event));
      Model._isCreated = true;  
    } else {
      throw new Error('The model is allready exist.')
    }
  };

  getStruct = () => {
    const elements: HTMLElement[] = [];
    this.HTMLStructure.forEach(elem => {
      const HTMLElem = document.createElement(elem.tag);
      HTMLElem.id = elem.id;
      HTMLElem.innerHTML = elem.fill[this.lang];
      elements.push(HTMLElem);
    });
    document.dispatchEvent(new CustomEvent(`${this.eventReadyName}`, { detail: { structure: elements } }));
  };

  changeModel(event: CustomEvent) {
    const { action, actTarget, fill } = event.detail;
    console.log(this.HTMLStructure)
    
  }
  
};