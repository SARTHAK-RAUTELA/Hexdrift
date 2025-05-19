(function () {
  try {
    /* main variables */
    var debug = 1;
    var variation_name = "cre-t-51";

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
      /****Helper Functions****/
      // helper for enabling IE 8 event bindings
      function addEvent(el, type, handler) {
        if (el.attachEvent) el.attachEvent("on" + type, handler);
        else el.addEventListener(type, handler);
      }
      // matches polyfill
      this && this.Element &&
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

    // observer Selector helper for observe the dynamic modal
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

    function waitForSwiper(trigger) {
      var interval = setInterval(function () {
        if (typeof window.Swiper != "undefined") {
          clearInterval(interval);
          trigger();
        }
      }, 50);
      setTimeout(function () {
        clearInterval(interval);
      }, 15000);
    }

    function addScript() {
      var scriptOne = document.createElement("script");
      scriptOne.src = "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.min.js";
      document.querySelector("head").appendChild(scriptOne);
      var swiperCss =
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.2/swiper-bundle.css" integrity="sha512-ipO1yoQyZS3BeIuv2A8C5AwQChWt2Pi4KU3nUvXxc4TKr8QgG8dPexPAj2JGsJD6yelwKa4c7Y2he9TTkPM4Dg==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
      document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
    }

    function mutationObserverForUseUSerType() {
      // Create a mutation observer to watch for changes to the users_type attribute
      const userTypeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'users_type') {
            const userType = document.body.getAttribute('users_type');
            if (userType === 'guest') {
              var mobileselector = document.querySelector(' [data-attribute="header-search"]');
              if (window.innerWidth <= 767 && mobileselector) {
                mobileselector.insertAdjacentHTML("beforeend", newContent);
              } else {
                var insertionDiv = document.querySelector(' [data-attribute="header-nav"]');
                insertionDiv && insertionDiv.insertAdjacentHTML("afterbegin", newContent);
              }
            } else if (userType === 'member') {
              var mobileselector = document.querySelector(' [data-attribute="header-search"]');
              if (window.innerWidth <= 767 && mobileselector) {
                mobileselector.insertAdjacentHTML("beforeend", newContent);
              } else {
                if (document.querySelector(' [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]')) {
                  document.querySelector(' [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]').insertAdjacentHTML("afterbegin", newContent);
                }
              }
            }
          }
        });
      });
      // Start observing the body element for attribute changes
      userTypeObserver.observe(document.body, { attributes: true, attributeFilter: ['users_type'] });
    }

    function mutationObserverForNewAccount() {
      // Create a mutation observer to watch for changes to the user_type attribute
      const newAccountObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'user_type') {
            const userType = document.body.getAttribute('user_type');
            if (userType === 'new_account') {
              document.body.classList.add("cre-t-51-modal-open");
              initializeSwiper(); // Initialize swiper when modal opens
            }
          }
        });
      });
      // Start observing the body element for attribute changes
      newAccountObserver.observe(document.body, { attributes: true, attributeFilter: ['user_type'] });
    }

    let newContent = `<span class="cre-t-51-new-content-container">How it Works</span>`;
    var icon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
<path d="M6.74908 14.2382L0 7.48911L1.68727 5.80184L6.74908 10.8637L17.6127 0L19.3 1.68727L6.74908 14.2382Z" fill="#C7A77B"/>
</svg>`;

    var creT13ModalContent = `
<div style="display: none;" class="cre-t-51-modal-overlay"></div>
<div style="display: none;" class="cre-t-51-modal-container">
<div class="cre-t-51-modal-wrapper">
<div class="cre-t-51-cross">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M2.1868 18L0.452148 16.2L7.39074 9L0.452148 1.8L2.1868 0L9.12538 7.2L16.064 0L17.7986 1.8L10.86 9L17.7986 16.2L16.064 18L9.12538 10.8L2.1868 18Z" fill="#D8DBDF"/>
</svg>
</div>
<!-- Swiper container -->
<div class="cre-t-51-modal-main">
<div class="desktopopup">
<!-- Desktop content remains the same -->
<div class="cre-t-modal-header">What is First Table?</div>

<div class="cre-t-51-modal-content">

<div class="cre-t-51-modal-sub-copy"><b>First Table offers 50% off bookings at top restaurants.</b> Pay a small fee to secure a table and enjoy great dining for half the price.</div>

<div class="cre-t-51-modal-list-header">How it Works</div>

<div class="cre-t-51-modal-list-items">

<div class="cre-t-51-modal-list-item">

<div class="cre-t-51-modal-item-content">

<span>Explore Restaurants</span>—Find top-rated restaurants near you and try something new.

</div>

</div>

<div class="cre-t-51-modal-list-item">

<div class="cre-t-51-modal-item-content"><span>Book a Table</span>—Pay a small fee to reserve your discounted table. Your reservation is confirmed instantly.</div>

</div>

<div class="cre-t-51-modal-list-item">

<div class="cre-t-51-modal-item-content"><span>Enjoy 50% Off</span>—Get the same great food and service for half the price.</div>

</div>

</div>

<div class="cre-t-51-modal-nohidefree">No hidden fees. Just great food at half the price.</div>

<div class="cre-t-51-modal-lWhy_Restaurants">Why Restaurants <img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/vector_67efae1c20173.svg"> First Table</div>

<div class="cre-t-51-modal-paragraph">Restaurants love First Table because it fills their empty tables and brings in new customers. You'll get the <b>same great food and service</b>—no cut corners, just a win-win for everyone.</div>

<div class="cre-t-51-modal-reviewsection">

<div class="cre-t-51-modal-reviewicon"><img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/group-10_67efae29ecdee.svg"></div>

<p> "The service was exceptional, and the food was top-notch even with the discount."<p>

</div>

<div class="cre-t-51-modal-lWhy-Common-Questions">

<div class="Cre_heading_wuestions"> Common Questions</div>

<div class="cre-t-51-modal-questionstab">

<p>Will my booking be honoured?</p>

<p>Yes! Your reservation is confirmed instantly and the restaurant knows you're coming.</p>

</div>

<div class="cre-t-51-modal-questionstab">

<p>Do restaurants limit what I can order?</p>

<p>The menu and any conditions are always clear upfront, so you know exactly what to expect.</p>

</div>

<div class="cre-t-51-modal-questionstab">

<p>Is First Table legit?</p>

<p>Trusted by over 2,000,000 diners and 2,500+ restaurants globally. We monitor restaurant quality and only work with reputable venues.</p>

</div>

<div class="cre-t-51-modal-faqcta"> <a href="https://www.firsttable.co.nz/frequently-asked-questions">See all FAQs</a></div>

</div>

</div>
</div>
<div class="mobile_popup">
<div class="cre-t-51-cross-mobile">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M2.1868 18L0.452148 16.2L7.39074 9L0.452148 1.8L2.1868 0L9.12538 7.2L16.064 0L17.7986 1.8L10.86 9L17.7986 16.2L16.064 18L9.12538 10.8L2.1868 18Z" fill="#D8DBDF"></path>
</svg>
</div>
<div class="swiperslidermain swiper">
<div class="swiper-wrapper">
<!-- Swiper slides remain the same -->
<div class="swiper-slide Cre_item">

<div class="cre-t-51-modal-list-header">What is First Table?</div>

<div class="cre-t-51-modal-sub-copy"><b>First Table offers 50% off bookings at top restaurants</b>  Pay a small fee to secure a table and enjoy great dining for half the price.</div>

<div class="cre-t-51-modal-list-items">

<div class="cre-t-51-modal-list-item">

<div class="cre-t-51-modal-item-content">

<span>Find a Restaurant</span> — Browse restaurants near you and discover new cuisines.

</div>

</div>

<div class="cre-t-51-modal-list-item">

<div class="cre-t-51-modal-item-content">

<span>Book the First Table</span> — Pay a small booking fee to secure your table. Your reservation is confirmed instantly.

</div>

</div>

<div class="cre-t-51-modal-list-item">

<div class="cre-t-51-modal-item-content">

<span>Enjoy 50% Off</span> — Save on your meal while receiving the same great food and service as full-paying customers.

</div>

</div>

</div>

</div>

<div class="swiper-slide Cre_item">

<div class="cre-t-51-modal-lWhy_Restaurants">

Why Restaurants

<img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/vector_67efae1c20173.svg">

First Table

</div>

<div class="cre-t-51-modal-paragraph">

Restaurants love First Table because it fills their empty tables and brings in new customers.

You'll get the <b>same great food and service—no</b> cut corners, just a win-win for everyone.

</div>

<div class="cre-t-51-modal-reviewsection">

<div class="cre-t-51-modal-reviewicon">

<img src="https://cdn-3.convertexperiments.com/uf/10007679/10007713/group-10_67efae29ecdee.svg">

</div>

<p>"The service was exceptional, and the food was top-notch even with the discount."</p>

</div>

</div>

<div class="swiper-slide Cre_item">

<div class="cre-t-51-modal-lWhy-Common-Questions">

<div class="Cre_heading_wuestions">Common Questions</div>

<div class="cre-t-51-modal-questionstab">

<p>Will my booking be honoured?</p>

<p>Yes! Your reservation is confirmed instantly and the restaurant knows you're coming.</p>

</div>

<div class="cre-t-51-modal-questionstab">

<p>Do restaurants limit what I can order?</p>

<p>The menu and any conditions are always clear upfront, so you know exactly what to expect.</p>

</div>

<div class="cre-t-51-modal-questionstab">

<p>Is First Table legit?</p>

<p>Trusted by over 2,000,000 diners and 2,500+ restaurants globally. We monitor restaurant quality and only work with reputable venues.</p>

</div>

<div class="cre-t-51-modal-faqcta">

<a href="https://www.firsttable.co.nz/frequently-asked-questions">See all FAQs</a>

</div>

</div>

</div>
</div>
</div>
<div class="swiper-pagination-wrapper">
  <div class="swiper-pagination"></div>
</div>
<div class="cre-t-51-modal-button">OK, got it</div>
</div>
</div>
</div>
</div>
`;

    // Add CSS for proper pagination positioning
    var customCSS = `
      .cre-t-51-modal-container .mobile_popup {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .cre-t-51-modal-container .swiperslidermain {
        flex: 1;
        overflow: hidden;
      }
      .cre-t-51-modal-container .swiper-pagination-wrapper {
        padding: 15px 0;
        position: relative;
      }
      .cre-t-51-modal-container .swiper-pagination {
        position: relative;
        bottom: auto;
        margin: 0 auto;
      }
      .cre-t-51-modal-container .cre-t-51-modal-button {
        margin-top: 0;
      }
    `;

    function addCustomCSS() {
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = customCSS;
      document.head.appendChild(style);
    }

    function closeModal() {
      if (document.body.classList.contains("cre-t-51-modal-open")) {
        document.body.classList.remove("cre-t-51-modal-open");
        // Destroy Swiper when modal closes
        if (window.creT51SwiperInstance) {
          window.creT51SwiperInstance.destroy(true, true);
          window.creT51SwiperInstance = null;
        }
      }
    }

    function initializeSwiper() {
      // Destroy any existing Swiper instance first
      if (window.creT51SwiperInstance) {
        window.creT51SwiperInstance.destroy(true, true);
        window.creT51SwiperInstance = null;
      }

      // Initialize new Swiper with updated settings
      window.creT51SwiperInstance = new Swiper(".swiperslidermain", {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: false,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        a11y: {
          enabled: false
        },
        on: {
          init: function () {
            this.update();
          }
        }
      });
    }

    // all the changes based on our targeted modal and social login present or not
    function updateChanges() {
      addCustomCSS(); // Add our custom CSS for proper pagination positioning

      waitForElement(".cre-t-51-cross-mobile", function () {
        document.querySelector('.cre-t-51-cross-mobile').addEventListener("click", closeModal);
      });

      observeSelector('[data-attribute="hero"] , #form-alert , [users_type="guest"] ', () => {
        waitForElement(' [data-attribute="header-nav"] ,  [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]', function () {
          var insertionDiv = document.querySelector(' [data-attribute="header-nav"]');
          var insertionDiv2 = document.querySelector(' [users_type="member"] [data-attribute="header-search"] + [display="flex"] > [display="flex"]');
          var creT13NewContent = document.querySelector(".cre-t-51-new-content-container");
          var mobileselector = document.querySelector(' [data-attribute="header-search"]');

          if ((insertionDiv || insertionDiv2 || mobileselector) && !creT13NewContent) {
            const newContent = `<span class="cre-t-51-new-content-container">How it Works</span>`;
            if (window.innerWidth <= 767 && mobileselector) {
              mobileselector.insertAdjacentHTML("beforeend", newContent);
            } else if (insertionDiv) {
              insertionDiv.insertAdjacentHTML("afterbegin", newContent);
            } else if (insertionDiv2) {
              insertionDiv2.insertAdjacentHTML("afterbegin", newContent);
            }

            if (!document.querySelector(".cre-t-51-modal-overlay")) {
              document.body.insertAdjacentHTML("beforeend", creT13ModalContent);
            }
          }
        });
      });

      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("cre-t-51-new-content-container")) {
          document.body.classList.add("cre-t-51-modal-open");
          initializeSwiper(); // Initialize swiper when modal opens
          window._conv_q = window._conv_q || [];
          _conv_q.push(["triggerConversion", "100035415"]);
        }

        if (e.target.classList.contains("cre-t-51-cross") ||
          e.target.closest("div")?.classList.contains("cre-t-51-cross") ||
          e.target.classList.contains("cre-t-51-modal-button") ||
          e.target.classList.contains("cre-t-51-modal-overlay")) {
          closeModal();
        }

        if (e.target.classList.contains("cre-t-51-modal-list-header")) {
          e.target.classList.toggle("cre-t-51-modal-open");
        }
        if (e.target.classList.contains("cre-t-51-modal-lWhy_Restaurants")) {
          e.target.classList.toggle("cre-t-51-Why_Restaurants");
        }
        if (e.target.classList.contains("Cre_heading_wuestions")) {
          e.target.classList.toggle("cre-t-51-heading_wuestions");
        }
      });

      mutationObserverForUseUSerType();
      mutationObserverForNewAccount();
    }

    addScript();

    /* Variation Init */
    function init() {
      document.body.classList.add(variation_name);
      // initiate the observer only once
      if (!window.creT52bserver) {
        window.creT52bserver = true;
        updateChanges();
      }

      // Initialize swiper when modal opens through other means
      live(".cre-t-51-new-content-container", "click", function () {
        setTimeout(initializeSwiper, 100);
      });
    }

    /* Initialise variation */
    waitForElement("[data-attribute='header-logo']", init);
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();