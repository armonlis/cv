export interface IApp {
  run: () => void,
};

export interface IAppElement {
  tag: string,
  id?: string,
  elClass?: string,
  fill?: Record<string, string>,
};
export interface IAppConfig {
  startLoaderId: string,
  structure: IAppElement[],
  lang?: string
};