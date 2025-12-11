(function () {
  try {
    var debug = 1;
    var variation_name = "cre-t-150";

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

    function insertCSS(css) {
      var style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = css;
      document.getElementsByTagName("head")[0].appendChild(style);
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

    /* Live event binding function */
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

    function updateAndCopyText() {
      const containers = document.querySelectorAll('[data-attribute="restaurant-list-location"]');
      const copiedTexts = [];

      containers.forEach((container) => {
        const aEl = container.querySelector("a");
        const spanEl = container.querySelector("span");

        if (!aEl) return;
        if (aEl.dataset.updated) return;

        const aText = aEl.textContent.trim();
        const spanText = spanEl ? spanEl.textContent.trim() : "";

        let fullText = spanText ? `${aText} · ${spanText}` : aText;

        // Measure width
        const containerWidth = container.offsetWidth;
        const measureEl = document.createElement("div");
        measureEl.style.cssText = `
          position: absolute;
          visibility: hidden;
          white-space: nowrap;
          padding: ${getComputedStyle(container).padding};
          margin: ${getComputedStyle(container).margin};
          font: ${getComputedStyle(container).font};
          border: ${getComputedStyle(container).border};
          box-sizing: border-box;
          width: auto;
        `;
        measureEl.textContent = fullText;
        document.body.appendChild(measureEl);

        let finalText = fullText;
        if (measureEl.scrollWidth > containerWidth) {
          let left = 0;
          let right = fullText.length;
          while (left < right) {
            const mid = Math.ceil((left + right) / 2);
            measureEl.textContent = fullText.substring(0, mid) + "...";
            if (measureEl.scrollWidth <= containerWidth) {
              left = mid;
            } else {
              right = mid - 1;
            }
          }
          finalText = left < fullText.length ? fullText.substring(0, left) + "..." : fullText;
        }
        document.body.removeChild(measureEl);

        const children = Array.from(aEl.childNodes);
        children.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            aEl.removeChild(node);
          }
        });

        aEl.appendChild(document.createTextNode(finalText));

        aEl.dataset.updated = "true";

        if (spanEl) spanEl.remove();

        copiedTexts.push(finalText);
      });

      // const targetElement = document.querySelectorAll('[data-attribute="restaurant-list-item"] .col-span-2 > .relative > .items-center');
      // const wherePlace = document.querySelectorAll('[data-attribute="restaurant-list-item"] [data-attribute="restaurant-list-location"]');

      // if (targetElement && wherePlace) {
      //   wherePlace.insertAdjacentElement("afterend", targetElement);
      // }
      return copiedTexts;
    }

    function addTags() {
      const peopleCountWrappers = document.querySelectorAll('[data-attribute="booking-fee-element"]:not(.cre-t-150-processed)');

      peopleCountWrappers.forEach(function (item) {
        item.classList.add("cre-t-150-processed");

        if (item.querySelector(".cre-t-150-tag-wrapper")) {
          return;
        }

        const index = Array.from(document.querySelectorAll('[data-attribute="booking-fee-element"]')).indexOf(item);
        const serFeeWrapper = document.querySelectorAll('[data-attribute="booking-fee-element"] span[color="grayscale.600"]>span');
        const serFee = serFeeWrapper[index]?.textContent.trim() || "";

        const peopleCount = item.childNodes[0]?.nodeValue?.trim().split(" ")[0] || "";

        const pointsAnchor = item.parentElement.querySelector('a[href="/frequent-foodies"]');
        const pointsValue = pointsAnchor?.textContent.match(/(\d+(?:[.,]\d+)?)/)?.[1] || "";

        const newTagHtml = `
        <div class="cre-t-150-tag-wrapper">
        <div class="cre-t-150-container">
          <a href="/frequent-foodies" target="_blank" class="cre-t-150-box-wrapper points-wrapper tag-1">
            <div class="cre-t-150-icon">
              <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/First_Table/FST149/pointsIcon.svg" alt="points" />
            </div>
            <div class="cre-t-150-text">${pointsValue} points</div>
          </a>
          <div class="cre-t-150-box-wrapper service-wrapper tag-2">
            <div class="cre-t-150-icon">
              <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/First_Table/FST149/fee.svg" alt="fee" />
            </div>
            <div class="cre-t-150-text"><span class="cre-t-150-serviceFee">${serFee}</span> <span class="cre-t-150-serviceText"> service fee</span></div>
          </div>
          ${pointsValue ? ` ` : ""}
        </div>
      </div>
      `;

        // === NEW INSERTION ===
        // Insert the same tag wrapper into each restaurant list item card
        const restaurantCards = document.querySelectorAll('[data-attribute="restaurant-list-item"] > div > div > div.flex');
        restaurantCards.forEach((card) => {
          // Avoid adding multiple times
          if (card.querySelector(".cre-t-150-tag-wrapper")) return;

          card.insertAdjacentHTML("beforeend", newTagHtml);
        });
      });
    }

    function hrTextSeparate() {
      // Process TIME buttons
      const timeButtons = document.querySelectorAll('[data-attribute="restaurant-list-item"] button[data-attribute="New_booking-time-button"]');
      timeButtons.forEach((button) => {
        if (button.dataset.processedTime) return;
    
        const textContent = button.textContent.trim();
        const matches = textContent.match(/(\d{1,2}(:\d{2})?)(\s?[APap][Mm])/);
    
        if (!matches) {
          return; 
        }
    
        const time = matches[1];
        const ampm = matches[3].trim();
    
        // Create spans for time and am/pm
        const timeSpan = document.createElement("span");
        timeSpan.textContent = time;
        timeSpan.classList.add("time-span");
    
        const ampmSpan = document.createElement("span");
        ampmSpan.textContent = ampm;
        ampmSpan.classList.add("ampm-span");
    
        // Clear previous content and append new spans
        button.textContent = ''; 
        button.appendChild(timeSpan);
        button.appendChild(ampmSpan);
    
        button.dataset.processedTime = "true";
      });
    
      // Process DATE bold spans
      const dateSpans = document.querySelectorAll('[data-attribute="New_booking-date-button"] span.font-bold');
      dateSpans.forEach((span) => {
        if (span.dataset.processedDate) return;
    
        const originalText = span.textContent.trim();
        const parts = originalText.split(/\s+/); // Split on any whitespace
        let dayPart = '';
        let monthPart = '';
    
        if (parts.length === 2) {
          const [part1, part2] = parts.map(p => p.trim());
    
          if (/^\d+$/.test(part1)) {
            dayPart = part1;
            monthPart = part2;
          } else if (/^\d+$/.test(part2)) {
            dayPart = part2;
            monthPart = part1;
          }
        } else if (parts.length === 1) {
          // Attempt to match mixed formats like "11DEC" or "DEC11"
          const match = originalText.match(/^(\d+)([A-Za-z]+)|^([A-Za-z]+)(\d+)$/);
          if (match) {
            dayPart = match[1] || match[4];
            monthPart = match[2] || match[3];
          } else {
            // Can't split — fallback to treating as day
            dayPart = originalText;
            monthPart = '';
          }
        }
    
        // Create spans for day and month
        const daySpan = document.createElement("span");
        daySpan.textContent = dayPart;
        daySpan.classList.add("date-day-span");
    
        const monthSpan = document.createElement("span");
        monthSpan.textContent = monthPart;
        monthSpan.classList.add("date-month-span");
    
        // Clear previous content and append new spans
        span.textContent = ''; 
        span.appendChild(daySpan);
        if (monthPart) span.appendChild(monthSpan);
    
        span.dataset.processedDate = "true";
      });
    }

    function buttonFunctionMoreThanThree() {
      // 1. Define the selector for the "row" containers
      const rowSelector = '[data-attribute="restaurant-list-item"] .group.relative div.items-stretch';

      // 2. Define the selector for the "button" inside those containers
      const buttonSelector = '[data-attribute="restaurant-list-item"] .group.relative div.items-stretch button:not([data-attribute="New_booking-date-button"])';

      // 3. Define the classes and attributes to be added
      const targetClass = "has-more-than-three-buttons";
      const buttonClassToAdd = "cre-t-150-remove-class";
      const attributeToAdd = "data-more-than-three-buttons";
      const attributeValue = "true";

      // 4. Get all elements matching the row selector (NodeList)
      const rowElements = document.querySelectorAll(rowSelector);

      // 5. Check if any row elements were found
      if (rowElements.length > 0) {
        rowElements.forEach(function (row) {
          const buttons = row.querySelectorAll(buttonSelector);

          if (buttons.length > 3) {
            row.classList.add(targetClass);

            const parentDiv = row.closest('[data-attribute="restaurant-list-item"] .group.relative');

            if (parentDiv) {
              if (!parentDiv.hasAttribute(attributeToAdd)) {
                parentDiv.insertAdjacentHTML(
                  "beforeend",
                  `<div class="cre-t-150-more-times-container">
                <div class="cre-t-150-more-time-text">More Times</div>
                <div class="cre-t-150-more-time-text-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-3.5 text-gray-300">
                    <path d="m3 6 5 5 5-5" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                </div>
              </div>`
                );

                // 12. Add the attribute with the value 'true'
                parentDiv.setAttribute(attributeToAdd, attributeValue);
              }
            }

            // 13. Add the button class to all buttons except the first 3
            buttons.forEach(function (button, index) {
              if (index >= 3) {
                button.classList.add(buttonClassToAdd);
              }
            });
          }
        });
      }
    }
    function buttonFunctionMoreTime() {
      // Define selectors and attributes
      const rowSelector = '[data-attribute="restaurant-list-item"] .group.relative div.items-stretch';
      const buttonSelector = 'button:not([data-attribute="New_booking-date-button"])';
      const targetClass = "has-more-than-three-buttons";
      const buttonClassToAdd = "cre-t-150-remove-class";
      const attributeToAdd = "data-more-than-three-buttons";
      const attributeValue = "true";

      const rowElements = document.querySelectorAll(rowSelector);

      if (rowElements.length === 0) {
        return;
      }

      rowElements.forEach(function (row) {
        const buttons = row.querySelectorAll(buttonSelector);

        // First, check if there is a "more times" button and add the attribute if it exists
        let moreTimesButtonFound = false;
        buttons.forEach(function (button) {
          if (button.textContent.trim().toLowerCase() === "more times") {
            // If the button text is "more times", add the attribute
            button.setAttribute("data-more-time", "true");
            moreTimesButtonFound = true;
          }
        });

        // If a "more times" button is found, proceed with the rest of the logic
        if (moreTimesButtonFound) {
          // Add class to the row if not already added
          if (!row.classList.contains(targetClass)) {
            row.classList.add(targetClass);
          }

          const parentDiv = row.closest('[data-attribute="restaurant-list-item"] .group.relative');
          if (!parentDiv) return;

          // Check if "more time" element already exists
          let moreTimeDiv = parentDiv.querySelector(".cre-t-150-more-time-button");

          if (!moreTimeDiv) {
            // Create and insert "more time" div if it doesn't exist
            moreTimeDiv = document.createElement("div");
            moreTimeDiv.textContent = "More times";
            moreTimeDiv.classList.add("cre-t-150-more-time-button");

            // Create the SVG icon
            const moreTimeIconDiv = document.createElement("div");
            moreTimeIconDiv.classList.add("cre-t-150-more-time-text-icon");

            const svgIcon = `
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-3.5 text-gray-300">
                <path d="m3 6 5 5 5-5" stroke="currentColor" stroke-width="2"></path>
              </svg>
            `;

            moreTimeIconDiv.innerHTML = svgIcon;

            // Append the icon to the moreTimeDiv
            moreTimeDiv.appendChild(moreTimeIconDiv);

            // Insert the "more time" div after the parentDiv
            parentDiv.appendChild(moreTimeDiv);
          }

          // Ensure the attribute is set on parentDiv
          if (!parentDiv.hasAttribute(attributeToAdd)) {
            parentDiv.setAttribute(attributeToAdd, attributeValue);
          }

          // Add class to buttons beyond the first 3
          buttons.forEach(function (button, index) {
            // Check if button is beyond the first 3 and doesn't already have the class
            if (index >= 3 && !button.classList.contains(buttonClassToAdd)) {
              button.classList.add(buttonClassToAdd);
            }
          });
        }
      });
    }

    function eventListenerButton() {
      live(".cre-t-150-more-time-button", "click", function () {

        const btnParentDiv = this.closest('[data-attribute="restaurant-list-item"] .group.relative');
        // Find the button inside the row that contains data-more-time="true"
        const buttonWithMoreTime = btnParentDiv.querySelector('button[data-more-time="true"]');

        // Check if a button with data-more-time="true" exists
        if (buttonWithMoreTime) {
          // Proceed to add the class to the parent div only if it isn't already present
          if (!btnParentDiv.classList.contains("cre-t-150-remove-class-button")) {
            buttonWithMoreTime.click();
            btnParentDiv.classList.add("cre-t-150-remove-class-button");
          }
        } else {
          // If no such button exists, just add the class
          if (!btnParentDiv.classList.contains("cre-t-150-remove-class-button")) {
            btnParentDiv.classList.add("cre-t-150-remove-class-button");
          }
        }
      })

      live(".cre-t-150-more-times-container", "click", function () {
        const parentDiv = this.closest('[data-attribute="restaurant-list-item"] .group.relative');
        parentDiv.classList.add("cre-t-150-remove-class-button");
      })


    }

    function init() {
      _$("body").addClass(variation_name);

      if (!window.observer150Li) {
        eventListenerButton();
        observeSelector(`[data-attribute="restaurant-list-item"] button`, (listItem) => {

          if (window.location.pathname.includes("/auckland") || window.location.pathname.includes("/queenstown-lakes")) {
            document.body.classList.remove(variation_name);
            return;
          };

          helper.waitForElement(
            '[data-attribute="restaurant-list-location"]',
            function () {
              updateAndCopyText();
              addTags();
              // Need to force a reflow
              const interval = setInterval(() => {
                hrTextSeparate();
                buttonFunctionMoreTime();
                buttonFunctionMoreThanThree();
              }, 100);
              setTimeout(() => {
                clearInterval(interval);
              }, 2000);
            },
            100,
            8000
          );
        });

        window.observer150Li = true;
      }
    }
    helper.waitForElement("body", init, 50, 5000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
