(function () {
  try {
      /* main variables */
      var debug = 1;
      var variation_name = "undetectable-t13";

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
          if(window.innerWidth>767){
          helper.log('Log inside from init');
          _$('body').addClass(variation_name)
          setTimeout(function () {
              helper.waitForElement('html[lang="en"] #scrollElement .bg-darkSapphire .mb-5.flex', function () {
                  var buttoncontainer = document.querySelector(' html[lang="en"] #scrollElement .bg-darkSapphire .mb-5.flex')
                  // document.querySelector('html[lang="en"] #scrollElement .bg-darkSapphire .mb-5 .border-l-black+div>.my-auto').insertAdjacentElement('beforebegin', buttoncontainer)
                  document.querySelector('html[lang="en"] #scrollElement .bg-darkSapphire .mb-5 .border-l-black+div>div:last-of-type').insertAdjacentElement('beforebegin', buttoncontainer)
              }, 50, 15000)
          }, 500)

          }
      }

      /* Initialise variation */
      helper.waitForElement('html[lang="en"] body[data-attribute="logged-out"]', init, 50, 5000);
  } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
  }
})();