export default class SingletonHelper {

  /**
   * @contructor
   * SingletonHeler cannot be instantiated
   * it throws error if we try to create with new operator
   */
  constructor() {
    throw new Error('You\'re trying instantiate a singleton helper.');
  }

  /**
   * pushes instances to the Singleton Helper
   * instances array
   * @param instance Instance of the class which will be passed from callClass method
   */
  static storeInstances(instance) {
    SingletonHelper.instances.push(instance);
  }

  /**
   * checks if the instance of the class exists in the instances
   * if yes returns a boolean value for it
   * @param className Class to check with instance
   * @returns {boolean}
   */
  static isInstanceInStore(className) {
    let exists = false;
    for (let i = 0; i < SingletonHelper.instances.length; i += 1) {
      if (SingletonHelper.instances[i] && SingletonHelper.instances[i] instanceof className) {
        exists = true;
        break;
      }
    }
    return exists;
  }

  /**
   * gives the instance if it exists in the instances of the SingletonHelper
   * @param className Class to check with instance
   * @returns {*}
   */
  static getInstance(className) {
    let instance;
    for (let i = 0; i < SingletonHelper.instances.length; i += 1) {
      if (SingletonHelper.instances[i] && SingletonHelper.instances[i] instanceof className) {
        instance = SingletonHelper.instances[i];
        break;
      }
    }
    return instance;
  }

  /**
   * Main function to be used if we want to create an instance of the class
   * and stores it / gives the instance from existing instance store
   * @returns {*}
   */
  static callClass(...args) {
    const className = args[0];
    if (SingletonHelper.isInstanceInStore(className)) {
      SingletonHelper.instanceOfClass = SingletonHelper.getInstance(className);
    } else {
      SingletonHelper.instanceOfClass = new (className.bind.apply(className, args));
      SingletonHelper.storeInstances(SingletonHelper.instanceOfClass);
    }
    return SingletonHelper.instanceOfClass;
  }

}

/**
 * latest instance of the class created from the SingletonHelper class
 * @type {undefined}
 * @private
 */
SingletonHelper.instanceOfClass = undefined;
/**
 * Collection of instances for SingletonHelper class
 * @type {Array}
 * @private
 */
SingletonHelper.instances = [];
