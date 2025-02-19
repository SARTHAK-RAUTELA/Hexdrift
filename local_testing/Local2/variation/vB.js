(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-258-variation";

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
        live: function (selector, event, callback, context) {
          function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
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

    function trackEvent(selector, eventName) {
      helper.live(selector, "click", function () {
        window["optimizely"] = window["optimizely"] || [];
        window["optimizely"].push({
          type: "event",
          eventName: eventName,
          tags: {
            revenue: 0,
            value: 0.0,
          },
        });
      });
    }

    trackEvent('.cre-t-258-variation [data-contains-gold="true1"] .product-placement-detail-modal__cart-button', "sea258_-_atc_of_any_pass");

    trackEvent('.cre-t-258-variation [data-contains-gold="true1"] .product-placement-card__wrapper .product-placement-card', "sea258_-_atc_of_any_product__on_either_page_");

    trackEvent('.cre-t-258-variation [data-contains-gold="true1"] .modal__wrapper:has(div[data-display-name="Platinum Pass"]) .modal__footer .product-placement-detail-modal__cart-button', "sea258_-_atc_of_platinum_pass__either_page_");

    trackEvent('.cre-t-258-variation [data-contains-gold="true1"] .modal__wrapper:has(div[data-display-name="Silver Pass"]) .modal__footer .product-placement-detail-modal__cart-button', "sea258_-_atc_of_silver_pass__either_page_");
    trackEvent('.cre-t-258-variation [data-contains-gold="true1"] .modal__wrapper:has(div[data-display-name="Gold Pass"]) .modal__footer .product-placement-detail-modal__cart-button', "sea258_-_atc_of_gold_pass__either_page_");

    if (window.location.pathname === "/tampa/annual-pass-b/" || window.location.pathname === "/tampa/annual-pass/") {
      trackEvent('.cre-t-258-variation [data-contains-gold="true1"] .modal__wrapper:has(div[data-display-name="Bronze Pass"]) .modal__footer .product-placement-detail-modal__cart-button', "sea258_-_atc_of_bronze_pass");
    }

    if (window.location.pathname === "/tampa/tickets/fun-card-b/" || window.location.pathname === "/tampa/tickets/fun-card/") {
      trackEvent('.cre-t-258-variation [data-contains-gold="true1"] .modal__wrapper:has(div[data-display-name="2025 Fun Card"]) .modal__footer .product-placement-detail-modal__cart-button', "sea258_-_atc_of_2025_fun_card");
    }

    function insertDataAttributes() {
      var targetEl = document.querySelectorAll(".main-padded div.product-placement-container__wrapper .product-placement-card__title");
      var dataValue = 0;
      for (var i = 0; i < targetEl.length; i++) {
        var textContent = targetEl[i].textContent.trim();
        if (textContent.includes("Gold Pass")) {
          var additionalWrapper = targetEl[i].closest("div.product-placement-container__wrapper");
          if (additionalWrapper) {
            additionalWrapper.setAttribute("data-contains-gold", "true" + dataValue);
            dataValue++;
            var captureSection = document.querySelector('[data-contains-gold="true0"]');
            if (captureSection) {
              captureSection.classList.add("removeSection");
            }
          }
        }
      }
    }

    function init() {
      _$("body").addClass(variation_name);
      insertDataAttributes();
    }

    helper.waitForElement(".main-padded div.product-placement-container__wrapper .product-placement-card__title", init, 25, 25000);
  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();
