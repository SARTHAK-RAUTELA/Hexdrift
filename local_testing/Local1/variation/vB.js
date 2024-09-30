(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TTValue-152";
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
        function live(selector, event, callback, context) {
          // helper for enabling IE 8 event bindings
          function addEvent(el, type, handler) {
            if (el.attachEvent) el.attachEvent("on" + type, handler);
            else el.addEventListener(type, handler);
          }
          // matches polyfill
          this &&
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
        var thumbtechservices = `
              <h1 class="Tt_heading">
              <svg class="blue db" width="36" height="36" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0"></path><path fill="#FFF" d="M8.973 10.385a3.71 3.71 0 0 1-.564 1.957L8 13l-.409-.658a3.704 3.704 0 0 1-.564-1.957v-3.14C7.51 6.62 8.231 6.4 8.973 6.4v3.985zM4 5.69V4h8v1.69H4z"></path></svg>
              Your partner in <br>
              <div class="tt_homepage-hero_text">
                  <ul class="tt_homepage-hero_scroll">
                    <li>caring for your home.</li>
                    <li>understanding your home.</li>
                    <li>maintaining your home.</li>
                    <li>improving your home.</li>
                    <li>caring for your home.</li>
                  </ul>
                </div>
              </h1>
        `;
       
        /* Variation Init */
        function init() {
            document.querySelector("body").classList.add(variation_name);
            document.querySelector("body").classList.add('showheading'); 
           
            if (document.querySelector('[class*="pre-line homepage-hero_heavy"]')) {
              if (!document.querySelector(".Tt_heading")) {
                  document.querySelector('[class*="pre-line homepage-hero_heavy"]').insertAdjacentHTML('afterend', thumbtechservices);
              }
          } 
           
           
          
         
        }
        live('[class*="homepage-hero_overflowOnTallScreens"]  .mb3 > div:first-child', "click", function () {
          document.body.classList.add('showheading'); 
        });
        
        live('[class*="homepage-hero_overflowOnTallScreens"]  .mb3 > div:last-child', "click", function () {
         
          document.body.classList.remove('showheading'); 
        });
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