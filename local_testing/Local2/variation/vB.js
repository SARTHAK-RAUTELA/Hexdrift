(function () {
    try {
        var debug = 1;

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

        live(".add-to-cart-button.buy-now-btn", 'click', function () {
            const quantites = document.querySelectorAll(".product-details-section .product-option .product-option-text + .quantity-selection .quantity-number");

            for (let quantity of quantites) {
                let value = parseInt(quantity.value) || 0;
                if (value > 0) {
                    // fire goal
                    window._conv_q = window._conv_q || [];
                    _conv_q.push(["triggerConversion", "100036329"]);
                    return;
                }
            }
        })
    } catch (e) {
        if (debug) console.log(e, "Error in Global JavaScript");
    }
})();