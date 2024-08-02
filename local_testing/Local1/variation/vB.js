(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-patternIndex";

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
        waitForElement: function (selector, trigger) {
          var interval = setInterval(function () {
            if (_$(selector).value.length) {
              clearInterval(interval);
              trigger();
            }
          }, 50);
          setTimeout(function () {
            clearInterval(interval);
          }, 15000);
        },
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var helper = _$();

    function fetchDetect(url, item) {
      fetch(url)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then(function (html) {
          // Use DOMParser to parse the HTML string into a Document
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, "text/html");
          var ourImage = doc.querySelector('.product--images-container .product--images .product--image-slider img:last-child');
          ourImage.classList.add('cre-patternImage');
          ourImage.style.display = 'none';
          if (!item.querySelector(".cre-patternImage")) {

            item.insertAdjacentElement('beforeend', ourImage);

          }
        })
        .catch(function (error) {
          console.error("There was a problem with the fetch operation:", error);
        });

    }

    function waitForPageLoad(trigger) {
      var interval = setInterval(function () {
        if (document.readyState === "complete") {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    /* Variation Init */
    function init() {


      _$('body').addClass(variation_name)

      var products = document.querySelectorAll('[data-bookmarkable-type="Product"] .product--thumbnail-image-container a');

      products.forEach(function (item) {
        var pdItem = item;
        fetchDetect(item.href, pdItem);
      })

      // setTimeout(function () {
      _$('body').addClass('cre-patternIndex-active')
      // }, 1000)


    }

    waitForPageLoad(function () {
      if (window.location.href.includes("https://www.seamwork.com/") && (window.location.href.includes("/catalog") || window.location.href.includes("/catalog/filters/")) || window.location.href.includes("/search?c=products")) {
        console.log("feasibility test condition true---------")
        setTimeout(function () {
          helper.waitForElement('[data-bookmarkable-type="Product"] .product--thumbnail-image-container a', init, 50, 15000);
        }, 1000)


      }
    })

    /* Initialise variation */

  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();