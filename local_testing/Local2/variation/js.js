this code making jot form to break can you tell
(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-33";

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

        bmRemove: function () {
          return this.each(function (i) {
            i.remove();
          });
        },
        append: function (v) {
          return this.each(function (i) {
            i.insertAdjacentHTML('beforeEnd', v);
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

        live: function (selector, event, callback, context) {
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
                    nodes = (
                      node.parentNode || node.document
                    ).querySelectorAll(selector),
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
              while (
                el &&
                el.matches &&
                el !== context &&
                !(found = el.matches(selector))
              )
                el = el.parentElement;
              if (found) callback.call(el, e);
            });
          }
          live(selector, event, callback, context);
        }
      };
      return function (selector) {
        return new bm(selector);
      };
    });

    var helper = _$();


    // Slider Implementation

    function waitForSwiper(trigger) {
      var interval = setInterval(function () {
        if (typeof window.Swiper != 'undefined') {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);

    }
    function addScript() {

      var script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js";
      document.querySelector("head").appendChild(script);

      var scriptOne = document.createElement("script");
      scriptOne.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.min.js";
      document.querySelector("head").appendChild(scriptOne);

      var swiperCss =
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css" integrity="sha512-ipO1yoQyZS3BeIuv2A8C5AwQChWt2Pi4KU3nUvXxc4TKr8QgG8dPexPAj2JGsJD6yelwKa4c7Y2he9TTkPM4Dg==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
      document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
    }
    addScript();
    function sliderInit() {
      _$('body').addClass(variation_name);
      waitForSwiper(function () {
        // for mobile
        var isMobile = window.innerWidth <= 600;

        var swiper = new Swiper('.cre-t-33-image-main .swiper', {
          slidesPerView: 1,
          slidesPerGroup: 1,
          speed: 650,
          loop: false,
          spaceBetween: 9,
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },


          // Enable mousewheel and keyboard navigation for mobile
          mousewheel: isMobile,
          keyboard: isMobile,
        });

        // Function to update the progress bar color
        function updateProgressBarColor(index) {
          var progressBar = document.querySelector('.swiper-pagination-progressbar .swiper-pagination-progressbar-fill');
          if (progressBar) {
            // colors based on the active slide 
            var colors = ['#FF6726', '#06D6A0', '#884DFF'];
            progressBar.style.backgroundColor = colors[index % colors.length];
          }
        }

        // Initial button state
        function updateNavigationState() {
          var prevButton = document.querySelector('.cre-t-33-image-main .swiper-button-prev');
          var nextButton = document.querySelector('.cre-t-33-image-main .swiper-button-next');

          if (swiper.activeIndex === 0) {
            prevButton.classList.add('disabled');
          } else {
            prevButton.classList.remove('disabled');
          }

          if (swiper.activeIndex === swiper.slides.length - 1) {
            nextButton.classList.add('disabled');
          } else {
            nextButton.classList.remove('disabled');
          }
        }

        // Run initially to set the correct state
        updateNavigationState();
        updateProgressBarColor(swiper.realIndex); // Set initial color for progress bar

        // Update button state and progress bar color on slide change
        swiper.on('slideChange', function () {
          updateNavigationState();
          updateProgressBarColor(swiper.realIndex);
        });
      });
    }

    // DropDown animation
    function creScroll(bmContentId, bmValue) {
      var bmContent = document.querySelector(bmContentId);
      if (bmContent) {
        var scrollTop = bmContent.getBoundingClientRect().top + window.pageYOffset - bmValue;

        window.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      }
    }

    function dropdownFunction() {
      // Elements
      var dropdownParent = document.querySelector(".cre-t-33-dropdown");
      var dropdownInput = document.querySelector(".cre-t-33-dropdown-input");
      var dropdownText = document.querySelector(".cre-t-33-dropdown-input-text");
      var dropdownOptions = document.querySelector(".cre-t-33-dropdown-option");
      var ctaButton = document.querySelector(".cre-t-33-cta");

      // Show/Hide Dropdown Options using add/remove based on conditions
      helper.live(".cre-t-33-dropdown-input", "click", function () {
        if (dropdownParent) {
          if (dropdownParent.classList.contains("cre-t-33-show")) {
            dropdownParent.classList.remove("cre-t-33-show"); // Remove class if already shown
          } else {
            dropdownParent.classList.add("cre-t-33-show"); // Add class if not shown
          }
        }
      });

      // Select an option from the dropdown
      var options = document.querySelectorAll(".cre-t-33-dropdown-option-wrapper .cre-t-33-option");
      options.forEach(function (option) {
        option.addEventListener("click", function () {
          var selectedOption = this.textContent;
          dropdownText.textContent = selectedOption;
          dropdownText.classList.add("cre-t-33-selected"); // Add class to show selected text

          if (dropdownParent.classList.contains("cre-t-33-show")) {
            dropdownParent.classList.remove("cre-t-33-show"); // Remove class if already shown
          }

          // Enable the CTA button
          ctaButton.classList.add("cre-t-33-active");
        });
      });

      // Close dropdown if clicked outside using add/remove
      document.addEventListener("click", function (event) {
        if (!event.target.closest(".cre-t-33-dropdown")) {
          if (dropdownParent.classList.contains("cre-t-33-show")) {
            dropdownParent.classList.remove("cre-t-33-show");
          }
        }
      });

      helper.live(".cre-t-33-cta-footer", "click", function () {
        creScroll(".cre-t-33-cards-container", 50);
      });
    }
    var dropdownIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
    <path opacity="0.8" d="M1 1L6 6L11 1" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;
    var dropDownSection = `<div class="cre-t-33-hero-left-content3">
            <div class="cre-t-33-dropdown-container">
                <div class="cre-t-33-dropdown-wrapper">
                    <div class="cre-t-33-content2">
                        <div class="cre-t-33-dropdown">
                            <div class="cre-t-33-dropdown-input">
                                <div class="cre-t-33-dropdown-input-text">Please select</div>
                                <div class="cre-t-33-dropdown-input-icon">${dropdownIcon}</div>
                            </div>
                            <div class="cre-t-33-dropdown-option">
                                <div class="cre-t-33-dropdown-option-wrapper">
                                    <div class="cre-t-33-option cre-t-33-option1">Masculinisation</div>
                                    <div class="cre-t-33-option cre-t-33-option2">Feminisation</div>
                                    <div class="cre-t-33-option cre-t-33-option3">Non binary</div>
                                    <div class="cre-t-33-option cre-t-33-option4">Pause puberty</div>
                                </div>
                            </div>
                        </div>
                        <div class="cre-t-33-cta">
                            <a class="cre-t-33-cta-link cre-t-33-goal" href="https://www.gendergp.com/accessing-gender-affirming-care/"> Help
                                me transition
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>`;


    var lightBoxSlider = `
      <div class="cre-t-33-image-main">
         <div class="cre-t-33-bottom">
          <div class="cre-t-33-slider-wrapper">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="cre-t-33-slider-card-container">
                        <div class="cre-t-33-slider-card-wrapper">
                            <div class="cre-t-33-slider-card-top cre-t-33-slider-card-top1">
                                <div class="cre-t-33-slider-card-number">1</div>
                                <div class="cre-t-33-slider-card-title">"I’m worried about the cost."</div>
                            </div>
                            <div class="cre-t-33-slider-card-lower cre-t-33-slider-card-lower1">
                                <div class="cre-t-33-sider-card-para">
                                   We know finances are a big deal. That’s why, for the past nine years, we’ve kept our prices the same. Our care package brings together everything you need—comprehensive, evidence-based support tailored just for you—at a price that’s unmatched.

                                <span>Because getting the care you deserve shouldn’t mean breaking the bank.</span>

                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
    
                <div class="swiper-slide">
                    <div class="cre-t-33-slider-card-container">
                        <div class="cre-t-33-slider-card-wrapper">
                            <div class="cre-t-33-slider-card-top cre-t-33-slider-card-top2">
                                <div class="cre-t-33-slider-card-number">2</div>
                                <div class="cre-t-33-slider-card-title">"I don’t know if I can trust an online service."</div>
                            </div>
                            <div class="cre-t-33-slider-card-lower cre-t-33-slider-card-lower2">
                                <div class="cre-t-33-sider-card-para">
                                  Over 10,000 people worldwide trust GenderGP for their care. We are the most popular provider for a reason—real professionals handle every step of your journey, and your privacy is always our top priority. You’re in safe hands.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="swiper-slide">
                    <div class="cre-t-33-slider-card-container">
                        <div class="cre-t-33-slider-card-wrapper">
                            <div class="cre-t-33-slider-card-top cre-t-33-slider-card-top3">
                                <div class="cre-t-33-slider-card-number">3</div>
                                <div class="cre-t-33-slider-card-title">"I feel like I’m doing this alone."</div>
                            </div>
                            <div class="cre-t-33-slider-card-lower cre-t-33-slider-card-lower3">
                                <div class="cre-t-33-sider-card-para">
                                   You’re not. GenderGP is more than care—it’s a community. We’ll support you every step of the way with expert advice, understanding, and a network of people who truly get it.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev cre-t-33-goal">
              <div class="cre-t-33-category-left-arrow">

             </div></div>
              <div class="swiper-button-next cre-t-33-goal">
              <div class="cre-t-33-category-right-arrow">

              </div></div>
            </div>
          </div>
         </div>
      </div> `

    var modalUI = ` <div class="cre-t-33-modal-upper-content">
    <div class="cre-t-33-modal-left-wrapper">
        <div class="cre-t-33-modal-title">Wait, before you go, let’s talk...</div>
        <div class="cre-t-33-modal-para">We understand you might have questions or concerns. That’s
            okay. Choosing the right care is a
            big step, and we want to
            make sure you have all the information you need.</div>
        <div class="cre-t-33-modal-slider-wrapper">
            <div class="cre-t-33-modal-slider-title">
                Here’s what you should know:
            </div>
            ${lightBoxSlider}
        </div>
    </div>

    <div class="cre-t-33-modal-right-wrapper cre-t-33-modal-right-wrapper-desktop">
        <div class="cre-t-33-modal-image-wrapper">
            <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/modalimg-1_67874f8b0b3a8.png" alt="modal-image">
        </div>
    </div>
</div>
<div class="cre-t-33-modal-lower-content-container">
    <div class="cre-t-33-lower-content-wrapper">
        <div class="cre-t-33-lower-title">
            What you should do next
        </div>
        <div class="cre-t-33-list-wraper">
            <div class="cre-t-33-list-Item">
                <div class="cre-t-33-list-Item-first">1</div>
                <div class="cre-t-33-list-link">
                    <a class="cre-t-33-goal" href="https://www.gendergp.com/accessing-gender-affirming-care/">Start your journey today</a>: Or, <a class="cre-t-33-goal" href="https://www.gendergp.com/how-gendergp-works/"> see how our service works</a>
                </div>
            </div>
            <div class="cre-t-33-list-dropDown">
                ${dropDownSection}
            </div>
        </div>
        <div class="cre-t-33-list-wraper">
            <div class="cre-t-33-list-Item">
                <div class="cre-t-33-list-Item-first">2</div>
                <div class="cre-t-33-list-link">
                    <a class="cre-t-33-list-link-email">Leave your email</a>, and we’ll send you helpful resources, inspiring
                    stories, and clear answers to your questions.
                </div>
            </div>
            <div class="cre-t-33-list-dropDown cre-t-33-wordpress-email-section">
            </div>
          
        </div>
        <div class="cre-t-33-close-window">
            Close window
        </div>
    </div>
</div>`;

    var lightBox = `
    <div class="cre-t-33-overlay-and-modal">
     <div class="cre-t-33-modal-overlay"></div>
    <div class="cre-t-33-modal-section">
    <div class="cre-t-33-modal-wrapper">
        <div class="cre-t-33-modal-container">
            <div class="cre-t-33-modal-close"><img src="https://cdn-3.convertexperiments.com/uf/10007679/10007617/cross_67873b1453d2a.svg" alt="cross-icon"></div>
            <div class="cre-t-33-modal-main">
             ${modalUI}
            </div>
        </div>
    </div>
    </div>
    </div>
    `;

    function setBmCookie() {
      document.cookie = "cre-t-33=cre-t-33-modal-triggered; path=/";
    }


    // modal trigger for desktop 
    function init() {
      _$('body').addClass(variation_name);
      if (window.location.href.includes('https://www.gendergp.com/')) {
        _$('body').append(lightBox);
        sliderInit();
      }
    }

    // exit intent logic 
    function exitIntent() {
      document.addEventListener("mouseout", function (event) {
        var cookiename = getCookie("cre-t-33");
        if (cookiename != "cre-t-33-modal-triggered") {

          if (!event.toElement && !event.relatedTarget && event.clientY <= 10) {
            document.querySelector("body").classList.add("lightBox-33-triggered");
            // setBmCookie();
          }
        }
      });
    }

    // get cookie function 
    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
    }

    // set cookie remove element 
    function removeContentSetCookie() {
      _$(".cre-t-33-overlay-and-modal").bmRemove();
      setBmCookie();
    }


    // Mobile Modal Trigger
    function isMobile() {
      return window.innerWidth <= 768;
    }

    function setSession(key, value) {

      sessionStorage.setItem(key, value);
    }

    function getSession(key) {

      return sessionStorage.getItem(key);
    }

    function showMobileModal() {

      document.querySelector("body").classList.add("lightBox-33-triggered");
    }

    function forMobile() {
      var sessionKey = "cre-t-33-modal-time";
      var sessionValue = getSession(sessionKey);

      if (!sessionValue) {
        var triggerTime = new Date().getTime() + 22000; // 22 seconds from now
        setSession(sessionKey, triggerTime);
      }

      var interval = setInterval(function () {
        var currentTime = new Date().getTime();
        var targetTime = parseInt(getSession(sessionKey), 10);

        if (currentTime >= targetTime) {
          clearInterval(interval);
          showMobileModal();
          setSession("cre-t-33-modal-triggered", true);
        }

      }, 1000);
    }


    // event for close the pop up and click outside modal
    function eventhandler() {
      helper.live('.cre-t-33-modal-close, .cre-t-33-modal-overlay, .cre-t-33-close-window', "click", function () {
        removeContentSetCookie();
      })
    }

    // if desktop 
    function forDesktop() {
      init();
      exitIntent();
      eventhandler();
      dropdownFunction();
    }
    // Countdown function to display remaining time

    //  desktop checking 
    var cookiename = getCookie("cre-t-33");
    if (cookiename != "cre-t-33-modal-triggered") {
      helper.waitForElement("body", forDesktop, 25, 25000);
    }

    // Mobile Checking
    if (isMobile() && !getSession("cre-t-33-modal-triggered")) {
      var excludedSlugs = ["/accessing-gender-affirming-care/", "/existing-members/"];
      var currentSlug = window.location.pathname;
      if (!excludedSlugs.includes(currentSlug)) {
        forMobile();
      }
    }
   
    // Wordpress Email
    helper.waitForElement('[cre-t33="sitewide"]', function () {
      var wordpressFrom = document.querySelector(`[cre-t33="sitewide"]`)
      var dropdownDiv = document.querySelector(".cre-t-33-wordpress-email-section");
      if (wordpressFrom && dropdownDiv) {
        dropdownDiv.insertAdjacentElement("beforeend", wordpressFrom);
      }
    }, 25, 25000)



  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();