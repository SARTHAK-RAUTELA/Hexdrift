(function () {
    try {
        var debug = 1;
        var variation_name = "cre-t-100";

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
        var cssContent = `html body.cre-t-100 [data-attribute="restaurant-title-row"] + div {
    font-size: 14px !important;
  }
  
  html body.cre-t-100 [data-attribute="restaurant-title-row"] + div svg {
    width: 14px !important;
    height: 14px !important;
    margin-top: 0px !important;
    align-self: center;
  }
  .cre-t-100-menu-icon {
    cursor: pointer;
  }
  html body.cre-t-100 .cre-t-100-menu-text {
    cursor: pointer;
    text-decoration: underline;
  }
  
  .cre-t-100-modal-section-container .swiper-pagination-fraction.swiper-pagination-horizontal {
    position: absolute;
    width: 100px;
    z-index: 99999999;
    top: 16px;
    left: 16px;
    height: 100px;
  }
  
  .cre-t-100-menu-main {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  
  /* Modal section */
  
  html body.cre-t-100 .cre-t-100-overlay-and-modal {
    display: none;
    position: fixed;
    z-index: 99999998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  html body.cre-t-100.cre-t-100-trigger .cre-t-100-overlay-and-modal {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  html body.cre-t-100 .cre-t-100-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(86, 100, 110, 0.5);
    z-index: 99999998;
  }
  
  html body.cre-t-100 .cre-t-100-modal-section-container {
    /* max-width: 1140px;
        width: calc(100% - 30px); */
    position: relative;
    z-index: 99999999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  html body.cre-t-100 .cre-t-100-modal-wrapper {
    width: 100%;
    height: 100%;
    /* z-index: 99999998; */
  }
  
  html body.cre-t-100 .cre-t-100-modal-section {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    /* max-width: 1140px; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* padding: 50px 80px; */
    overflow-y: auto;
    z-index: 99999998;
  }
  
  html body.cre-t-100 .cre-t-100-modal-main {
    width: 100%;
    height: 100%;
    aspect-ratio: 1.65;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
  
  html body.cre-t-100 .cre-t-100-modal-wrapper iframe {
    width: 100%;
    height: 100%;
  }
  
  html body.cre-t-100 .cre-t-100-modal-container {
    /* padding: 68px 79px 84px 78px; */
    position: relative;
  }
  
  html body.cre-t-100 .cre-t-100-modal-close {
    position: absolute;
    right: 18px;
    top: 18px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    color: #808285;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 99999999 !important;
  }
  
  html body.cre-t-100 .cre-t-100-modal-close img {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
  }
  
  html body.cre-t-100 .cre-t-100-overlay-and-modal {
    display: none;
  }
  
  html body.cre-t-100 .cre-t-100-overlay-and-modal.is-visible {
    display: block; 
  }
  
  .cre-t-100-overlay-and-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  
  
  body.cre-t-100-trigger .cre-t-100-overlay-and-modal {
    display: flex; 
    align-items: center;
    justify-content: center;
  }
  
  
  .cre-t-100-modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  html body.cre-t-100 .cre-t-100-menu-icon{
    width: 18px;
    height: 16px;
    display: flex;
    align-items: center;
  }
  html body.cre-t-100 [data-attribute="restaurant-title-row"] + div .cre-t-100-menu-icon svg{
    width: 100% !important;
    height: 100% !important;
  }
  
  /* Swiper Css */
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  .cre-t-100-thumbnails-wrapper .swiper-slide img{
    height: 100%;
  }
  
  .cre-t-100-modal-swiper.swiper {
    width: 100%;
    height: 100%;
    flex: 1;
  }
  
  .cre-t-100-modal-swiper .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
  
  .cre-t-100-modal-swiper .swiper-slide img {
    /* position: absolute;
    top: 0;
    left: 0; */
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    padding: 20px 0px;
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
  
  .cre-t-100-modal-thumbnails .swiper-slide {
    width: 80px !important; 
    height: 80px !important; 
    opacity: 0.5; 
    transition: opacity 0.3s ease;
    margin-right: 0px !important;
  }
  
  .cre-t-100-modal-thumbnails .swiper-slide-thumb-active {
    opacity: 1; 
  }
  
  /* NEW CSS for the thumbnails wrapper */
  .cre-t-100-thumbnails-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 10px 0px;
    background: rgba(39, 43, 46, 0.5);
    padding: 10px 0;
  }
  
  html body.cre-t-100 .cre-t-100-modal-thumbnails {
        /* max-width: 500px; */
        width: 70%;
        overflow: visible;
        margin: 0 !important;
        height: 100%;
  }
  
  html body.cre-t-100 .cre-t-100-modal-thumbnails .swiper-wrapper{
    display: flex;
    align-items: center;
    
  }
  
  html body.cre-t-100 .swiper-button-next,
  html body.cre-t-100 .swiper-button-prev {
        background-image: none !important; 
        width: auto !important; 
        height: auto !important; 
      
      }
      
      
      html body.cre-t-100  .swiper-button-next svg,
      html body.cre-t-100  .swiper-button-prev svg {
        display: block; 
        width: 54px !important; 
        height: 54px !important; 
        color: #265682; 
      }

 html body.cre-t-100  .swiper-button-prev:after, 
 html body.cre-t-100  .swiper-button-next:after{
      display: none !important;
  }
  
  @media screen and (min-width: 1020px){
    .cre-t-100-img-wrapper{
      width: 800px;
      height: auto;
      padding: 10px;
    }
  
    html body.cre-t-100 section .cre-t-100-menu-container {
      border-left: 1px solid rgb(235 239 242/var(--tw-bg-opacity,1));
      padding-left: 8px;
    }
  
    html body.cre-t-100 .cre-t-100-modal-thumbnails{
      width: 100% !important;
    }
  
    html body.cre-t-100 .cre-t-100-modal-thumbnails .swiper-wrapper {
      justify-content: center;
      max-width: 500px;
    }
  }
  
  html body.cre-t-100.cre-t-100-trigger {
    display: block;
    position: fixed;
    overflow: hidden;
  }

  @media screen and (max-width: 767px){
    html body.cre-t-100 .cre-t-100-menu-icon{
      width: 14px;
      height: 14px;
    }
    
html body.cre-t-100.cre-t-100-trigger {
    display: block;
    position: fixed;
    overflow: hidden;
  }

  }`

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
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
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
          query Restaurant($slug: String, $siteId: Int, $menuImagesWidth2: Int, $menuImagesHeight2: Int) {
            Restaurant(slug: $slug, siteId: $siteId) {
              menus {
                nodes {
                  menuImages(width: $menuImagesWidth2, height: $menuImagesHeight2) {
                    nodes {
                      url
                    }
                  }
                }
              }
            }
          }
        `;

            const variables = {
                slug: slug,
                siteId: siteId,
                menuImagesWidth2: 800,
                menuImagesHeight2: 600,
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

                    if (restaurant && restaurant.menus && restaurant.menus.nodes.length > 0) {
                        const menuImages = [];
                        restaurant.menus.nodes.forEach((menu) => {
                            if (menu.menuImages && menu.menuImages.nodes) {
                                menu.menuImages.nodes.forEach((image) => {
                                    const fullImageUrl = `https://images.firsttable.net/2160x2880/${image.url}`;
                                    menuImages.push({ url: fullImageUrl });
                                });
                            }
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
          <section class="cre-t-100-menu-container-wrapper">
            <div class="cre-t-100-menu-container">
              <div class="cre-t-100-menu-main">
                <div class="cre-t-100-menu-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                    <path d="M7.5 12V1.20146M1 1.2173C6.6875 0.44124 7.5 1.99335 7.5 1.99335C7.5 1.99335 8.3125 0.44124 14 1.2173V10.5314C9.125 9.75534 7.5 10.9194 7.5 10.9194C7.5 10.9194 5.875 9.75534 1 10.5307V1.2173Z" stroke="#99A3AB" stroke-width="1.3"/>
                  </svg>
                </div>
                <div class="cre-t-100-menu-text">View Menu</div>
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

            var swiperCss = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
      `;
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

        // THIS IS THE CORRECTED FUNCTION
        function showMenuModal(menuImages) {
            const closeModal = () => {
                const modalElement = document.querySelector(`.${variation_name}-overlay-and-modal`);
                document.body.classList.remove("cre-t-100-trigger");

                if (modalElement) {
                    modalElement.remove();
                }
            };

            closeModal();

            let imagesAsSlidesHTML = "";
            menuImages.forEach(function (image, index) {
                imagesAsSlidesHTML += `
      <div class="swiper-slide" data-swiper-slide-index="${index}">

        <img src="${image.url}" alt="Menu Image" style="display: block; width: 100%; height: auto; object-fit: contain;"> 
 
      </div>`;
            });

            let thumbnailsHTML = "";
            menuImages.forEach(function (image, index) {
                thumbnailsHTML += `
      <div class="swiper-slide" data-swiper-slide-index="${index}">
        <img src="${image.url}" alt="Thumbnail Image">
      </div>`;
            });

            const modalHTML = `
  <div class="${variation_name}-overlay-and-modal">
    <div class="${variation_name}-modal-overlay"></div>
    <div class="${variation_name}-modal-section-container">
      
      <div class="swiper-pagination-fraction"></div>

      <div class="${variation_name}-modal-close">
        <div class="${variation_name}-close-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" color="#265682" class="svg-icon size-7"><path fill="currentColor" d="m2.343 3.757 1.414-1.414 9.9 9.9-1.415 1.414z"></path><path fill="currentColor" d="m12.243 2.343 1.414 1.414-9.9 9.9-1.413-1.414z"></path></svg></div>
      </div>
      <div class="${variation_name}-modal-section">
        <div class="${variation_name}-modal-wrapper">
          <div class="${variation_name}-modal-main">
            <div class="${variation_name}-modal-swiper swiper">
              <div class="${variation_name}-modal-main-swiper swiper-wrapper">${imagesAsSlidesHTML}</div>
              <div class="swiper-button-next"><svg width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg" color="#265682" class="svg-icon"><path d="M0 1h60M59 1 46 14" stroke="currentColor" stroke-width="2"></path></svg></div>
              <div class="swiper-button-prev"><svg width="60" height="15" viewBox="0 0 60 15" fill="none" xmlns="http://www.w3.org/2000/svg" color="#265682" class="svg-icon"><path d="M60 14H0M1 14 14 1" stroke="currentColor" stroke-width="2"></path></svg></div>
            </div>
            <div class="cre-t-100-thumbnails-wrapper"> <div class="${variation_name}-modal-thumbnails swiper">
                <div class="swiper-wrapper">${thumbnailsHTML}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

            document.body.insertAdjacentHTML("beforeend", modalHTML);
            document.body.classList.add("cre-t-100-trigger");

            live(`.${variation_name}-modal-close, .${variation_name}-close-icon, .${variation_name}-close-icon svg, .${variation_name}-modal-overlay`, "click", closeModal);

            helper.waitForElement(`.${variation_name}-overlay-and-modal`, function () {
                waitForSwiper(function () {
                    const thumbnailSlider = new Swiper(`.${variation_name}-modal-thumbnails.swiper`, {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        watchSlidesProgress: true,
                        centeredSlides: true,
                        slideToClickedSlide: true,
                        a11y: false,
                    });

                    const mainSlider = new Swiper(`.${variation_name}-modal-swiper.swiper`, {
                        loop: true,
                        slidesPerView: 1,
                        spaceBetween: 20,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination-fraction",
                            type: "fraction",
                        },
                        thumbs: {
                            swiper: thumbnailSlider,
                        },
                        preloadImages: true,
                        a11y: false,
                    });

                });
            }, 50, 5000);

        }
        function init() {
            _$("body").addClass(variation_name);
            addScript();

            // Custom Goal Trigger
            live(`.swiper-button-next, .swiper-button-prev, .cre-t-100-modal-thumbnails .swiper-slide img`, "mousedown", function () {
                window._conv_q = window._conv_q || []; _conv_q.push(["triggerConversion", "100036491"]);
            })

            if (!window.observer100Li) {
                observeSelector(`ol li[data-attribute=restaurant-list-item]`, (listItem) => {
                    helper.waitForElement(
                        '[data-attribute="restaurant-title-row"] + div > a + span',
                        function () {
                            const targetElement = listItem.querySelector('[data-attribute="restaurant-title-row"] + div > a + span');

                            if (targetElement && !targetElement.nextElementSibling?.classList.contains("cre-t-100-menu-container")) {
                                targetElement.insertAdjacentHTML("afterend", createMenuHTML());
                            }
                            // Insert the CSS
                            insertCSS(cssContent);
                        },
                        100,
                        5000
                    );
                });

                live(".cre-t-100-menu-text", "click", function (e) {
                    e.preventDefault();
                    const restaurantLink = this.closest(`[data-attribute="restaurant-list-item"]`).querySelector(`[data-attribute="restaurant-title-row"] h3 a`).href;
                    const restaurantSlug = new URL(restaurantLink).pathname.split("/").pop();
                    const originId = getOriginId();
                    fetchRestaurantMenu(restaurantSlug, originId);
                });

                window.observer100Li = true;
            }
        }
        helper.waitForElement("body", init, 50, 5000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
