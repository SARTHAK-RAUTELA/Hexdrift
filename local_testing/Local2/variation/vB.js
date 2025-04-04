(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-41";

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

    var cta = `<a href='https://www.gendergp.com/webinar/' class='cre-t-41-cta'>Questions? Join our FREE webinar</a>`;

    /* Variation Init */
    function init() {
      _$('body').addClass(variation_name);

      helper.waitForElement(".cre-t-19-cta-link", function () {
        var heroCTA19 = document.querySelector(".cre-t-19-cta-link");
        heroCTA19.parentElement.classList.add('cre-t-41-cta-container');
        if (!document.querySelector(".elementor-button-wrapper.cre-t-41-cta-container .cre-t-41-cta")) {
          heroCTA19.insertAdjacentHTML("afterend", cta);
        }

        var subcopy = heroCTA19.closest(".cre-t-19-container")?.nextElementSibling;

        // comment this code if client agrees to change text
        subcopy && subcopy.querySelector('a.elementor-button.elementor-button-link')?.classList.add("cre-t-41-subcopy-modify");

        // add new text in the subcopy remove the commented code if client agrees to change text
        // var subcopySpan = subcopy.querySelector("span.elementor-button-text");
        // if (subcopySpan) {
        //   subcopySpan.textContent = "Learn more about how our service works";
        // }

      }, 50, 5000);


      helper.waitForElement("#home-test-hero-1 .elementor-button-link[href='https://www.gendergp.com/accessing-gender-affirming-care/']", function () {

        var heroCTA = document.querySelector(`#home-test-hero-1 .elementor-button-link[href="https://www.gendergp.com/accessing-gender-affirming-care/"]`);
        heroCTA.parentElement.classList.add('cre-t-41-cta-container');

        if (!document.querySelector(".cre-t-19-cta.cre-t-41-cta-container .cre-t-41-cta")) {
          heroCTA.insertAdjacentHTML("afterend", cta);
        }

        heroCTA.closest('[data-element_type="container"]').classList.add("cre-t-41-parent-container");
        var subcopy = heroCTA.closest('[data-element_type="widget"]')?.nextElementSibling;


        // comment this code if client agrees to change text
        subcopy && subcopy.querySelector('a.elementor-button.elementor-button-link')?.classList.add("cre-t-41-subcopy-modify");


        // add new text in the subcopy uncomment code if client agrees to change text
        // var subcopySpan = subcopy.querySelector("span.elementor-button-text");
        // if (subcopySpan) {
        //   subcopySpan.textContent = "Learn more about how our service works";
        // }

      }, 50, 5000);



    }

    /* Initialise variation */
    helper.waitForElement('#home-test-hero-1 .elementor-button-link[href="https://www.gendergp.com/accessing-gender-affirming-care/"],.cre-t-19-cta-link', init, 50, 5000);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();