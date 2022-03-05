export interface IElementStructure {
  tag: string,
  id: string,
  fill: Record<string, string>,
};

export interface IElement {
  tag: string,
  id: string,
  fill: string,
};

export interface IListenerDetail {
  action: string,
  actTarget: string | null,
  fill: string;
};

export interface IListener {
  type: string,
  element?: string,
  detail?: IListenerDetail[]
};

export interface IModel {
  getStruct: (lang: string) => void,
  
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
};

export interface IModelConfig {
  HTMLStructure: { 
    header: IElementStructure,
    nav: IElementStructure,
    main: IElementStructure,
    footer: IElementStructure
  },
  toModelEventName?: string,
  toViewerEventName?: string   
};

export interface IControllerConfig {
  eventName?: string,
  viewDoneEventName?: string,
  eventChangeModelName?: string
};