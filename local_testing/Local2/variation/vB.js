(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-68";
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
          for (var index = 0; index < arguments.length; index++) {
            items.push(arguments[index]);
          }
          console && console.log(variation_name, items);
        },
        // Adding Class
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
        // Waiting for element to load
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
        live: function (selector, event, callback, context) {
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
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });
    var helper = _$();
    // Helper Library
    function customGoal() {
      // SFG20 Standard
      helper.live("#mega_loop_1 .cre-t-50-header-text", "mouseover", function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036702"]);
      });
      // Software
      helper.live("#mega_loop_2 .cre-t-50-header-text", "mouseover", function () {
        window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036703"]);
      });
      //  What is SFG menu
      helper.live('[data-id="the_sfg20_standard"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036706"]);
      });
      //  Maintenance Schedules
      helper.live('[data-id="maintenance_schedules"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036708"]);
      });
      //  Software content goal for variation and control
      //  [data-id="facilities_iq"]
      helper.live('a[data-id="facilities_iq"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036707"]);
      });
      //  [data-id="integration_with_fm_systems"]
      helper.live('[data-id="integration_with_fm_systems"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036711"]);
      });
      //  Industry Content Goal for variation and control
      //  Healthcare
      helper.live('a[data-id="healthcare"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036712"]);
      });
      //  [data-id="education"]
      helper.live('a[data-id="education"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036713"]);
      });
      // data-id="facilities_management"
      helper.live('a[data-id="facilities_management"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036714"]);
      });
      //  data-id="government"
      helper.live('a[data-id="government"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036715"]);
      });
      //  data-id="sports"
      helper.live('a[data-id="sports"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036716"]);
      });
      //  data-id="hvac"
      helper.live('a[data-id="hvac"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036717"]);
      });
      // data-id="residential"
      helper.live('a[data-id="residential"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036718"]);
      });
      //  data-id="other_industries"
      helper.live('a[data-id="other_industries"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036719"]);
      });
      // Only for control
      // [data-id="accessing_the_schedules"]
      helper.live('a[data-id="accessing_the_schedules"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036725"]);
      });
      // [data-id="features_&_benefits"]
      helper.live('a[data-id="who_we_help"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036726"]);
      });
      //  [data-id="features_&_benefits"]
      helper.live('a[data-id="features_&_benefits"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036737"]);
      });
      // data-id="member_list"
      helper.live('a[data-id="member_list"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036727"]);
      });
      // data-id="claim_your_badge"
      helper.live('a[data-id="claim_your_badge"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036738"]);
      });
      //
      // data-id="verify_a_sfg20_contractor"
      helper.live('a[data-id="verify_a_sfg20_contractor"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036728"]);
      });
      // data-id="core_library"
      helper.live('a[data-id="core_library"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036731"]);
      });
      // data-id="building_fabric"
      helper.live('a[data-id="building_fabric"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036732"]);
      });
      // data-id="catering"
      helper.live('a[data-id="catering"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036733"]);
      });
      // data-id="htm_aligned"
      helper.live('a[data-id="htm_aligned"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036734"]);
      });
      // data-id="mothballing_&_reactivation"
      helper.live('a[data-id="mothballing_&_reactivation"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036735"]);
      });
      // data-id="security"
      helper.live('a[data-id="security"]', "click", function () {
        window._conv_q = window._conv_q || [];
        _conv_q.push(["triggerConversion", "100036736"]);
      });
    }
    /* Variation Init */
    function init() {
      _$("body").addClass(variation_name);
      customGoal();
      // eventHandler();
    }
    /* Initialize variation */
    helper.waitForElement('[data-id="accessing_the_schedules"]', init, 50, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();