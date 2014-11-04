(($) ->
  Emissary = {
    # Run on all pages
    common: {
      init: () ->
        ### Common functionality ###
    }

    # Run on pages with body.em-home
    home: {
      init: () ->
        ### body.em-home functionality ###
    }
  }

  UTIL = {
    fire: (func, funcname, args) ->
      namespace = Emissary
      funcname = if funcname? then funcname else 'init'

      if func isnt '' and namespace[func] and typeof namespace[func][funcname] is 'function'
        namespace[func][funcname](args)

    loadEvents: ->
      UTIL.fire('common')
      $.each(document.body.className.split(/\s+/), (i, classname) ->
        UTIL.fire(classname.replace(/em-/g, '').replace(/-/g, '_')) if classname.indexOf("em-") > -1
      )
  }

  $(document).ready(UTIL.loadEvents);
)(jQuery)