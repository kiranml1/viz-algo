import { version } from './../../package.json';

const framework = {};

framework.version = version;

framework.getVersion = () => framework.version;

export default framework;
