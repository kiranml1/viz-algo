export default class SingletonHelper {

  /**
   * @contructor
   * SingletonHeler cannot be instantiated
   * it throws error if we try to create with new operator
   */
  constructor() {
    throw `You\re trying instantiate a singleton helper.`;
  }

  /**
   * pushes instances to the Singleton Helper
   * instances array
   * @param instance Instance of the class which will be passed from callClass method
   */
  static storeInstances(instance) {
    SingletonHelper._instances.push(instance);
  }

  /**
   * checks if the instance of the class exists in the instances
   * if yes returns a boolean value for it
   * @param className Class to check with instance
   * @returns {boolean}
   */
  static isInstanceInStore(className) {
    let _exists = false;
    for (let i = 0; i < SingletonHelper._instances.length; i += 1) {
      if (SingletonHelper._instances[i] && SingletonHelper._instances[i] instanceof className) {
        _exists = true;
        break;
      }
    }
    return _exists;
  }

  /**
   * gives the instance if it exists in the instances of the SingletonHelper
   * @param className Class to check with instance
   * @returns {*}
   */
  static getInstance(className) {
    let _instance;
    for (let i = 0; i < SingletonHelper._instances.length; i += 1) {
      if (SingletonHelper._instances[i] && SingletonHelper._instances[i] instanceof className) {
        _instance = SingletonHelper._instances[i];
        break;
      }
    }
    return _instance;
  }

  /**
   * Main function to be used if we want to create an instance of the class
   * and stores it / gives the instance from existing instance store
   * @param className
   * @param params
   * @returns {*}
   */
  static callClass(className, params) {
    if (SingletonHelper.isInstanceInStore(className)) {
      SingletonHelper._instanceOfClass = SingletonHelper.getInstance(className);
    } else {
      SingletonHelper._instanceOfClass = new (className.bind.apply(className, arguments));
      SingletonHelper.storeInstances(SingletonHelper._instanceOfClass);
    }
    return SingletonHelper._instanceOfClass;
  }

}

/**
 * latest instance of the class created from the SingletonHelper class
 * @type {undefined}
 * @private
 */
SingletonHelper._instanceOfClass = undefined;
/**
 * Collection of instances for SingletonHelper class
 * @type {Array}
 * @private
 */
SingletonHelper._instances = [];