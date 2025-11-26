(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-146";

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

    function setBmCookie() {
      document.cookie = "cre-t-146=cre-t-146-modal-triggered; path=/";
    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
    }

    function removeContentSetCookie() {
      document.querySelector(".cre-t-146-modal-main").classList.remove("active");
      setBmCookie();
    }
    // Helper Library
    // Function to determine credit text based on domain
    function getCreditText(domain) {
      switch (domain) {
        case "www.firsttable.co.nz":
        case "firsttable.co.nz":
          return "$5"; // NZ
        case "www.firsttable.com.au":
        case "firsttable.com.au":
          return "$5"; // AU
        case "www.firsttable.co.uk":
        case "firsttable.co.uk":
          return "£3"; // UK
        default:
          return "$5";
      }
    }

    function modalInsertion() {
      var getDomain = window.location.hostname;
      var creditText = getCreditText(getDomain);
      var modalHTML = `<div class="cre-t-146-modal-main active">
    <div id="cre-t-146-modal-overlay" class="cre-t-146-overlay"></div>
    <div class="cre-t-146-modal-content">
        <div class="cre-t-146-modal-badge-wrapper">
            <img src="https://v2.crocdn.com/FirstTable/badge.svg" alt="badge"
                class="cre-t-146-modal-badge">
        </div>
        <div class="cre-t-146-modal-cross-icon-wrapper">
            <img src="https://v2.crocdn.com/FirstTable/crossIcon.svg"
                alt="cross_icon" class="cre-t-146-cross-icon">
        </div>
        <div class="cre-t-146-modal-logo-wrapppr">
            <img src="https://v2.crocdn.com/FirstTable/Main_Logo.png" alt=""
                class="cre-t-146-logo">
        </div>

        <div class="cre-t-146-main-title">
            Claim your <span class="cre-t-146-underLine"> <span class="cre-t-146-dynamicPrice">${creditText}</span> free
                credit</span>
        </div>
        <div class="cre-t-146-main-displayImage-wrapper">
            <img class="cre-t-146-displayImage"
                src="https://v2.crocdn.com/FirstTable/imageDisplay.svg"
                alt="modalImage">
        </div>

        <div class="cre-t-146-text-area">
            <div class="cre-t-146-first-para">Join First Table today and we’ll credit your account with ${creditText} you can use
                towards your first booking. It’s free to join
                and takes under a minute—no credit card required.</div>
            <div class="cre-t-146-second-para">Credit valid for 30 days. Offer available for new customers only.</div>
        </div>

        <a href="${window.location.origin}/auth/sign-up?code=CREDITME" class="cre-t-146-modal-cta">
            <div class="cre-t-146-modal-cta-text">Claim My Free Credit</div>
            <div class="cre-t-146-modal-arrow-wrapper">
                <img src="https://v2.crocdn.com/FirstTable/arrow.svg" alt="arrowIcon">
            </div>
        </a>


        <div class="cre-t-146-modal-footer">
            <div class="cre-t-146-footer-group-image">
                <img class="cre-t-146-group-image-pic" src="https://v2.crocdn.com/FirstTable/groupPhoto.svg" alt="groupImage">
            </div>
            <div class="cre-t-146-modal-footer-text">Join 2.5m+ diners saving 50% at top restaurants</div>
        </div>
    </div>
</div>`;
      document.body.insertAdjacentHTML("afterbegin", modalHTML);
    }

    function modalHandler() {
      helper.live(".cre-t-146-overlay, .cre-t-146-modal-cross-icon-wrapper, .cre-t-146-modal-cta", "click", function () {
        removeContentSetCookie();
      });
    }

    var helper = _$();

    /* Variation Init */
    function init() {
      _$("body").addClass(variation_name);
      if (!getCookie("cre-t-146")) {
        modalInsertion();
      }

      if (!window.EVENT_HANDLER_146) {
        modalHandler();
        window.EVENT_HANDLER_146 = true;
      }
    }

    /* Initialize variation */
    helper.waitForElement('html body[users_type="guest"]', init, 50, 15000);
  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();