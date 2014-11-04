/*!
* Emissary
* v0.0.1 (11.03.2014)
* Evan Hammond <ehammond@myriadmobile.com>
*/

(function($) {
  var Emissary, UTIL;
  Emissary = {
    common: {
      init: function() {

        /* Common functionality */
      }
    },
    home: {
      init: function() {

        /* Home functionality */
      }
    }
  };
  UTIL = {
    fire: function(func, funcname, args) {
      var namespace;
      namespace = Emissary;
      funcname = funcname !== void 0 ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
        return namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      UTIL.fire('common');
      return $.each(document.body.className.replace(/bndr-/g, '').replace(/-/g, '_').split(/\s+/), function(i, classname) {
        return UTIL.fire(classname);
      });
    }
  };
  return $(document).ready(UTIL.loadEvents);
})(jQuery);
