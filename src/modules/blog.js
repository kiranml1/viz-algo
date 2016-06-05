import framework from './framework';
import moment from 'moment';

/**
 * Blog - Class for framework with setters and getters
 * for version, name and title with created time stamp
 */
export default class Blog {

  /**
   * Constructor for Blog Class
   * @param title Title for blog instance
   * @param name Name for blog instance
   */
  constructor(title, name) {
    this.name = name;
    this.title = title;
    this.setVersion();
    this.createdTimestmap = moment().format();
  }

  /**
   * set version for blog instance
   */
  setVersion() {
    this.version = framework.version;
  }

  /**
   * return version na,e
   * @returns {*}
   */
  getVersion() {
    return this.version;
  }

  /**
   * set name for the blog
   * @param name
   */
  setName(name) {
    this.name = name;
  }

  /**
   * return name for the blog
   * @returns {*}
   */
  getName() {
    return this.name;
  }

  /**
   * set title for the blog instance
   * @param title
   */
  setTitle(title) {
    this.title = title;
  }

  /**
   * return title for the blog
   * @returns {*}
   */
  getTitle() {
    return this.title;
  }

  /**
   * return time stamp for blog instance
   * @returns {*|any|string}
   */
  getCreatedTime() {
    return this.createdTimestmap;
  }
}
