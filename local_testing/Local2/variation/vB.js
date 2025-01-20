(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-245";
  
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
        };
        return function (selector) {
          return new bm(selector);
        };
      });
  
      var helper = _$();
      // Helper Library
  
      // Modal Exit HTML
      var newPara = `<div class="cre-t-245-para">Choose your tickets below. Enjoy the lowest  prices online and official tickets—guaranteed.</div>`;
  
      /* Variation Init */
      function init() {
        _$("body").addClass(variation_name);
        var searWorldElement = document.querySelector(`.section-navigation`);
        var creElement = document.querySelector(".cre-t-245-para");
        
        if (searWorldElement && !creElement) {
          searWorldElement.insertAdjacentHTML("afterend", newPara);
        }
      }
      /* Initialize variation */
      helper.waitForElement(".section-navigation", init, 50, 25000);
    } catch (e) {
      if (debug) console.log(e, "error in Test " + variation_name);
    }
  })();
  