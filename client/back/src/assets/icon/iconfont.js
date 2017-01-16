;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-kanguos" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M973.509697 507.453232c-1.203466-2.984104-123.898648-298.359234-453.687169-298.359234S67.337801 504.469128 66.134335 507.453232c-3.74241 9.312533-2.906329 19.828532 2.257522 28.436997 7.210561 11.999864 179.664347 293.812466 451.429647 293.812466 271.758136 0 444.219086-281.812602 451.429647-293.812466C976.416026 527.281764 977.252107 516.765766 973.509697 507.453232zM519.822528 765.703079c-203.655889 0-350.702833-194.937925-387.578418-249.046813 27.273442-55.297003 138.437456-243.562652 387.578418-243.562652 249.195199 0 360.35205 188.359797 387.578418 243.562652C870.525361 570.766177 723.47023 765.703079 519.822528 765.703079z"  ></path>' +
    '' +
    '<path d="M519.822528 308.625534c-114.695614 0-208.000032 93.312605-208.000032 208.000032s93.304418 208.000032 208.000032 208.000032 208.000032-93.312605 208.000032-208.000032S634.517118 308.625534 519.822528 308.625534zM519.822528 660.624958c-79.398043 0-144.000416-64.594186-144.000416-144.000416s64.601349-144.000416 144.000416-144.000416 144.000416 64.594186 144.000416 144.000416S599.220571 660.624958 519.822528 660.624958z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)