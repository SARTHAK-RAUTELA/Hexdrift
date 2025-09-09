(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-60";

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

      // --- TrustScore Image Swaps ---
      var lemonadeTrust = document.querySelector(
        '[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] .trustpilot-image'
      );
      if (lemonadeTrust && !lemonadeTrust.src.includes("4.90-trustscore")) {
        lemonadeTrust.src =
          "https://rentersinsurancegurus.com/wp-content/uploads/2025/04/4.90-trustscore-800x368.png";
        console.log(variation_name, "Lemonade TrustScore swapped → 4.9");
      }

      var libertyTrust = document.querySelector(
        '[data-unique="outbound-partner-clicks-Liberty-Mutual-Listing-Only"] .trustpilot-image'
      );
      if (libertyTrust && !libertyTrust.src.includes("4.7-trustscore")) {
        libertyTrust.src =
          "https://rentersinsurancegurus.com/wp-content/uploads/2025/04/4.7-trustscore-800x368.png";
        console.log(variation_name, "Liberty TrustScore swapped → 4.7");
      }

      // --- Lemonade App Store Banner number only ---
      var lemonadeBanner = document.querySelector(
        '[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] .rating-bar'
      );
      if (lemonadeBanner) {
        // find the first <strong> inside the rating-text and replace whatever value is there
        var firstStrong = lemonadeBanner.querySelector(".rating-text strong");
        if (firstStrong && firstStrong.textContent.trim() !== "83,796") {
          firstStrong.textContent = "83,796";
          console.log(variation_name, "Lemonade banner number updated → 83,796");
        }
      }
    }

    /* Init variation */
    helper.waitForElement(
      "#comparison-section [data-unique='comparison-table']",
      init,
      50,
      50000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();
