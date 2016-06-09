import SingletonHelper from './modules/singleton-helper';
import Blog from './modules/blog';
import Framework from './modules/framework';
import Post from './modules/post';

const namespace = {
  Framework,
  Blog,
  SingletonHelper,
  Post,
};

/**
 * Architecture Notes:
 * ===================
 * *** Imp ***
 * Currently renderer-react project is separate from source with react components
 * but can be later merged with framework after stability, which is currently also a dev folder
 * for blog development in app dev patterns like Redux / Flux
 * currently thinking the library name and blog name to be 'Kefex'
 * TODO: Need to explore how to publish this as a npm module and look to require for both projects
 *
 * chosen a renderer ( ../renderer-react ) can be incompatible with a
 * blogging api which is universal and decided to separate it and work on a separate
 * folder to make it a addon on further progress of api
 * TODO: Add scss linter
 * TODO: Add scss build with webpack
 * TODO: Add isparata to the test coverage with es6 support
 * TODO: Add E2E support for blog development, which is currently a project along side running with
 * renderer-react
 * TODO: Add Rx JS for Async support to the framework
 * TODO: Add support for d3 for the renderer project to enable visualization
 * TODO: Need to develop a layout mixins in responsvie mode fot the blog in scss
 */

export default namespace;
