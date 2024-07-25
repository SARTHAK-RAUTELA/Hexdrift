//custom code for optimizely callback

function trigger(activate, options) {

    (function () {
        try {

            // Wait for Element
            function waitForElement(selector, trigger, delayInterval, delayTimeout) {
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
            // Live click event
            function live(selector, event, callback, context) {
                /****Helper Functions****/
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
                        while (el && el.matches && el !== context && !(found = el.matches(selector)))
                            el = el.parentElement;
                        if (found) callback.call(el, e);
                    });
                }
                live(selector, event, callback, context);
            }

            var pageURL = window.location.href;
            var pathname = window.location.pathname;

            // Activate cart
            function activateCurrentExp() {

                if (pageURL.includes("https://seaworld.com/") && ((pathname == '/orlando/tickets/') || (pathname == '/orlando/tickets/fun-card/') || (pathname == '/orlando/annual-pass/') || (pathname == '/orlando/upgrades/') || (pathname == '/orlando/upgrades/rides-and-shows/') || (pathname == '/orlando/upgrades/animal-experiences/') || (pathname == '/orlando/upgrades/parking-and-rentals/'))) {
                    console.log("button clicked, ")
                    if (!window.isOptimizelyExpTriggered) {

                        window.isOptimizelyExpTriggered = true;
                        waitForElement(".site-header__checkout .site-header__checkout-badge", activate);

                        console.log("Experiment202_activated")
                    }
                }

            }

            waitForElement(".site-header__checkout .site-header__checkout-badge", () => {
                
                activate();
                console.log("Experiment202_activated")
            });

            //the below code is for the mini cart click
            if (window.innerWidth < 767) {
                live(".modal__footer a[class*=button],.product-catalog-card__order-button,a[class*=product-listing__button]", "touchend", activateCurrentExp);
            } else {
                live(".modal__footer a[class*=button],.product-catalog-card__order-button,a[class*=product-listing__button]", "click", activateCurrentExp);
            }

        } catch (e) {
            console.log(e, "Variation201");
        }
    })();

}

