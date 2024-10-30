(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-34";
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
  
      function live(selector, event, callback, context) {
        // helper for enabling IE 8 event bindings
        function addEvent(el, type, handler) {
          if (el.attachEvent) el.attachEvent("on" + type, handler);
          else el.addEventListener(type, handler);
        }
        // matches polyfill
        this &&
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
  
  
      var helper = _$();
  
      var bannerHtml = `
      <div class="cre_34_banner_section">
              <div class="cre_34_banner_container">
              <div class="cre_34_banner_main">
              <span class="cre_34_banner_new">new</span>
                <span class="cre_34_banner_text">Explore our comprehensive library of maintenance schedules. <a href="https://www.sfg20.co.uk/maintenance-schedules?t_view=1" class="cre_t_34_view">View full list</a>.</span>
                <span class="cre_34_banner_close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1.2 12L0 10.8L4.8 6L0 1.2L1.2 0L6 4.8L10.8 0L12 1.2L7.2 6L12 10.8L10.8 12L6 7.2L1.2 12Z" fill="#243033"/>
                  </svg>
                </span>
              </div>
              </div>
            </div>
      `;
   
  
      /* Variation Init */
      function init() {
        _$("body").addClass(variation_name);
  
        if (!document.querySelector('.cre_34_banner_section')) {
          document.querySelector(".header-container").insertAdjacentHTML("beforebegin", bannerHtml);
        }
  
        helper.waitForElement(".cre_34_banner_section .cre_34_banner_close", function () {
          live(".cre_34_banner_section .cre_34_banner_close", "click", function () {
            document.querySelector("body").classList.add("cre_34_hide_chat");
          });
        }, 50, 50000);
  
   
  
        document.addEventListener('DOMContentLoaded', function() {
          if (window.location.href.includes('?t_view=1')) {
              var targetElement = document.querySelector('.cre-t-30-main-list-container');
              
              if (targetElement) {
                  var offset = -150; // Adjust this value to scroll slightly above the element
                  var elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
      
                  window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                  });
              }
          }
        });
  
      
      }
  
      /* Init variation */
      helper.waitForElement(".header-top-strip", init, 50, 50000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();