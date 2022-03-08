import { IModel, IElementStructure, IModelConfig, IStructureOptions, IMainElementStructure } from './interfaces';

export default class Model implements IModel {
  static _isCreated = false;
  header: IElementStructure;
  nav: IElementStructure;
  main: IMainElementStructure;
  footer: IElementStructure;
  readonly toModelEventName: string;
  readonly modelEventName: string;
  readonly toViewerEventName: string;
  
  constructor(options?: IModelConfig) {
    if (!Model._isCreated) {
      const { HTMLStructure, toModelEventName, toViewerEventName } = options;
      const { header, nav, main, footer } = HTMLStructure;
      this.header = header;
      this.nav = nav;
      this.main = main;
      this.footer = footer;
      this.toViewerEventName = toViewerEventName ?? 'toViewer';
      document.addEventListener(`${toModelEventName ?? 'toModel'}`, (event: CustomEvent) => this.handler(event));
      Model._isCreated = true;  
    } else {
      throw new Error('The model is allready exist.');
    }
  };
  
  getStruct(options?: IStructureOptions) {
    const lang = options?.lang ?? 'en';
    const mainContent = options?.mainContent ?? 'mainContent0';
    document.dispatchEvent(new CustomEvent(`${this.toViewerEventName}`, { 
      detail: {
        from: 'model',
        action: 'structure',
        details: {
          data: [
            {...this.header, fill: this.header.fill[lang]},
            {...this.nav, fill: this.nav.fill[lang]},
            {...this.main, fill: this.main.fill[lang][mainContent]},
            {...this.footer, fill: this.footer.fill[lang]}
          ]
        }
      }
    }));
  };

  handler(event: CustomEvent) {
    const { from, action, details } = event.detail;
    const lang = details?.lang ?? 'en';
    const mainContent = details?.mainContent ?? 'mainContent0';
    switch (from) {
      case 'controller': switch (action) {
        case 'get_structure': this.getStruct({ lang, mainContent }); return;
        default: throw new Error('The model does not know this action for viewer.');
      };
      default: throw new Error('The model does not know this sender.');
    };
  };
};