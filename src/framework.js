import config from './config';

let framework = {};

framework.version = config.version;

framework.getVersion = () => framework.version;

export default framework;
