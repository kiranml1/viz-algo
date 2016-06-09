import Blog from './blog';

/**
 * This is Post extending Blog to create some content
 * in a blog
 */
export default class Post extends Blog {

  /**
   * Create a post with title
   * and inherit the author and name of the blog
   * from Blog class
   * @constructor
   * @param title Blog title of the Post
   */
  constructor(title) {
    super();
    this.postTitle = title;
  }

  /**
   * sets title for the post
   * @param title
   */
  setPostTitle(title) {
    this.postTitle = title;
  }

  /**
   * return title of the post
   * @returns {*}
   */
  getPostTitle() {
    return this.postTitle;
  }

  /**
   * sets content for the post
   * @param content
   */
  setContent(content) {
    this.content = content;
  }

  /**
   * returns content of the post
   * @returns {*}
   */
  getContent() {
    return this.content;
  }

}
