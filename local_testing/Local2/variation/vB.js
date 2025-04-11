(function () {
  try {
      /* main variables */
      var debug = 1;
      var variation_name = "RC-Test18";

      const debounce = function (func, delay = 300) {
          let timeout;
          return (...args) => {
              clearTimeout(timeout);
              timeout = setTimeout(() => func(...args), delay);
          };
      };

      function observeSelector(selector, callback, options = {}) {
          const documentRef = options.document || window.document;
          const processed = new Map();

          let observer;
          let isDone = false;

          const done = () => {
              if (observer) observer.disconnect();
              processed.clear();
              isDone = true;
          };

          const processElement = (el) => {
              if (!processed.has(el)) {
                  processed.set(el, true);
                  callback(el);
                  if (options.once) {
                      done();
                  }
              }
          };

          const lookForSelector = () => {
              const elParent = documentRef.documentElement;
              const elements = elParent.querySelectorAll(selector);
              elements.forEach((el) => processElement(el));
          };

          const debouncedLookForSelector = debounce(lookForSelector, options.debounceDelay || 100);

          lookForSelector();

          if (!isDone) {
              observer = new MutationObserver(() => debouncedLookForSelector());
              observer.observe(documentRef, {
                  attributes: true,
                  childList: true,
                  subtree: true,
              });
          }

          return done;
      }

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

      function getDayAndMonth() {
          let placesLeft;
          const now = new Date();
          const isApril = now.getMonth() === 3; // April = 3
          const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

          if (isApril) {
              const dayToPlaces = {
                  1: 3,
                  2: 20,
                  3: 18,
                  4: 15,
                  5: 8,
                  6: 6,
                  0: 4
              };

              placesLeft = dayToPlaces[day];
              if (debug) console.log(`Today, ${placesLeft} places left.`);
          }

          return placesLeft;
      }

      /* Variation Init */
      function init() {
          document.querySelector('body').classList.add(variation_name);
          const placesLeft = getDayAndMonth();

          if (placesLeft != null) {
              // Top Banner
              waitForElement(".discount-banner-top .cre-bold", function () {
                  document.querySelector(".discount-banner-top .cre-bold").innerHTML =
                      `Only ${placesLeft} places left in this round <span>— apply in the next</span>`;

                  waitForElement(".discount-banner-top .cre-countdown-container", function () {
                      const container = document.querySelector('.discount-banner-top .cre-countdown-container');
                      if (!document.querySelector('.discount-banner-top .missing_t18')) {
                          container.insertAdjacentHTML("afterend", `<div class="missing_t18">to avoid missing out.</div>`);
                      }
                  }, 50, 15000);
              }, 50, 15000);

              // Small Banner
              waitForElement(".discount-banner-top-small .cre-bold", function () {
                  document.querySelector(".discount-banner-top-small .cre-bold").innerHTML =
                      `Only ${placesLeft} places left in this round`;

                  waitForElement(".discount-banner-top-small .cre-countdown-container", function () {
                      const container = document.querySelector('.discount-banner-top-small .cre-countdown-container');
                      if (!container.querySelector('.next_t18')) {
                          container.insertAdjacentHTML("afterbegin", `<div class="next_t18">Apply in the next</div>`);
                      }
                      if (!container.querySelector('.missing_t18')) {
                          container.insertAdjacentHTML("beforeend", `<div class="missing_t18">to avoid missing out.</div>`);
                      }
                  }, 50, 15000);
              }, 50, 15000);

              // Tiny Banner
              waitForElement(".discount-banner-top-tiny .cre-bold", function () {
                  document.querySelector(".discount-banner-top-tiny .cre-bold").innerHTML =
                      `Only ${placesLeft} places left in this round`;

                  waitForElement(".discount-banner-top-tiny .cre-countdown-container", function () {
                      const container = document.querySelector('.discount-banner-top-tiny .cre-countdown-container');
                      if (!container.querySelector('.next_t18')) {
                          container.insertAdjacentHTML("afterbegin", `<div class="next_t18">Apply in the next</div>`);
                      }
                      if (!container.querySelector('.missing_t18')) {
                          container.insertAdjacentHTML("beforeend", `<div class="missing_t18">to avoid missing out.</div>`);
                      }
                  }, 50, 15000);
              }, 50, 15000);
          } else {
              if (debug) console.log("Not April — no action taken.");
          }
      }

      if (!window.observeSelectorAddedT18) {
          window.observeSelectorAddedT18 = true;
          observeSelector('#discount_banner_top [class*="discount-banner"]', (el) => {
              init();
          }, {
              debounceDelay: 200,
              once: false,
          });
      }

  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();