(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "cre-t-35";
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
  
        var helper = _$();
  
  
  
        function waitForTippy(trigger) {
            var interval = setInterval(function () {
                if (typeof window.tippy != "undefined") {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        };
  
  
        const priceGuaranteeHTML = `
        <div class="price-guarantee">
          <div class="guarantee-content">
            <div class="icon">
            <img class="cre-price-guarantee-badge" src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/screenshot-2025-04-16-at-113809am_67ff51198c811.png" alt="price-guarantee-badge" />

            </div>
            <div class="text-content">
              <h2>BEST PRICE GUARANTEE</h2>
              <p>Prices are regulated by law. You won't find a lower price anywhere else for any policy found through this page.</p>
            </div>
            <button class="close-button" aria-label="Close">
            <img class="X-cross-icon" src="https://cdn-3.convertexperiments.com/uf/10007679/10007714/vector-1_67ff659d1b9ae.png" alt="X-cross-icon" />

            </button>
          </div>
        </div>
      `;
      
     
      
  
  
        /* Variation Init */
        function init() {
  
            _$("body").addClass(variation_name);
            if (!document.querySelector(".price-guarantee")) {
                 document.body.insertAdjacentHTML('beforeend', priceGuaranteeHTML);
            }
     
     // Check if user has already closed the price guarantee box (session-based)
        if (sessionStorage.getItem('priceGuaranteeClosed') !== 'true') {
          document.querySelector('.price-guarantee').style.display = 'block';
        } else {
          document.querySelector('.price-guarantee').style.display = 'none';
        }
  
        // Add event listener to close button
        document.querySelector('.close-button').addEventListener('click', function () {
          document.querySelector('.price-guarantee').style.display = 'none';
          sessionStorage.setItem('priceGuaranteeClosed', 'true');
        });
  
         
        }
  
        /* Init variation */
        helper.waitForElement('body', init, 25, 25000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();