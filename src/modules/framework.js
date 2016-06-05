import { version } from './../../package.json';

let framework = {};

framework.version = version;

framework.getVersion = () => framework.version;

export default framework;
