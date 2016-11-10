//https://github.com/lelandrichardson/enzyme-example-mocha/blob/master/test/.setup.js

require('babel-register')();

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

// commented due to a reference error and need to re-look for this issue if it
// raises again with tests for enzyme
// documentRef = document;
