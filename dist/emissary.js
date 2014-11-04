/*!
* Emissary
* v0.1.1 (11.04.2014)
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

        /* body.em-home functionality */
      }
    }
  };
  UTIL = {
    fire: function(func, funcname, args) {
      var namespace;
      namespace = Emissary;
      funcname = funcname != null ? funcname : 'init';
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
        return namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      UTIL.fire('common');
      return $.each(document.body.className.split(/\s+/), function(i, classname) {
        if (classname.indexOf("em-") > -1) {
          return UTIL.fire(classname.replace(/em-/g, '').replace(/-/g, '_'));
        }
      });
    }
  };
  return $(document).ready(UTIL.loadEvents);
})(jQuery);
