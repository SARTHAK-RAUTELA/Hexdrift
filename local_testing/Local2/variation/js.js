(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "Swiftest_05";
  
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
  
        function debounce(func, timeout = 300) {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                }, timeout);
            };
        }
  
        function scrollToEl(el) {
            var scrollHeight = document.querySelector(el).getBoundingClientRect().top;
            var top = scrollHeight + 100;
            scrollTo({ top: top, behavior: 'smooth' })
        }
  
        function checkElemntPosition() {
            var element = document.querySelector(".inside-article .entry-content>div:last-of-type")
            if (element) {
  
                if (element.getClientRects()[0].top <= 70) {
                    document.querySelector("body").classList.add("cre-t-05-showStickyButton")
                } else {
                    document.querySelector("body.cre-t-05-showStickyButton")?.classList.remove("cre-t-05-showStickyButton")
                }
            }
        }
  
        var swiftest_swf05 = `
        <div class="swiftest_05_sticky_footer" style="display:none;">
            <button type='button' class="Sticky_cta">Back Up to Plans</button>
        </div>`;
  
        function eventHandler() {
  
            document.addEventListener("scroll", function () {
                var checkForSticky = debounce(checkElemntPosition)
                checkForSticky()
            })
  
            live(".swiftest_05_sticky_footer .Sticky_cta", "click", function () {
                scrollToEl('.gb-container [data-before="1"]');
            })
  
        }
  
        /* Variation Init */
        function init() {
          if(window.innerWidth <=768){
              document.querySelector("body").classList.add(variation_name);
            if (!document.querySelector(".swiftest_05_sticky_footer")) {
                document.querySelector("body").insertAdjacentHTML("beforeend", swiftest_swf05)
            }
  
            waitForElement(".swiftest_05_sticky_footer", function () {
                checkElemntPosition()
            })
  
            if (!window.cre_t_05_eventHandler) {
                eventHandler()
                window.cre_t_05_eventHandler = true;
            }
          }
            
  
        }
        
        /* Initialise variation */
        waitForElement("body", init)
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();

