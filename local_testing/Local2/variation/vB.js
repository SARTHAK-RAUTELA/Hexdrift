(function () {
  try {
    var debug = 1;
    var variation_name = "cre-t-91";

    function waitForElement(selector, callback) {
      var interval = setInterval(function () {
        if (document.querySelector(selector)) {
          clearInterval(interval);
          callback();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function debounce(func, timeout = 1000) {
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

    function init() {
      document.body.classList.add(variation_name);
      waitForElement('[data-attribute="restaurant-list-item"] img', function () {
        const TARGET_SIZE = "220x220";
        const NEW_SIZE = "800x800";
        const images = document.querySelectorAll('[data-attribute="restaurant-list-item"] img');
        images.forEach((img) => {
          const item = img.closest('[data-attribute="restaurant-list-item"]');
          if (!item || item.classList.contains("cre-t-269-image-updated")) return;
          img.src = img.src.includes(TARGET_SIZE) ? img.src.replaceAll(TARGET_SIZE, NEW_SIZE) : img.src;
          img.srcset = img.srcset?.includes(TARGET_SIZE) ? img.srcset.replaceAll(TARGET_SIZE, NEW_SIZE) : img.srcset;
          item.classList.add("cre-t-269-image-updated");
        });
      });
    }
    waitForElement("body", function () {
      if (!window.cre91EventHandler) {
        setTimeout(function () {
          observeSelector('[data-attribute="restaurant-list-item"]', function () {
            init();
          });
        }, 2000);
        window.cre91EventHandler = true;
      }
    });
  } catch (e) {
    if (debug) console.log(e, "Error in Test" + variation_name, e);
  }
})();