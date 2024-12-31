(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "Swf_06";
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
  
        /* Helper Function: Capitalize Headline */
        function capitalizeHeadline(text) {
            return text
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        }
  
        // Current date
        const currentDate = new Date();
  
        // Subtract 2 days
        const twoDaysBefore = new Date();
        twoDaysBefore.setDate(currentDate.getDate() - 2);
  
        // Format the date (e.g., DD Month YYYY)
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = twoDaysBefore.toLocaleDateString('en-GB', options);
  
        // Update the HTML string with the formatted date
        var TheSwiftest_06 = `
  <div class="swf_section">
      <div class="swf_container">
          <div class="swf_times">
              <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/time-logo_676504cc408c2.svg" alt="">
              <p class="times_content">Last updated:<strong> ${formattedDate}</strong></p>
          </div>
          <div class="swf_content">
              <h2 class="swf_heading">2024’s <span class="border">Best Pet Insurance Plans</span></h2>
              <p class="swf_subheading"><strong>Your furry friend deserves the very best care.</strong> Trusted by over
                  10,000 pet owners since 2020, these plans deliver the coverage you need, at great value.</p>
          </div>
          <ul class="swf_list">
              <li class="swf_item">
                  <div class="check_mark">
                      <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/check-mark_676504a22a13f.svg" alt="">
                  </div>
                  <p class="bulet_content"><strong>Top brands</strong> offering excellent service and fast claims payouts</p>
              </li>
              <li class="swf_item">
                  <div class="check_mark">
                      <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/check-mark_676504a22a13f.svg" alt="">
                  </div>
                  <p class="bulet_content"><strong>Guaranteed lowest prices</strong> with exclusive deals</p>
              </li>
              <li class="swf_item">
                  <div class="check_mark">
                      <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/check-mark_676504a22a13f.svg" alt="">
                  </div>
                  <p class="bulet_content"><strong>Accepted by all vets</strong> across the United States</p>
              </li>
          </ul>
      </div>
  </div>`;
  
        var helper = _$();
        /* Variation Init */
        function init() {
            _$('body').addClass(variation_name);
            let heading;
            helper.waitForElement('#page .inside-article [id*="modal"]+div> div.gb-grid-column:first-child .gb-inside-container', function () {
                heading = document.querySelector('#page .inside-article [id*="modal"]+div> div.gb-grid-column:first-child .gb-inside-container h2').textContent;
                heading = capitalizeHeadline(heading); // Apply capitalization correction
            }, 50, 15000);
  
            helper.waitForElement('#page .inside-article [id*="modal"]+div> div.gb-grid-column:first-child .gb-inside-container', function () {
                if (!document.querySelector(".swf_section")) {
                    document.querySelector('#page .inside-article [id*="modal"]+div> div.gb-grid-column:first-child .gb-inside-container').innerHTML = (TheSwiftest_06);
                }
            }, 50, 15000);
  
            if (window.location.pathname == '/home/') {
                helper.waitForElement(".swf_heading", function () {
                    document.querySelector('.swf_heading').innerHTML = heading;
                }, 50, 15000);
            }
  
            helper.waitForElement('#page .inside-article [id*="modal"] + .gb-grid-wrapper .wp-block-image', function () {
                document.querySelector("#page .inside-article [id*='modal'] + .gb-grid-wrapper .wp-block-image").innerHTML = `<img src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/image-4_676d295e48e49.svg">`;
            }, 50, 15000);
        }
  
        /* Initialise variation */
        helper.waitForElement("body", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();
  