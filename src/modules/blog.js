import framework from './framework';

/**
 * Blog instance
 */
let instance;

/**
 * This a initial entry point of a blog creation
 * with name and title, which should be called alteast once to
 * create blog and should a instance of this class
 * with name and title, which are optional while calling which will set
 * to 'unknown' or 'no title' names
 */
export default class Blog {

  /**
   * Constructor for Blog Class
   * @param title Title for blog instance
   * @param author Name for blog instance
   */
  constructor(title = 'no-title', author = 'unknown-author') {
    this.author = author;
    this.title = title;
    this.setVersion();
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
   * set author for the blog
   * @param author
   */
  setName(author) {
    this.author = author;
  }

  /**
   * return author for the blog
   * @returns {*}
   */
  getAuthor() {
    return this.author;
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
}

/**
 * Creates blog instance with name and title
 * @param name Name of the blog
 * @param title Title of the blog
 * @returns {*}
 */
export function blogInstance(name, title) {
  if (!instance) {
    instance = new Blog(name, title);
  }
  return instance;
}
