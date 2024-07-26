(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "undetectable-10";
  
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
  
      var undetectable_guarantee = `<div class="guarantee_section">
      <div class="guarantee_container">
          <div class="guarantee_list">
              <div class="guarantee_item">
                  <div class="guarantee_logo">
                      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/UndetectableAI/10/input_logo.svg" alt="">
                  </div>
                  <h3 class="guarantee_heading">Pay as you use</h3>
                  <p class="guarantee_prera">Control your budget and only pay for what you need with our flexible and affordable plans.</p>
              </div>
  
              <div class="guarantee_item">
                  <div class="guarantee_logo">
                      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/UndetectableAI/10/cross_logo.svg" alt="">
                  </div>
                  <h3 class="guarantee_heading">Cancel anytime</h3>
                  <p class="guarantee_prera">You'll love using our Al tool, or smply cancel your plan anytime, no questions asked.</p>
              </div>
  
              <div class="guarantee_item">
                  <div class="guarantee_logo">
                      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/UndetectableAI/10/doller_logo.svg" alt="">
                  </div>
                  <h3 class="guarantee_heading">Money back guarantee</h3>
                  <p class="guarantee_prera">If any text we produce is flagged as not human, we will refund you the cost of humanization.</p>
              </div>
          </div>
  
          <!--list 2-->
          <div class="guarantee_list">
              <div class="guarantee_item">
                  <div class="guarantee_logo_2">
                      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/UndetectableAI/10/batch_logo.svg" alt="">
                  </div>
                  <h3 class="guarantee_heading">Rated #1 on FORBES!</h3>
                  <p class="guarantee_prera">"Undetectable.ai delves deeper into the fabric of the text. The #1 best Al detector rated by Forbes."</p>
              </div>
  
              <div class="guarantee_item">
                  <div class="guarantee_logo_2">
                      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/UndetectableAI/10/direction_logo.svg" alt="">
                  </div>
                  <h3 class="guarantee_heading">Easy to use</h3>
                  <p class="guarantee_prera">Our intuitive interface makes it easy detect and humanize AI-generated text with just a few clicks.</p>
              </div>
  
              <div class="guarantee_item">
                  <div class="guarantee_logo_2">
                      <img src="https://d27c6j8064skg9.cloudfront.net/ConversionRateExpert/UndetectableAI/10/percentage_logo.svg" alt="">
                  </div>
                  <h3 class="guarantee_heading">50% OFF on yearly plans</h3>
                  <p class="guarantee_prera">For a limited time, our yearly plans are currently half-price! Save 50% now!</p>
              </div>
          </div>
      </div>
  </div>`
  
      var helper = _$();
  
      /* Variation Init */
      function init() {
        _$('body').addClass(variation_name)
  
        helper.waitForElement("#pricing_banner+h2", function () {
          document.querySelector("#pricing_banner+h2").innerHTML = 'Simple, transparent and <span>flexible pricing</span>'
        }, 50, 15000)
  
        helper.waitForElement("#pricing_banner+h2+div button+div ", function () {
          document.querySelector("#pricing_banner+h2+div button+div ").innerHTML = 'Try our AI Humanizer and Detector rated #1 on Forbes!'
        }, 50, 15000)
  
        helper.waitForElement("#pricing_banner+h2+div ", function () {
          if (!document.querySelector(".guarantee_section")) {
            document.querySelector("#pricing_banner+h2+div ").insertAdjacentHTML("afterend", undetectable_guarantee)
          }
        }, 50, 15000)
      }
  
      /* Initialise variation */
      helper.waitForElement("body", init, 50, 15000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();