// Vendor
import { h, render } from 'preact';

// Local
// Importing this here will ensure the singleton is created before anything is added to the command queue.
import GoogleAnalyticsService from './services/GoogleAnalyticsService.jsx';

// Stylesheet
import 'normalize.css';

let root = null;
function init() {
  let App = require('./components/app').default;
  root = render(<App />, document.body, root);
}

// Enable React DevTools, and hot module when in development.
if (module.hot) {
  require('preact/devtools');
  module.hot.accept('./components/app', () => requestAnimationFrame(init));
}

init();
