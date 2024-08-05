(function () {
  try {
    /* main variables */
    var debug = 0;
    var variation_name = "cre-t-209";

    /* all Pure helper functions */

    function waitForElement(selector, trigger) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function live(selector, event, callback, context) {
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

    function addClass(el, cls) {
      var el = document.querySelector(el);
      if (el) {
        el.classList.add(cls);
      }
    }

    function trigger() {
      var doneTypingInterval = 9000;  //time in ms, 5 seconds for example
      var intervalCallAgain = setInterval(function () {
        waitForElement('.page-banner.page-banner--image-only ~.product-placement-container__wrapper', function () {
          if (document.querySelectorAll('.page-banner.page-banner--image-only ~.product-placement-container__wrapper') >= 3) {
            init();
          }
        })
      }, 400);

      //start the countdown
      var Timer = setTimeout(function () {
        clearInterval(intervalCallAgain);
      }, doneTypingInterval);

    }

    /* Variation Init */
    function init() {
      addClass('body', 'cre-t-209')
      waitForElement('.page-banner.page-banner--image-only ~.product-placement-container__wrapper', function () {
        // Select all elements matching the given selector
        var elements = document.querySelectorAll('.page-banner.page-banner--image-only ~.product-placement-container__wrapper');

        // Loop through each element and add the unique class
        elements.forEach((element, index) => {
          element.classList.add(`cre-t-209-card${index + 1}`);
        });

      });

      trigger();
    }

    waitForElement('body', init);

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();