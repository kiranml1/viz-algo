import { version } from './../../package.json';

/**
 * Framework class with version property
 */
export default class Framework {

  /**
   * @constructor
   */
  constructor() {
    this.version = version;
  }

  /**
   * give version of the framework
   * @returns {*}
   */
  getVersion() {
    return this.version;
  }

}
