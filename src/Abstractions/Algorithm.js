/**
 * Class used as abstract for all algorithms with actual implementation
 */
export default class Algorithm {
  /**
   * Create a Algorithm with it's class name
   */
  constructor() {
    this._setName();
  }

  /**
   * Set class name to the implementation class
   * @param {string} [name] - Name of the class defined while creating an instance from it
   */
  set name(name) {
    if (name) {
      this._name = name;
    }
  }

  /**
   * Get the name from defined class instance from the class's definition
   * @returns {string} Algorithm#name Name of the class instance
   */
  get name() {
    return this._name;
  }

  /**
   * Set property name to the instance from its created constructor's name
   * @private
   */
  _setName() {
    this.name = this.constructor.name;
  }
}
