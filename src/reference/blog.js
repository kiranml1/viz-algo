import Framework from './framework';

/**
 * This is Blog which extends Framework with title and author properties, which shall be used
 * create a new blog for each author with a title
 */
export default class Blog extends Framework {

  /**
   * Constructor for Blog
   * @param title Title for blog
   * @param author Name for blog
   */
  constructor(title = 'no-title', author = 'unknown-author') {
    super();
    this.author = author;
    this.title = title;
  }

  /**
   * set author for the blog
   * @param author
   */
  setAuthor(author) {
    this.author = author;
  }

  /**
   * gives author for the blog
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
   * give title for the blog
   * @returns {*}
   */
  getTitle() {
    return this.title;
  }
}
