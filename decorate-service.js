/// $provide is what Angular uses internally to create all the services. We can use it to create new
/// services if we want but also to decorate existing services. $provide has a method called
/// decorator that allows us to do that. decorator receives the name of the service and a callback
/// function that receives a $delegate parameter. That $delegate parameter is our original service instance.

// Simpler

app.config(function($provide) {
  $provide.decorator('foo', function($delegate) {
    $delegate.greet = function() {
      return "Hello, I am a new function of 'foo'";
    };

    return $delegate;
  });
});

// Verbose
app.factory('System', function() {
    function System() {
      this.error = 15;
    }
    return System;
});
app.config(function($provide) {
    $provide.decorator('System', function($delegate) {

      Object.defineProperty($delegate.prototype, 'message', {
        get: function() { return parseMessage(this.error); }
      });

      function parseMessage(error) {
        return {
          15: 'Faulted'
        }[error];
      }

      return $delegate;

    });
});