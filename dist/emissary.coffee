# Emissary
# v0.0.1 (11.04.2014)
# Evan Hammond <ehammond@myriadmobile.com>

(($) ->
  Emissary = {
    # Run on all pages
    common: {
      init: () ->
        ### Common functionality ###
    }

    # Run on pages with body.bndr-home
    home: {
      init: () ->
        ### body.bndr-home functionality ###
    }
  }

  UTIL = {
    fire: (func, funcname, args) ->
      namespace = Emissary
      funcname = if funcname isnt undefined then 'init' else funcname

      if func isnt '' and namespace[func] and typeof namespace[func][funcname] is 'function'
        namespace[func][funcname](args)

    loadEvents: ->
      UTIL.fire('common')
      $.each(document.body.className.replace(/bndr-/g, '').replace(/-/g, '_').split(/\s+/), (i, classname) ->
        UTIL.fire(classname)
      )
  }

  $(document).ready(UTIL.loadEvents);
)(jQuery)