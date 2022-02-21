export interface IElement {
  tag: string,
  id: string,
  fill: Record<string, string>,
};

export interface IModel {
  getStruct: () => void,
};

export interface IViewer {
  view: (event: CustomEvent) => void,
};

export interface IViewerConfig {
  startLoaderId: string,
  modelReadyEventName?: string,
};

export interface IModelConfig {
  HTMLStructure: IElement[], 
  eventReadyName?: string
};