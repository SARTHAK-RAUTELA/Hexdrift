(function () {
    try {
      /* main variables */
      var debug = 1;
      var variation_name = "cre-t-48";
  
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
  
      var creHeader = `
        <div class="cre-t-48-modal-new-modal-header w-full text-wrap text-left text-2xl font-bold max-lg:text-center">Sign up for a <span>Free</span> 3-day trial</div>
        <div class="cre-t-48-cta flex items-center justify-center">
          <a href="/pricing-ft" class="cre-t-48-cta-link flex items-center justify-center transition-colors bg-dark-navy text-white h-10 p-6 rounded-md mt-4 w-full">
            <span>Start Free Trial</span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="ms-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
            </svg>
          </a>
        </div>
      `;
  
      var creList = `
      
    <li class="flex flex-row gap-x-1.5"><img alt="Green Checkbox" loading="eager" width="24" height="25" decoding="async"
        data-nimg="1" class="aspect-square h-5 w-5 shrink-0"
        srcset="/_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=48&amp;q=75 2x"
        src="/_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=48&amp;q=75"
        style="color: transparent;" data-cmp-info="10"><span
        class="text-[18px] font-medium leading-none text-light-gray">The #1 AI Detector according to Forbes</span></li>
    <li class="flex flex-row gap-x-1.5"><img alt="Green Checkbox" loading="eager" width="24" height="25" decoding="async"
        data-nimg="1" class="aspect-square h-5 w-5 shrink-0"
        srcset="/_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=48&amp;q=75 2x"
        src="/_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=48&amp;q=75"
        style="color: transparent;" data-cmp-info="10"><span
        class="text-[18px] font-medium leading-none text-light-gray">Lets you use AI confidently for school and
        work</span></li>
    <li class="flex flex-row gap-x-1.5"><img alt="Green Checkbox" loading="eager" width="24" height="25" decoding="async"
        data-nimg="1" class="aspect-square h-5 w-5 shrink-0"
        srcset="/_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=48&amp;q=75 2x"
        src="/_next/image?url=https%3A%2F%2Factive-thrill-a62d706f43.media.strapiapp.com%2Fgreen_Check_Round_1_daf4022da8.png&amp;w=48&amp;q=75"
        style="color: transparent;" data-cmp-info="10"><span
        class="text-[18px] font-medium leading-none text-light-gray">Saves you time and is easy to use</span></li>
      `;
  
      var helper = _$();
  
      const observeSelector = (selector, callback, options = {}) => {
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
  
        const lookForSelector = (elParent) => {
          if (elParent.matches(selector) && processElement(elParent)) {
            return true;
          }
          const elements = elParent.querySelectorAll(selector);
          for (const el of elements) {
            if (processElement(el)) return true;
          }
          return false;
        };
        lookForSelector(document.documentElement);
  
        if (!isDone) {
          obs = new MutationObserver((mutationsList) => {
            for (const record of mutationsList) {
              if (record && record.addedNodes && record.addedNodes.length) {
                for (const addedNode of record.addedNodes) {
                  const el = addedNode.parentElement;
                  if (el && lookForSelector(el)) return true;
                }
              }
            }
          });
          obs.observe(document, {
            attributes: false,
            childList: true,
            subtree: true,
          });
        }
        return done;
      };
  
      function setCookie(key){
        document.cookie = `${key}=true; path=/`;
      }
  
  
      /* Variation Init */
      function init() {
        if (!window.cre48Observer) {
  
          //static cookie added 
         
          setCookie('cre-t-48-static-cookie');
          
  
          observeSelector('[data-selector="cre-ai-modal-header"]', () => {
            if (document.querySelector('[data-attribute="logged-out"]')) {
              if (window.location.pathname === "/" || window.location.pathname === "/detector-humanizer" || window.location.pathname === "/ai-humanizer") {
                if (document.querySelector('[data-selector="cre-ai-modal-header"]').closest(".flex.h-full.w-full.flex-col")) {
                  document.querySelector('[data-selector="cre-ai-modal-header"]').closest(".flex.h-full.w-full.flex-col").classList.add("cre-t-48-modal");
  
                  document.querySelector(".cre-t-48-modal") && document.querySelector(".cre-t-48-modal").parentElement.classList.add("cre-t-48-modal-parent");
  
                  if (!document.querySelector(".cre-t-48-modal-new-modal-header")) {
                    document.querySelector('[data-selector="cre-ai-modal-header"]').insertAdjacentHTML("beforebegin", creHeader);
                    document.querySelector('[data-cre-light-box="true"] ul').innerHTML = creList;
  
                    document.querySelector('html[lang="en"] body[data-attribute="logged-out"]  [data-cre-light-box="true"] .mx-auto   > p + p').textContent = "Start your FREE trial now!";
                    document.querySelector('html[lang="en"] body[data-attribute="logged-out"]  [data-cre-light-box="true"] > div div div > p.text-left.font-bold ').childNodes[0].textContent = "Humanize AI Text, and Bypass Content Detectors";
                  }
                  sessionStorage.setItem("cre-t-48-pricing-redirect", "true");
                }
              }
            }
          });
  
          document.addEventListener("click", function (e) {
            if(e.target.closest("[data-tooltip-id='login-tooltip']") || e.target.getAttribute("data-tooltip-id") === "login-tooltip"){
              if (document.querySelector('[data-attribute="logged-out"]')){
                if (window.location.pathname === "/" || window.location.pathname === "/detector-humanizer" || window.location.pathname === "/ai-humanizer"){
                  window.location.href = "/login-ft";
                  document.body.classList.add("cre-t-48-login-ft");
                }
              }
            }
          })
  
  
          window.cre48Observer = true;
        }
      }
  
      /* Initialise variation */
      helper.waitForElement("body", init, 50, 5000);
    } catch (e) {
      if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();