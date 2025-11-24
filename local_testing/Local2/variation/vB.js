(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-32";

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

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return false;
    }

    function debounce(func, timeout = 300) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, timeout);
      };
    }

    function observeSelector(selector, callback, options = {}) {
      const document = options.document || window.document;
      const processed = new Map();

      if (options.timeout || options.onTimeout) {
        throw `observeSelector options \`timeout\` and \`onTimeout\` are not yet implemented.`;
      }

      let obs;
      let isDone = false;

      const done = () => {
        if (obs) obs.disconnect();
        isDone = true;
      };

      const processElement = (el) => {
        if (!processed.has(el)) {
          processed.set(el, true);
          callback(el);
          if (options.once) {
            done();
            return true;
          }
        }
        return false;
      };

      const lookForSelector = () => {
        const elParent = document.documentElement;
        if (elParent.matches(selector) || elParent.querySelector(selector)) {
          const elements = elParent.querySelectorAll(selector);
          elements.forEach((el) => processElement(el));
        }
      };

      const debouncedLookForSelector = debounce(() => {
        lookForSelector();
      }, 100);

      // Initial check for the selector on page load
      lookForSelector();

      if (!isDone) {
        obs = new MutationObserver(() => {
          debouncedLookForSelector();
        });

        obs.observe(document, {
          attributes: false,
          childList: true,
          subtree: true,
        });
      }

      return done;
    }

    function listener() {
      window.addEventListener("locationchange", function () {
        const getPathName = window.location.hash;
        if (getPathName != "#/dashboard" && getPathName != "#/" && getPathName != "#/credit-report") {
          if (document.querySelector(".cre-t-32-alert-box-container")) {
            document.querySelector(".cre-t-32-alert-box-container").remove();
          }
        }
      });
      history.pushState = ((f) =>
        function pushState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("pushstate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.pushState);
      history.replaceState = ((f) =>
        function replaceState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("replacestate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        })(history.replaceState);
      window.addEventListener("popstate", function () {
        window.dispatchEvent(new Event("locationchange"));
      });
    }
    function updateChanges() {
      observeSelector("#negative-items-alert", function (el) {
        document.body.classList.add("cre-t-32-loaded");
        const newAlertBox = `<div class="cre-t-32-alert-box-container">
    <div class="cre-t-32-alert-box-wrapper">
        <div class="cre-t-32-alert-box-cross-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
        <div class="cre-t-32-alert-box-main">
            <h3 class="cre-t-32-alert-title">Alert</h3>
            <div class="cre-t-32-alert-description">
                <div class="cre-t-32-alert-paragraph firstPara">
                    We’ve identified items that may be hurting your score.
                </div>
                <div class="cre-t-32-alert-paragraph secondPara">
                  Call now for your complimentary review—a credit specialist will walk you through each item and explain how it can be disputed and potentially removed.
                </div>
            </div>
            <a href=${document.querySelector("#negative-items-alert a").href} class="w-full block text-center px-3 py-4 text-[26px] leading:[38px] md:text-[34px] md:leading-[46px] shadow-sm text-base-60 font-medium bg-amber-500 hover:bg-amber-600 rounded-md cre-t-32-cta"> Tap To Call </a>
        </div>
    </div>
</div>`;
        document.querySelector(`.cre-t-32-loaded  #negative-items-alert`).insertAdjacentHTML("afterend", newAlertBox);
      });

      observeSelector("#step-payments", function (el) {
        document.body.classList.add("cre-t-32-checkBox-added");
        var inputHTML = `<div class="cre-t-32-checkbox-container" style="display: none;">
    <input type="checkbox" id="cre-t-32-checkbox" class="cre-t-32-checkbox" checked>
    <label for="cre-t-32-checkbox" class="cre-t-32-checkbox-label">
        <span class="cre-t-32-custom-checkbox"></span>
        Highlight issues on my credit report that may be impacting my score, and enable my optional free specialist
        review (recommended)
    </label>
</div>`;

        var getForm = document.querySelector(`.cre-t-32-checkBox-added #step-payments form>div.w-full>div.mt-5>div.grid`);
        getForm.insertAdjacentHTML("afterend", inputHTML);
      });
    }

    /* Variation Init */
    function init() {
      helper.log("Log inside from init");
      _$("body").addClass(variation_name);

      if (getCookie("negative_items_alert_dismissed")) {
        return;
      }

      if (!window.creT32Observer) {
        window.creT32Observer = true;
        setTimeout(function () {
          updateChanges();
          live(".cre-t-32-alert-box-cross-icon", "click", function () {
            document.querySelector(".cre-t-32-alert-box-container").remove();
            document.querySelector("#negative-items-alert button").click();
          });
        }, 500);
      }
    }

    if (window.creT32Listener) {
      window.creT32Listener = true;
      setTimeout(function () {
        listener();
      }, 500);
    }

    /* Initialise variation */
    helper.waitForElement("body", init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();