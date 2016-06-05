import framework from './framework';
import moment from 'moment';

export default class Blog {

  constructor(title, name) {
    this.name = name;
    this.title = title;
    this.setVersion();
    this.createdTimestmap = moment().format();
  }

  setVersion() {
    this.version = framework.version;
  }

  getVersion() {
    return this.version;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  getCreatedTime() {
    return this.createdTimestmap;
  }
}
