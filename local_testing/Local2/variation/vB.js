(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "control";

    /* helper library */
    var _$;
    !(function (factory) {
      _$ = factory();
    })(function () {
      var bm = function (s) {
        if (typeof s === "string") {
          this.value = Array.prototype.slice.call(document.querySelectorAll(s));
        }
        if (typeof s === "object") {
          this.value = [s];
        }
      };
      bm.prototype = {
        eq: function (n) {
          this.value = [this.value[n]];
          return this;
        },
        each: function (fn) {
          [].forEach.call(this.value, fn);
          return this;
        },
        log: function () {
          var items = [];
          for (let index = 0; index < arguments.length; index++) {
            items.push(arguments[index]);
          }
          console && console.log(variation_name, items);
        },
        addClass: function (v) {
          var a = v.split(" ");
          return this.each(function (i) {
            for (var x = 0; x < a.length; x++) {
              if (i.classList) {
                i.classList.add(a[x]);
              } else {
                i.className += " " + a[x];
              }
            }
          });
        },
        waitForElement: function (selector, trigger, delayInterval, delayTimeout) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, delayInterval);
          setTimeout(function () {
            clearInterval(interval);
          }, delayTimeout);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var helper = _$();

    function live(selector, event, callback, context) {
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this.Element &&
        (function (ElementPrototype) {
          ElementPrototype.matches =
            ElementPrototype.matches ||
            ElementPrototype.matchesSelector ||
            ElementPrototype.webkitMatchesSelector ||
            ElementPrototype.msMatchesSelector ||
            function (selector) {
              var node = this,
                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                i = -1;
              while (nodes[++i] && nodes[i] != node);
              return !!nodes[i];
            };
        })(Element.prototype);
      // live binding helper using matchesSelector
      function live(selector, event, callback, context) {
        addEvent(context || document, event, function (e) {
          var found,
            el = e.target || e.srcElement;
          while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
          if (found) callback.call(el, e);
        });
      }
      live(selector, event, callback, context);
    }

    /* Variation Init */
    function init() {
      //helper.log("Log inside from init");
      //_$("body").addClass(variation_name);

      // ALL13 - Clicks on [Register] top-level navigation item
      live('.navPages-item > a[aria-label="Register"]', "mousedown", function () {
        console.log("Register goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035953"]);
      });

      // ALL13 - Clicks on [Sign in] top-level navigation item
      live('.navPages-item > a[aria-label="Sign in"]', "mousedown", function () {
        console.log("Sign in goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035954"]);
      });

      // ALL13 - Clicks on [About] top-level navigation item
      live('.navPages-item > a[aria-label="About"], .CRE_EXP_13-nav-item5', "mousedown", function () {
        console.log("About goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035955"]);
      });

      // ALL13 - Clicks on [Blog] top-level navigation item
      live('.navPages-item > a[aria-label="Blog"]', "mousedown", function () {
        console.log("Blog goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035956"]);
      });

      // ALL13 - Clicks on [FAQ] top-level navigation item
      live('.navPages-item > a[aria-label="FAQ"], .CRE_EXP_13-nav-item3', "mousedown", function () {
        console.log("FAQ goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035957"]);
      });

      // ALL13 - Clicks on [Free Resources] top-level navigation item
      live('.navPages-item > a[aria-label="Free Resources"], .CRE_EXP_13-nav-item4', "mousedown", function () {
        console.log("Free Resources goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035958"]);
      });

      // ALL13 - Clicks on [Shop All Products] top-level navigation item
      live('.navPages-item > a[aria-label="Shop All Products"]', "mousedown", function () {
        console.log("Shop All Products goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035959"]);
      });

      // ALL13 - Clicks on [Programs] top-level navigation item
      live('.navPages-item > a[aria-label="Programs"], .CRE_EXP_13-nav-item1', "mousedown", function () {
        console.log("Programs goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035961"]);
      });

      // ALL13 - Clicks on any top level navigation item
      live(".navPages-list .navPages-item > .navPages-action, .CRE_EXP_13-nav-item", "mousedown", function () {
        console.log("Any top level navigation goal should trigger");
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100035962"]);
      });
    }

    /* Initialise variation */
    helper.waitForElement("body", init, 50, 5000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();