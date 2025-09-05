(function () {
  try {
    var debug = 1;
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
        live: function (selector, event, callback, context) {
          function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
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
          function live(selector, event, callback, context) {
            addEvent(context || document, event, function (e) {
              var found,
                el = e.target || e.srcElement;
              while (
                el &&
                el.matches &&
                el !== context &&
                !(found = el.matches(selector))
              )
                el = el.parentElement;
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

    function init() {
      document.querySelectorAll(".primary-nav__item").forEach(function (item, idx) {
        var link = item.querySelector("a");
        var subnav = item.querySelector(".primary-nav__subnav");

        if (link && subnav) {
          if (!subnav.id) {
            subnav.id = "submenu-" + idx;
          }

          // Create toggle button
          var toggle = document.createElement("button");
          toggle.className = "submenu-toggle";
          toggle.setAttribute("aria-label", link.textContent + " submenu");
          toggle.setAttribute("aria-expanded", "false");
          toggle.setAttribute("aria-controls", subnav.id);
          toggle.innerHTML = "&#9662;"; // ▼

          link.insertAdjacentElement("afterend", toggle);
          subnav.hidden = true;

          // Toggle submenu
          toggle.addEventListener("click", function (e) {
            e.preventDefault();

            // Close all other open submenus
            document.querySelectorAll(".primary-nav__item.is-open").forEach(function (openItem) {
              if (openItem !== item) {
                openItem.classList.remove("is-open");
                var openToggle = openItem.querySelector(".submenu-toggle");
                var openSubnav = openItem.querySelector(".primary-nav__subnav");
                if (openToggle) openToggle.setAttribute("aria-expanded", "false");
                if (openSubnav) openSubnav.hidden = true;
              }
            });

            // Toggle current submenu
            var expanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", String(!expanded));
            item.classList.toggle("is-open", !expanded);
            subnav.hidden = expanded;
          });
        }
      });

      // Main link → always navigates
      helper.live(".primary-nav__item > a", "click", function (e) {
        var target = e.target;
        if (target && target.matches("a")) {
          var url = target.getAttribute("href");
          if (url && url !== "#") {
            window.location.href = url;
          }
        }
      });
    }

    helper.waitForElement("body", init, 50, 15000);
  } catch (e) {
    console.log(e, "error in Test variation_name");
  }
})();
