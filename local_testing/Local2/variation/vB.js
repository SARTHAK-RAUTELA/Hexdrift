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
          /****Helper Functions****/
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
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });
    


   const tooltipDiv = ` <div data-tippy-root="" id="tippy-2" style="z-index: 9999; visibility: visible; transition: transform ease-out; position: absolute; left: 0px; top: 0px; margin: 0px; transform: translate3d(26px, -60px, 0px);"><div class="tippy-box" data-state="visible" tabindex="-1" data-theme="extras" data-animation="fade" data-inertia="" role="tooltip" style="max-width: none; transition-duration: 300ms;" data-placement="right"><div class="tippy-content" data-state="visible" style="transition-duration: 300ms;"><div class="oxy-popover_popup-inner"><div class="oxy-popover_popup-content oxy-inner-content"><div id="text_block-209-176-1-2" class="ct-text-block tooltip-text" data-id="text_block-209-176"><span id="span-213-176-1-2" class="ct-span" data-id="span-213-176">Average monthly premium price for $15,000 in property coverage, $100,000 liability coverage for an apartment building resident living in 90210 zip code. Learn more at the end of this page.</span></div></div></div></div><div class="tippy-arrow" style="position: absolute; top: 0px; transform: translate3d(0px, 44px, 0px);"></div></div></div>`;
    var helper = _$();
    /* Variation Init */
    function init() {
      _$("body").addClass(variation_name);
      // --- TrustScore Image Swaps ---
      helper.waitForElement(
        '[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] .trustpilot-image',
        function () {
          var lemonadeTrust = document.querySelector(
            '[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] .trustpilot-image'
          );
          if (lemonadeTrust && !lemonadeTrust.src.includes("4.90-trustscore")) {
            lemonadeTrust.src =
              "https://rentersinsurancegurus.com/wp-content/uploads/2025/04/4.90-trustscore-800x368.png";
          }
        },
        50,
        5000
      );
      helper.waitForElement(
        '[data-unique="outbound-partner-clicks-Liberty-Mutual-Listing-Only"] .trustpilot-image',
        function () {
          var libertyTrust = document.querySelector(
            '[data-unique="outbound-partner-clicks-Liberty-Mutual-Listing-Only"] .trustpilot-image'
          );
          if (libertyTrust && !libertyTrust.src.includes("4.7-trustscore")) {
            libertyTrust.src =
              "https://rentersinsurancegurus.com/wp-content/uploads/2025/04/4.7-trustscore-800x368.png";
          }
        },
        50,
        5000
      );
      // --- Lemonade App Store Banner number only ---
      helper.waitForElement(
        '[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] .rating-bar',
        function () {
          var lemonadeBanner = document.querySelector(
            '[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] .rating-bar'
          );
          if (lemonadeBanner) {
            var firstStrong = lemonadeBanner.querySelector('[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] .rating-text strong');
            if (firstStrong && firstStrong.textContent.trim() !== "83,796") {
              firstStrong.textContent = "83,796";
            }
          }
        },
        50,
        5000
      );
      // --- Replace Best Overall with Lemonade ---
      helper.waitForElement(
        '[data-unique="best-overall"]',
        function () {
          var bestOverall = document.querySelector('[data-unique="best-overall"]');
          var lemonadeCard = document.querySelector(
            '[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"]'
          );
          if (bestOverall && lemonadeCard) {
            var lemonadeClone = lemonadeCard.cloneNode(true);
            var lemonadeBox = lemonadeClone.querySelector(".plan-box");
            var libertyBox = bestOverall.querySelector(".plan-box");
            if (lemonadeBox && libertyBox) {
              libertyBox.replaceWith(lemonadeBox);
              var bestOverallBubble = bestOverall.querySelector(
                ".number-bubble .plan-number"
              );
              if (bestOverallBubble) {
                bestOverallBubble.textContent = "Best Overall";
                bestOverallBubble.classList.add("best-overall-text");
              }
              bestOverall
                .querySelector(".number-bubble")
                .classList.add("best-overall-bubble");
            }
          }
        },
        50,
        5000
      );

      helper.waitForElement(
        '[data-unique="best-overall"] .oxy-popover_popup',
        function () {
          var libertyTrust = document.querySelector(
            '[data-unique="best-overall"] .oxy-popover_popup'
          ).innerHTML =  tooltipDiv;
        
        },
        50,
        5000
      );

     
      helper.live('[data-unique="best-overall"].best-overall-container .ct-link-button, [data-unique="best-overall"] [data-unique="outbound-partner-clicks-all-partner-logos"]', "click", function (e) {
        e.preventDefault(); // correct way
        var lemonadeBtn = document.querySelector(
          '[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] .ct-link-button'
        );
        if (lemonadeBtn) {
          lemonadeBtn.click();
        }
      });
    }
    /* Init variation only after comparison section is present */
    helper.waitForElement(
      "body",
      init,
      50,
      50000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test " + variation_name);
  }
})();
