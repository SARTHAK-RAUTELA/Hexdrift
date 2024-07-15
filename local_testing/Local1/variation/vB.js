

(function () {
    try {
        /**
         * setup Team
         */
        //console.log('Inside global script code main');
        // LIBRARY FUNCTIONS
        var lib = {
            live(selector, event, callback, context) {
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
                                    nodes = (node.parentNode || node.document).querySelectorAll(
                                        selector
                                    ),
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
            },
            waitForElement(selector, trigger, delayInterval, delayTimeout) {
                var interval = setInterval(function () {
                    if (
                        document &&
                        document.querySelector(selector) &&
                        document.querySelectorAll(selector).length > 0
                    ) {
                        clearInterval(interval);
                        trigger();
                    }
                }, delayInterval);
                setTimeout(function () {
                    clearInterval(interval);
                }, delayTimeout);
            },
            



        };

       
        

        var experiments = {
            // Experiments

            Add_to_cart_custom_trigger() {
                if (window.location.href.includes("https://www.magazinesdirect.com")) {
                    
                            lib.waitForElement('.cart-section-container .cart-section #addtobasket, body .cre-rooling-addBasket button.cre-rooling-addBasket-btnBtn', function () {

                                lib.live(".cart-section-container .cart-section #addtobasket, body .cre-rooling-addBasket button.cre-rooling-addBasket-btnBtn", "click", function () {

                                    window._conv_q = window._conv_q || [];
                                    _conv_q.push(["triggerConversion", "100033233"]);
                                    console.log("ADD to cart triggred")

                            })

                               
                            }, 50, 15000);
                        }
                    
            },

            


        };

       
        experiments.Add_to_cart_custom_trigger();



    } catch (e) {
        if (debug) console.log(e, "Error in Global JavaScript");
    }
})();