(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT_Cost_Page";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }
        function addLiveEventListener(selector, event, callback, context) {
            // Helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent('on' + type, handler);
                else el.addEventListener(type, handler);
            }
            // Matches polyfill
            this.Element && function (ElementPrototype) {
                ElementPrototype.matches = ElementPrototype.matches ||
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
            }(Element.prototype);
            // Live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found, el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        // Add swiper slider script
        function addScript() {
            var bmScript = document.createElement("script");
            bmScript.src = "https://unpkg.com/swiper@7/swiper-bundle.min.js";
            document.getElementsByTagName("head")[0].appendChild(bmScript);

            var bmcsslink = document.createElement("link");
            bmcsslink.rel = "stylesheet";
            bmcsslink.href = "https://unpkg.com/swiper@7/swiper-bundle.min.css";
            document.getElementsByTagName("head")[0].appendChild(bmcsslink);
        }
        addScript();

        //wait for swiper slider
        function onwaitforswiper(trigger) {
            var interval = setInterval(function () {
                if (typeof Swiper != "undefined") {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        var topnav = `<h2 class="Type_title1__byBr1 pro-testimonials_title__Ywmk8 ph4 m_ph0 mb5 tl m_tc">Why pros love Thumbtack</h2><div class="swiper-container pro-testimonials-Carousel">
  <div class="swiper-wrapper">
      <div class="swiper-slide">
          <div class="imagesection"> <img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/Pro+Landing+Page%3A+Update+testimonials/grow_more.jpg"></div>
          <div class="textcontent">
             <div class="shadowdiv">
              <h5>We have been able to <b>grow more</b> since joining Thumbtack and it has also allowed us to branch out to<b> new areas of our business.</b></h5>
              <p>Business owner <span> Landscaping and Hardscaping, Greenwood, IN</span></p>
               </div>
          </div>
      </div>
      <div class="swiper-slide">
          <div class="imagesection"> <img src="https://cdn.optimizely.com/img/20611073899/d5e4447eef6a43e0bc367a9b00995bbb.jpg"></div>
          <div class="textcontent">
          <div class="shadowdiv">
              <h5>Having the <b>reliability</b> of Thumbtack as a platform has allowed me to set a new franchise first year <b>record for revenue.</b></h5>
              <p>Jerald Roberts <span>Five Star Painting, Manassas, VA</span></p>
              </div>
          </div>
      </div>
      <div class="swiper-slide">
          <div class="imagesection"> <img src="https://d27c6j8064skg9.cloudfront.net/Thumbtack/Pro+Landing+Page%3A+Update+testimonials/customer.jpg"></div>
          <div class="textcontent">
          <div class="shadowdiv">
              <h5>The app is super easy to use...one Thumbtack<b> customer can turn into several referrals.</b></h5>
              <p>Ricc Brindicci <span>HVAC</span></p>
              </div>
          </div>
      </div>
  </div>
  <!-- Add Arrows -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <!-- Add Pagination -->
  <div class="swiper-pagination"></div>
</div>`;

        function generateSwiperSlider() {
            var isMobile = window.innerWidth <= 767;
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,  // Enable loop only for mobile
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                on: {
                    reachEnd: function () {
                        if (!isMobile) {
                            // If it's desktop, when we reach the end, wait for a click on the Next button
                            document.querySelector('.swiper-button-next').addEventListener('click', function () {
                                swiper.slideTo(0, 1000);  // Smoothly slide back to the first slide
                            }, { once: true });  // Ensure the event listener is removed after the first click
                        }
                    }
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                    },
                    991: {
                        slidesPerView: 1,
                    },
                    1366: {
                        slidesPerView: 1,
                    }
                },

            });
        }

        /* Variation Init */
        function init() {
            document.querySelector("body").classList.add(variation_name);
            console.log('run test');
            if (!document.querySelector('.swiper-container')) {
                document.querySelector('[class*="pro-testimonials_wrapper"]').innerHTML = topnav;
            }
            if (!document.querySelector(".pro-testimonials-Carousel.swiper-initialized") && document.querySelector(".pro-testimonials-Carousel")) {
                console.log("initialize swiper");
                onwaitforswiper(generateSwiperSlider);
            }

        }

        /* Initialise variation */
        function thumbtackTest144(list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    clearInterval(test144Interval);
                    waitForElement("body", init, 50, 15000);
                    window.isHydrated = true;
                }
            });
        }
        if (!window.isHydrated) {
            var test144Interval = setInterval(function () {
                waitForElement("body", init, 50, 15000);
            }, 50);
            setTimeout(function () {
                clearInterval(test144Interval);
            }, 3000);
            const observer = new PerformanceObserver(thumbtackTest144);
            observer.observe({ entryTypes: ["mark"] });
        } else {
            waitForElement("body", init, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
