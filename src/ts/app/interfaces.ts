export interface IElement {
  tag: string,
  id: string,
  fill: Record<string, string>,
};

export interface IListenerDetail {
  action: string,
  actTarget: HTMLElement | null | Element,
  fill: string;
};

export interface IListener {
  type: string,
  element?: string,
  detail?: IListenerDetail[]
};

export interface IModel {
  getStruct: () => void,
};

export interface IViewer {
  view: (event: CustomEvent) => void,
};

export interface IController {
  regListener: (listener: IListener | IListener[]) => void;
};

export interface IViewerConfig {
  startLoaderId: string,
  modelReadyEventName?: string,
  doneEventName?: string
};

export interface IModelConfig {
  HTMLStructure: IElement[], 
  eventReadyName?: string,
  eventChangeModelName?: string
};

export interface IControllerConfig {
  eventName?: string,
  viewDoneEventName?: string,
  eventChangeModelName?: string
};