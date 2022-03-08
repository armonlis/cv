import { IModel, IElementStructure, IModelConfig, IStructureOptions, IMainElementStructure } from './interfaces';

export default class Model implements IModel {
  private _lang: 'en' | 'ru';
  private _mainContent: 'mainContent0' | 'mainContent1' | 'mainContent2' | 'mainContent3';
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
      this._lang = 'en';
      this._mainContent = 'mainContent0';
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
    this._mainContent = options?.mainContent ?? this._mainContent
    document.dispatchEvent(new CustomEvent(`${this.toViewerEventName}`, { 
      detail: {
        from: 'model',
        action: 'structure',
        details: {
          data: [
            {...this.header, fill: this.header.fill[this._lang]},
            {...this.nav, fill: this.nav.fill[this._lang]},
            {...this.main, fill: this.main.fill[this._lang][this._mainContent]},
            {...this.footer, fill: this.footer.fill[this._lang]}
          ]
        }
      }
    }));
  };

  set setLang(lang: typeof this._lang) {
    this._lang = lang;
    this.getStruct();
    if (+this._mainContent.replace(/[^0-9]/g, '')) {
      document.dispatchEvent(new CustomEvent('toController', {
        detail: {
          from: 'model',
          action: 'activeNavBttn',
          details: {
            target: `#nav-button${this._mainContent.replace(/[^0-9]/g, '')}`
          }
        }
      }))
    }
  }

  handler(event: CustomEvent) {
    const { from, action, details } = event.detail;
    const mainContent = details?.mainContent ?? 'mainContent0';
    switch (from) {
      case 'controller': switch (action) {
        case 'get_structure': this.getStruct({ mainContent }); return;
        default: throw new Error('The model does not know this action for viewer.');
      };
      default: throw new Error('The model does not know this sender.');
    };
  };
};