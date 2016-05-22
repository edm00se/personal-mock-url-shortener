var compression = require('compression');
var cleanUrls = require('clean-urls');
var nodalytics = require('nodalytics');
var ga = process.env.GOOGLE_ANALYTICS || '';

module.exports = function(app){
  //enables and instantiates express-toobusy, which keeps it from melting under HIGH pressure
  app.use(require('express-toobusy')());

  // compress responses
  app.use(compression());

  // use clean URLs (aka- /docs.html becomes /docs)
  app.use(cleanUrls());

  // Node Google Analytics, overriding x-client-ip for uip w/ GA, as without,
  // even with x-forwarded-for, GA reports Bluemix proxy as origin IP
  app.use(nodalytics({
    property_id: ga,
    map: function (req, event) {
      // This function is called to augment the default Google Analytics Event object
      // created by nodalitics for the specified request.
      // Parameters:
      // - req - the Http request that triggered logging attempt
      // - event - an object representing default values of the Google Analytics Event
      //           created by nodalitics for the specified request
      // Return: a Google Analytics Event object to log.
      if( req.get('x-client-ip') ){
        event.uip = req.get('x-client-ip');
      }
      return event;
    },
    error: function (error, event, headers, req, grec, gres) {
        // This function is called when an error occurs communicating with Google Analytics.
        // Parameters:
        // - error - the error
        // - event - the Google Analytics Event logging of which failed
        // - headers - HTTP request headers sent to Google Analytics
        // - req - the HTTP request that triggered logging attempt
        // - greq - the HTTP request sent to Google Analytics that failed
        // - gres - the HTTP response from Google Analytics
    },
    success: function (event, headers, req, grec, gres) {
        // This function is called after successful logging with Google Analytics.
        // Parameters are the same as with the errors handler above.
    }
  }));
};
