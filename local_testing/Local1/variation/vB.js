(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "Cre-CX-T123";
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
          waitForElement: function (
            selector,
            trigger,
            delayInterval,
            delayTimeout
          ) {
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
      /* Variation Init */
      function init() {
        _$("body").addClass(variation_name);
        helper.waitForElement(".nav-bar .pricing", function () {
          if (!document.querySelector(".Articles-t123")) {
            document.querySelector(".nav-bar .pricing").insertAdjacentHTML("beforebegin", `<li class="Articles-t123"><a href="/topics/">Articles</a></li>`)
          }
        }, 50, 15000)
  
        // for mobile 
        helper.waitForElement(".nav-side-items", function () {
          document.querySelectorAll(".nav-side-items li>a").forEach(function (item) {
            if (item.textContent == "Pricing") {
              item.parentNode.classList.add("Pricing-123")
              helper.waitForElement(".Pricing-123", function () {
                document.querySelector(".Pricing-123").insertAdjacentHTML("beforebegin", `<li class="Articles-t123-mob"><a href="/topics/">Articles</a></li>`)
              }, 50, 15000)
            }
          })
        }, 50, 15000)
      }
  
      helper.waitForElement('body', init, 50, 15000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();