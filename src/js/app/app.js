import Model from './model';
import Viewer from './viewer';
import { structure, startLoaderId } from './constants';
const model = new Model(structure);
const app = new Viewer({ startLoaderId, getHTML: model.getStruct });
export default app;
