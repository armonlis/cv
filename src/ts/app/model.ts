import { IModel, IElement } from './interfaces';

export default class Model implements IModel {
  static _isCreated = false;
  private HTMLStructure: IElement[];
  private lang: string

  constructor(HTMLStructure: IElement[]) {
    if (!Model._isCreated) {
      this.HTMLStructure = HTMLStructure;
      this.lang = 'en';
      Model._isCreated = true;  
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
    return elements;      
  };
};

