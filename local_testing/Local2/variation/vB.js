(function () {
  try {
    var debug = 1;
    var variation_name = "cre-t-121-control";

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
        waitForElement: function (selector, trigger, delayInterval, delayTimeout) {
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

    function insertCSS(css) {
      var style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = css;
      document.getElementsByTagName("head")[0].appendChild(style);
    }

    // Your CSS as a string
    var cssContent = `
html body.cre-t-121-control .cre-t-121-control-menu-icon svg {
  width: 100%;
  height: 100%;
}

html body.cre-t-121-control [data-attribute="restaurant-title-row"]+div {
  font-size: 14px !important;
}

html body.cre-t-121-control [data-attribute="restaurant-title-row"]+div svg {
  width: 14px !important;
  height: 14px !important;
  margin-top: 0px !important;
  align-self: center;
}

html body.cre-t-121-control .cre-t-121-control-photos-text {
  cursor: pointer;
  text-decoration: underline;
  color: #6B7280;
}

.cre-t-121-control-menu-main {
  display: flex;
  gap: 4px;
  align-items: center;
}

.cre-t-121-control-menu-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
}

html body.cre-t-121-control [data-attribute="restaurant-title-row"]+div .cre-t-121-control-menu-icon svg {
  width: 100% !important;
  height: 100% !important;
}

/* Modal section */
html body.cre-t-121-control .cre-t-121-control-overlay-and-modal {
  display: none;
  position: fixed;
  z-index: 99999998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

html body.cre-t-121-control.cre-t-121-control-trigger .cre-t-121-control-overlay-and-modal {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

html body.cre-t-121-control .cre-t-121-control-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 99999998;
}

html body.cre-t-121-control .cre-t-121-control-modal-section-container {
  position: relative;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

html body.cre-t-121-control .cre-t-121-control-modal-wrapper {
  width: 100%;
  height: 100%;
}

html body.cre-t-121-control .cre-t-121-control-modal-section {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  z-index: 99999998;
}

html body.cre-t-121-control .cre-t-121-control-modal-main {
  width: 100%;
  height: 100%;
  aspect-ratio: 1.65;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

html body.cre-t-121-control .cre-t-121-control-modal-close {
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
  width: 27px;
  height: 27px;
  color: #808285;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99999999 !important;
}

html body.cre-t-121-control .cre-t-121-control-modal-close img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

html body.cre-t-121-control .cre-t-121-control-overlay-and-modal {
  display: none;
}

html body.cre-t-121-control .cre-t-121-control-overlay-and-modal.is-visible {
  display: block;
}

.cre-t-121-control-overlay-and-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

body.cre-t-121-control-trigger .cre-t-121-control-overlay-and-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cre-t-121-control-modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.cre-t-121-control-modal-swiper.swiper {
  width: 100%;
  height: 100%;
  flex: 1;
}

.cre-t-121-control-modal-swiper .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

.cre-t-121-control-modal-swiper .swiper-slide img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  padding: 20px 5px;
}


.swiper-wrapper {
  display: flex;
}

.swiper-slide {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.swiper-button-next,
.swiper-button-prev {
  background-image: none !important;
  width: auto !important;
  height: auto !important;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 10px;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}

html body.cre-t-121-control .swiper-button-next,
html body.cre-t-121-control .swiper-button-prev {
  background-image: none !important;
  width: auto !important;
  height: auto !important;

}


html body.cre-t-121-control .swiper-button-next svg,
html body.cre-t-121-control .swiper-button-prev svg {
  display: block;
  width: 54px !important;
  height: 54px !important;
  color: #d7dbde;
}

/* Hide Swiper's default pseudo-elements */
.swiper-button-prev:after,
.swiper-button-next:after {
  display: none !important;
}

@media (max-width: 768px) {

  .swiper-button-next svg,
  .swiper-button-prev svg {
    width: 30px;
    height: 30px;
  }
}

.swiper-pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.4);
  opacity: 1;
  margin: 0 4px;
  transition: background-color 0.3s ease;
}

.swiper-pagination-bullet-active {
  background: #ffffff;
}

.swiper-pagination-fraction {
  display: none !important;
}

.cre-t-121-control-modal-swiper .swiper-pagination {
  bottom: 0px !important;
  left: 50% !important;
}

.swiper-button-next,
.swiper-button-prev {
  background-image: none !important;
  width: auto !important;
  height: auto !important;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 10px;
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next svg,
.swiper-button-prev svg {
  display: block;
  width: 40px;
  height: 40px;
  color: #fff;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  display: none !important;
}

html body.cre-t-121-control .swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.4) !important;
}

html body.cre-t-121-control .swiper-pagination-bullet-active {
  background: #fff !important;
}

.cre-t-121-control-img-wrapper {
  width: 800px;
  height: auto;
  padding: 10px;
}

html body.cre-t-121-control.cre-t-121-control-trigger {
  overflow: hidden;
}

@media screen and (min-width: 1020px) {
  html body.cre-t-121-control section .cre-t-121-control-menu-container {
    border-left: 1px solid rgb(235 239 242/var(--tw-bg-opacity, 1));
    padding-left: 8px;
  }

  .cre-t-121-control-img-wrapper {
    padding: 50px;
  }

  html body.cre-t-121-control.cre-t-121-control-trigger {
    display: block !important;
    overflow: hidden !important;
    position: relative !important;

  }
}
@media (max-width: 767px) {
    html body [data-attribute="restaurant-title-row"] [href*="#reviews"] > svg {
        display: none;
    }

    html body [data-attribute="restaurant-title-row"] [href*="#reviews"] {
        font-size: 0;
        line-height: 0;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0;
        justify-content: flex-start;
        flex-direction: row;
        text-align: start;
        margin-right: auto;
    }

    html body [data-attribute="restaurant-title-row"] .cre-t-121-control-rating {
        color: #272b2e;
        font-size: 1rem;
        line-height: 1.375;
        display: block !important;
        margin-right: 4px;
    }

    html body [data-attribute="restaurant-title-row"] .cre-t-121-control-rating strong {
        font-size: inherit;
        line-height: inherit;
        color: inherit;
    }

    html body [data-attribute="restaurant-title-row"] .cre-t-121-control-count {
        color: #272b2e;
        font-size: 1rem;
        line-height: 1.375;
        display: block !important;
        margin-left: 4px;
    }

    html body .cre-t-121-control-star-rating-bg {
        color: #ffb700;
        display: inline-block;
        font-size: 18px;
        line-height: 1;
        position: relative;
        /* transform: translate(-6px); */
        top: -1px;
    }

    html body .cre-t-121-control-star-rating-fg {
        position: absolute;
        top: 0;
        overflow: hidden;
        white-space: nowrap;
    }

    html body .cre-t-121-control-svg {
        display: flex !important;
        align-items: center;
        justify-content: center;
        height: 24px;
    }

    html body [data-attribute="restaurant-title-row"] {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0;
        text-align: start;
    }

    html body [data-attribute="restaurant-title-row"] > div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 0;
    }

    html body .cre-t-121-control-star-rating-bg span {
        line-height: inherit;
    }

    html body [data-attribute="restaurant-title-row"] > h3 a {
        width: 100%;
        display: block;
    }

    html body [data-attribute="restaurant-title-row"] > h3 {
        width: 100%;
    }

    html body.cre-t-121-control.cre-t-123 [data-attribute="restaurant-title-row"] [href*="#reviews"]{
    display: none;}
}  

`;

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

    /* Live event binding function */
    function live(selector, event, callback, context) {
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
    function getOriginId() {
      if (window.location.origin === "https://www.firsttable.co.nz") {
        return 1;
      }
      if (window.location.origin === "https://www.firsttable.com.au") {
        return 2;
      }
      if (window.location.origin === "https://www.firsttable.co.uk") {
        return 8;
      }
      return 1;
    }

    function fetchRestaurantMenu(slug, siteId) {
      const query = `
      query Restaurant($slug: String, $siteId: Int) {
        Restaurant(slug: $slug, siteId: $siteId) {
           images {
              nodes {
                url
             }
          }
        }
      }
    `;

      const variables = {
        slug: slug,
        siteId: siteId,
      };

      fetch("https://stellate.firsttable.net/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const restaurant = data.data ? data.data.Restaurant : data.Restaurant;

          if (restaurant && restaurant.images && restaurant.images.nodes.length > 0) {
            const menuImages = [];
            restaurant.images.nodes.forEach((image) => {
              const fullImageUrl = `https://images.firsttable.net/${image.url}`;
              menuImages.push({ url: fullImageUrl });
            });

            if (menuImages.length > 0) {
              showMenuModal(menuImages);
            } else {
              helper.log("No menu images found");
            }
          } else {
            helper.log("No menu data found in response");
          }
        })
        .catch((error) => {
          console.error("Error fetching restaurant menu:", error);
        });
    }

    function createMenuHTML() {
      return `
      <section class="cre-t-121-control-menu-container">
        <div class="cre-t-121-control-menu-container">
          <div class="cre-t-121-control-menu-main">
            <div class="cre-t-121-control-menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
            <path d="M1.57988 10.9999C1.253 10.9999 0.976333 10.8866 0.749862 10.6602C0.523392 10.4337 0.410156 10.157 0.410156 9.83016V1.1696C0.410156 0.842726 0.523392 0.566054 0.749862 0.339584C0.976333 0.113113 1.253 -0.00012207 1.57988 -0.00012207H10.2404C10.5673 -0.00012207 10.844 0.113113 11.0705 0.339584C11.2969 0.566054 11.4102 0.842726 11.4102 1.1696V9.83016C11.4102 10.157 11.2969 10.4337 11.0705 10.6602C10.844 10.8866 10.5673 10.9999 10.2404 10.9999H1.57988ZM1.57988 10.0293H10.2404C10.2903 10.0293 10.3359 10.0085 10.3773 9.96701C10.4188 9.9256 10.4396 9.87998 10.4396 9.83016V1.1696C10.4396 1.11978 10.4188 1.07416 10.3773 1.03275C10.3359 0.991226 10.2903 0.970466 10.2404 0.970466H1.57988C1.53005 0.970466 1.48444 0.991226 1.44302 1.03275C1.4015 1.07416 1.38074 1.11978 1.38074 1.1696V9.83016C1.38074 9.87998 1.4015 9.9256 1.44302 9.96701C1.48444 10.0085 1.53005 10.0293 1.57988 10.0293ZM2.5131 8.57341H9.35688L7.22919 5.73638L5.41241 8.10057L4.11829 6.44555L2.5131 8.57341Z" fill="#99A3AB"/>
          </svg>
            </div>
            <div class="cre-t-121-control-photos-text">View Photos</div>
          </div>
        </div>
      </section>
    `;
    }

    function addScript() {
      if (document.querySelector("#cre-swiper-js")) return;
      var scriptOne = document.createElement("script");
      scriptOne.id = "cre-swiper-js";
      scriptOne.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      document.querySelector("head").appendChild(scriptOne);

      var swiperCss = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>`;
      document.querySelector("head").insertAdjacentHTML("beforeend", swiperCss);
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

    function showMenuModal(menuImages) {
      // Define a function to handle closing and removing the modal.
      const closeModal = () => {
        const modalElement = document.querySelector(`.${variation_name}-overlay-and-modal`);
        document.body.classList.remove("cre-t-121-control-trigger"); // Hides the modal via CSS

        if (modalElement) {
          modalElement.remove();
        }
      };

      // If a modal from a previous click exists, remove it before creating a new one.
      closeModal();

      // Generate the <img> tags for the main slider
      let imagesAsSlidesHTML = "";
      menuImages.forEach(function (image, index) {
        imagesAsSlidesHTML += `
                  <div class="swiper-slide" data-swiper-slide-index="${index}">
                 
                      <img src="${image.url}" alt="Menu Image" style="display: block; width: 100%; height: auto; object-fit: contain;"> 
                
                  </div>`;
      });

      // The thumbnail HTML and its Swiper initialization are removed in this variation.

      const modalHTML = `
                  <div class="${variation_name}-overlay-and-modal">
                      <div class="${variation_name}-modal-overlay"></div>
                      <div class="${variation_name}-modal-section-container">
                          
                          <div class="${variation_name}-modal-close">
                              <div class="${variation_name}-close-icon">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" color="#C9CACB" class="svg-icon size-7">
                                      <path fill="currentColor" d="m2.343 3.757 1.414-1.414 9.9 9.9-1.415 1.414z"></path>
                                      <path fill="currentColor" d="m12.243 2.343 1.414 1.414-9.9 9.9-1.413-1.414z"></path>
                                  </svg>
                              </div>
                          </div>
                          <div class="${variation_name}-modal-section">
                              <div class="${variation_name}-modal-wrapper">
                                  <div class="${variation_name}-modal-main">
                                      <div class="${variation_name}-modal-swiper swiper">
                                          <div class="${variation_name}-modal-main-swiper swiper-wrapper">
                                              ${imagesAsSlidesHTML}
                                          </div>
                                          <div class="swiper-button-next">
                                              <svg width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg" color="#C9CACB" class="svg-icon">
                                                  <path d="M0 1h60M59 1 46 14" stroke="currentColor" stroke-width="2"></path>
                                              </svg>
                                          </div>
                                          <div class="swiper-button-prev">
                                              <svg width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg" color="#C9CACB" class="svg-icon">
                                                  <path d="M60 14H0M1 14 14 1" stroke="currentColor" stroke-width="2"></path>
                                              </svg>
                                          </div>
                                          <div class="swiper-pagination"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>`;

      // Append the new modal to the body every time.
      document.body.insertAdjacentHTML("beforeend", modalHTML);

      // Add class to the body to trigger the CSS to show the modal.
      document.body.classList.add("cre-t-121-control-trigger");

      // Attach event listeners to the newly created close button and overlay.
      live(`.${variation_name}-modal-close, .${variation_name}-close-icon, .${variation_name}-close-icon svg, .${variation_name}-modal-overlay`, "click", closeModal);

      helper.waitForElement(
        `.${variation_name}-overlay-and-modal`,
        function () {
          waitForSwiper(function () {
            const mainSlider = new Swiper(`.${variation_name}-modal-swiper.swiper`, {
              loop: true,
              slidesPerView: 1,
              spaceBetween: 20,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              },
              a11y: false,
            });
          });
        },
        50,
        5000
      );
    }

    function init() {
      _$("body").addClass(variation_name);
      addScript();
      helper.waitForElement('[data-attribute="restaurant-list-item"] [href*="#reviews"]', function () {
        // Select the parent element based on the given selector
        var elements = document.querySelectorAll('[data-attribute="restaurant-list-item"]');

        elements.forEach(function (item) {
          var childElement = item.querySelector('a[href*="#reviews"]');
          if (childElement) {
            var childNodes = childElement.childNodes;
            var svgElement = childNodes[0];
            var ratingElement = childNodes[1];
            var reviewCountElement = childNodes[2]?.wholeText || "";

            if (!svgElement || !ratingElement) return;

            var ratingValue = parseFloat(ratingElement.textContent || ratingElement.innerText || "0");

            // Custom width mapping based on rating value
            var percent = 10;
            if (ratingValue === 0) {
              percent = 0;
            } else if (ratingValue === 1) {
              percent = 10;
            } else if (ratingValue > 0 && ratingValue < 1) {
              percent = 20;
            } else if (ratingValue > 1 && ratingValue < 2) {
              percent = 30;
            } else if (ratingValue === 2) {
              percent = 40;
            } else if (ratingValue > 2 && ratingValue < 3) {
              percent = 50;
            } else if (ratingValue === 3) {
              percent = 60;
            } else if (ratingValue > 3 && ratingValue < 4) {
              percent = 70;
            } else if (ratingValue === 4) {
              percent = 80;
            } else if (ratingValue > 4 && ratingValue < 5) {
              percent = 90;
            } else if (ratingValue === 5) {
              percent = 100;
            }

            var reviewHtml = `
        <div class="cre-t-121-control-rating" style="display: none;">${ratingElement.outerHTML}</div>
        <div class="cre-t-121-control-svg" style="display: none;">
          <div class="cre-t-121-control-star-rating-bg">
            ${'<span class="cre-t-121-control-star">&#9734;</span>'.repeat(5)}
            <div class="cre-t-121-control-star-rating-fg" style="width: ${percent}%">${'<span class="cre-t-121-control-star">&#9733;</span>'.repeat(5)}</div>
          </div>
        </div>
        <div class="cre-t-121-control-count" style="display: none;">${reviewCountElement}</div>
      `;

            if (!item.querySelector(".cre-t-121-control-rating")) {
              childElement.insertAdjacentHTML("beforeend", reviewHtml);
            }
          }
        });
      });

      if (!window.observer121controlLi) {


        observeSelector(`ol li[data-attribute=restaurant-list-item]`, (listItem) => {
          helper.waitForElement(
            '[data-attribute="restaurant-list-location"]',
            function () {
              const targetElement = listItem.querySelector('[data-attribute="restaurant-list-location"]');

              if (targetElement && !targetElement.nextElementSibling?.classList.contains("cre-t-121-control-menu-container")) {
                targetElement.insertAdjacentHTML("beforeend", createMenuHTML());
              }
              // Insert the CSS
              insertCSS(cssContent);
            },
            100,
            5000
          );
        });
        live(".cre-t-121-control-photos-text", "click", function (e) {
          e.preventDefault();
          const restaurantLink = this.closest(`[data-attribute="restaurant-list-item"]`).querySelector(`[data-attribute="restaurant-title-row"] h3 a`).href;
          const restaurantSlug = new URL(restaurantLink).pathname.split("/").pop();
          const originId = getOriginId();
          fetchRestaurantMenu(restaurantSlug, originId);
        });

        window.observer121controlLi = true;
      }
    }
    // helper.waitForElement("body", init, 50, 5000);
    helper.waitForElement("body", function () {
      if (!window.cre121ControlEventHandler) {
        setTimeout(function () {
          observeSelector('[data-attribute="restaurant-list-item"]', function () {
            init();
          });
        }, 2000);
        window.cre121ControlEventHandler = true;
      }
    });
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();