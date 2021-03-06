export interface IElementStructure {
  tag: string,
  id: string,
  fill: Record<string, string> | Record<string, Record<string, string>>,
};

interface IMainContent {
  ru: Record<string, string>,
  en: Record<string, string>
};

export interface IMainElementStructure {
  tag: string,
  id: string,
  fill: IMainContent,
};

export interface IElement {
  tag: string,
  id: string,
  fill: string,
};

export interface IListener {
  type: string;
  node: 'header' | 'nav' | 'main' | 'footer';
  target: string;
  action: string;
};

export interface IModel {
  getStruct: (options: IStructureOptions) => void,
  
};

export interface IViewer {
  view: (data: IElement[]) => void,
};

export interface IController {
  regListener: (listener: IListener | IListener[]) => void;
};

export interface IViewerConfig {
  startLoaderId: string,
  toViewerEventName?: string,
  toControllerEventName?: string
};

export interface IModelConfig {
  HTMLStructure: { 
    header: IElementStructure,
    nav: IElementStructure,
    main: IMainElementStructure,
    footer: IElementStructure
  },
  toModelEventName?: string,
  toViewerEventName?: string,
  toControllerEventName?: string   
};

export interface IControllerConfig {
  toControllerEventName?: string,
  toViewerEventName?: string,
  toModelEventName?: string
};

export interface IStructureOptions {
  mainContent?: 'mainContent0'
};