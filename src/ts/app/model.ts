import { IModel, IElement, IModelConfig } from './interfaces';

export default class Model implements IModel {
  static _isCreated = false;
  private HTMLModel: HTMLElement;
  
  private lang: string;
  private eventReadyName: string;

  constructor(options: IModelConfig) {
    if (!Model._isCreated) {
      const { HTMLStructure, eventReadyName, eventChangeModelName } = options;
      this.lang = 'en';
      this.HTMLModel = document.createElement('div');
      this.HTMLModel.id = 'app';
      this.buildModel(HTMLStructure);
      this.eventReadyName = eventReadyName ?? 'modReady';
      document.addEventListener(`${eventChangeModelName}`, (event: CustomEvent) => this.changeModel(event));
      Model._isCreated = true;  
    } else {
      throw new Error('The model is allready exist.')
    }
  };

  buildModel = (basicStruct: IElement[]) => {
    basicStruct.forEach((elem: IElement) => {
      const HTMLElem = document.createElement(elem.tag);
      HTMLElem.id = elem.id;
      HTMLElem.innerHTML = elem.fill[this.lang];
      this.HTMLModel.append(HTMLElem);
    });
  };

  getStruct() {
    document.dispatchEvent(new CustomEvent(`${this.eventReadyName}`, { detail: { structure: this.HTMLModel } }));
  };

  changeModel(event: CustomEvent) {
    const { action, actTarget, fill } = event.detail;
    
    
  }
  
};