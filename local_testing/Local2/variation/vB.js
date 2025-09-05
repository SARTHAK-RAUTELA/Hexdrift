(function () {
  try {
    var debug = 1;
    var variation_name = "budgetBlind_T49"
    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }
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
                nodes = (
                  node.parentNode || node.document
                ).querySelectorAll(selector),
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
    }
    function eventhandler() {
      // Main link → always navigates event handler k andr
      live(".primary-nav__item > a", "click", function (e) {
        var target = e.target;
        if (target && target.matches("a")) {
          var url = target.getAttribute("href");
          if (url && url !== "#") {
            window.location.href = url;
          }
        }
      });
    }

    function init() {
      document.querySelector('body').classList.add(variation_name);
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
          if (!item.querySelector('.submenu-toggle')) {
            link.insertAdjacentElement("afterend", toggle);
          }


          // Initialize aria-hidden
          subnav.setAttribute("aria-hidden", "true");

          // Toggle submenu (keyboard/mouse click on arrow)
          toggle.addEventListener("click", function (e) {
            e.preventDefault();

            // Close all other open submenus
            document.querySelectorAll(".primary-nav__item.is-open").forEach(function (openItem) {
              if (openItem !== item) {
                openItem.classList.remove("is-open");
                var openToggle = openItem.querySelector(".submenu-toggle");
                var openSubnav = openItem.querySelector(".primary-nav__subnav");
                if (openToggle) openToggle.setAttribute("aria-expanded", "false");
                if (openSubnav) openSubnav.setAttribute("aria-hidden", "true");
              }
            });

            // Toggle current submenu
            var expanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", String(!expanded));
            item.classList.toggle("is-open", !expanded);
            subnav.setAttribute("aria-hidden", String(expanded));
          });
        }
      });
      if (!window.eventAttached49) {
        eventhandler();
        window.eventAttached49 = true;

      }

    }
    waitForElement("body", init, 50, 15000);
  } catch (e) {
    console.log(e, "error in Test variation_name");
  }
})();
