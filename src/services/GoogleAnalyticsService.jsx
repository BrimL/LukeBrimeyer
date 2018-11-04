class GoogleAnalyticsService{
  // Create a new instance of the Google Analytics global command queue
  constructor() {
    const trackingID = 'UA-128628640-1';
    const isDebug = false;

    let analyticsSrc = 'https://www.google-analytics.com/analytics.js';

    if (isDebug) {
      analyticsSrc = 'https://www.google-analytics.com/analytics_debug.js';
    }

    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o), m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', analyticsSrc, 'ga');


    this.getTracker(trackingID);

    // Don't actually send anayltic events if we're local
    if (location.hostname == 'localhost') {
      ga('set', 'sendHitTask', null);
    }
  }

  // Create a new tracker object for the specified property ID.
  getTracker = (trackingID) => { ga('create', trackingID, 'auto'); }

  // Stub for event logging, currently this is only for `pageview` events.
  trackEvent = (eventDetails) => { ga('send', 'event', ...eventDetails) };

  // Set the page on the tracker and send the pageview event.
  trackPageView = () => {
    ga('send', 'pageview');
  }
}

// Default export a singleton for use in "most cases".
export default new GoogleAnalyticsService;
