export interface IElement {
  tag: string,
  id: string,
  fill: Record<string, string>,
};

export interface IModel {
  getStruct: () => HTMLElement[],
};

export interface IViewer {
  view: () => void,
};

export interface IViewerConfig {
  startLoaderId: string,
  getHTML: () => HTMLElement[],
};