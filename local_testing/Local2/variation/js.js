//Cro Mode (QA Test cookie)
(function () {

    // Utility Functions
    function setCookie(name, value, options = {}) {
        let {
            duration,
            domain,
            sameSite = 'Lax'
        } = options;
        domain = domain || window.location.hostname.split('.').slice(-2).join('.');
        let expires = '';
        if (duration) {
            let date = new Date();
            date.setTime(date.getTime() + (duration * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = `${name}=${value}; Path=/; Domain=${domain}; SameSite=${sameSite}${expires}`;
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Extract QA mode logic
    function enableQAMode(mode) {
        if (mode === 'qa') {
            console.log(`CRO Mode enabled: ${mode}`);
            setCookie('cro_mode', mode, {
                duration: 1
            });
        } else {
            //console.log('CRO Mode disabled');
            setCookie('cro_mode', '', {
                duration: -1
            });
        }
    }

    // Initialize CRO Mode
    function initCROMode() {
        const urlParams = new URLSearchParams(window.location.search);
        let mode = urlParams.get('cro_mode') || getCookie('cro_mode');
        if (mode === 'qa') {
            enableQAMode(mode);
            console.log("QA Mode Active");
            // Place any QA mode specific logic here
        } else {
            enableQAMode('');
        }
    }

    initCROMode();
})();
(function () {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "customgoals-SEA-205";

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
                waitForElement: function (
                    selector,
                    trigger,
                    delayInterval,
                    delayTimeout
                ) {
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
                live: function (selector, event, callback, context) {
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
                },
            };
            return function (selector) {
                return new bm(selector);
            };
        });

        var helper = _$();

        function DataLayerHelper(dataLayer, callback, useParent) {
            this.dataLayer = dataLayer;
            this.callback = callback;
            this.data = {};
            this.isProcessing = false;

            var self = this;

            var processQueue = function (args) {
                // Check if args is an instance of the arguments object
                if (typeof args === 'object' && 'length' in args) {
                    // Convert to an array
                    args = Array.prototype.slice.call(args);
                } else if (!Array.isArray(args)) {
                    console.error("Expected an array, but got:", args);
                    args = [args]; // Wrap in an array if not
                }

                // Proceed with processing the queue
                args.forEach(function (item) {
                    if (Array.isArray(item)) {
                        item.forEach(function (i) {
                            processItem(i);
                        });
                    } else if (typeof item === "function") {
                        item.call(self);
                    } else if (typeof item === "object") {
                        Object.keys(item).forEach(function (k) {
                            setValue(k, item[k], self.data);
                        });
                    }
                });
                self.callback(self.data, args);
            };



            var setValue = function (path, value, obj) {
                path.split(".").reduce(function (acc, key, i, arr) {
                    acc[key] = (i === arr.length - 1 ? value : acc[key] || {});
                    return acc[key];
                }, obj);
            };

            var originalPush = dataLayer.push;
            dataLayer.push = function () {
                var result = originalPush.apply(dataLayer, arguments);
                processQueue(arguments);
                return result;
            };

            processQueue(dataLayer);
        }


        var dataLayerACT = false
        function dataLayerListener(model, message) {
            var currentMessage = message[0];
            // Check if the add_to_cart event is available in dataLayer. Then redirect user to checkout page
            if (
                (currentMessage && currentMessage.event === "add-to-cart") ||
                (currentMessage && currentMessage["1"] === "add-to-cart")
            ) {
                console.log('product added to cart => ');
                dataLayerACT = true;
            }
        }
        function isAnyButtonSelected(selector) {
            var buttons = document.querySelectorAll(selector);
            for (var i = 0; i < buttons.length; i++) {
                if (buttons[i].classList.contains('selected')) {
                    return true;
                }
            }
            return false;
        }
        function eventHandlerT221() {
            //Select pill from both sets of options
            helper.live('.filter-wrapper .btn-group button', 'click', function () {
                setTimeout(function () {
                    var daysSelected = isAnyButtonSelected('#daysGroup button');
                    var parksSelected = isAnyButtonSelected('#parksGroup button');

                    if (daysSelected && parksSelected) {
                        window['optimizely'] = window['optimizely'] || [];
                        window['optimizely'].push({
                            type: "event",
                            eventName: "sea205__select_pill_from_both_sets_of_options",
                            tags: {
                                revenue: 0, // Optional in cents as integer (500 == $5.00)
                                value: 0.00 // Optional as float
                            }
                        });
                    }
                }, 200)



            })

            helper.live(".filter-wrapper .btn-group button", "click", function () {
                //  Copy displayed (no results)
                if ((document.querySelector('.results').textContent == 'Please select a park') || (document.querySelector('.results').textContent == 'Please select at least one park')) {
                    // console.log(' Copy displayed (no results)')
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205__copy_displayed__no_results_",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    })
                }
                // Product recommendations displayed
                setTimeout(function () {
                    let visibleCount = 0;
                    document.querySelectorAll('.product-tiles .product-placement-card__wrapper').forEach(function (card) {
                        if (window.getComputedStyle(card).display === 'block') {
                            card.setAttribute('data-index', visibleCount)
                            // for goal 
                            window['optimizely'] = window['optimizely'] || [];
                            window['optimizely'].push({
                                type: "event",
                                eventName: "sea205__product_recommendations_displayed",
                                tags: {
                                    revenue: 0, // Optional in cents as integer (500 == $5.00)
                                    value: 0.00 // Optional as float
                                }
                            });
                            // for dimension
                            window.optimizely = window.optimizely || [];
                            window.optimizely.push({
                                "type": "user",
                                "attributes": {
                                    "SEA205_Product_recommendations_displayed": "yes"
                                }
                            });
                            // console.log("Product recommendations displayed")
                            visibleCount++;
                            console.log('Product visible');
                        } else {
                            card.removeAttribute('data-index')
                        }
                    });
                }, 200)
            });
            //  Clicked on any recommended product
            helper.live('.product-tiles .product-placement-card__wrapper', "click", function () {
                // for goal
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    type: "event",
                    eventName: "sea205__clicked_on_any_recommended_product",
                    tags: {
                        revenue: 0, // Optional in cents as integer (500 == $5.00)
                        value: 0.00 // Optional as float
                    }
                });
                // for dimension
                window.optimizely = window.optimizely || [];
                window.optimizely.push({
                    "type": "user",
                    "attributes": {
                        "SEA205_Clicked_on_any_recommended_product": "yes"
                    }
                });
            })
            // Clicked on first recommended product
            helper.live('.product-tiles .product-placement-card__wrapper[data-index="0"]', "click", function () {
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    type: "event",
                    eventName: "sea205__clicked_on_first_recommended_product",
                    tags: {
                        revenue: 0, // Optional in cents as integer (500 == $5.00)
                        value: 0.00 // Optional as float
                    }
                });
            })
            // Clicked on second recommended product (if available)
            helper.live('.product-tiles .product-placement-card__wrapper[data-index="1"]', "click", function () {
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    type: "event",
                    eventName: "sea205__clicked_on_second_recommended_product",
                    tags: {
                        revenue: 0, // Optional in cents as integer (500 == $5.00)
                        value: 0.00 // Optional as float
                    }
                });
                // console.log("Clicked on second recommended product")
            })
            //Select pill from both sets of options
            helper.live(".btn-group button", "click", function (button) {
                if (document.querySelector('#daysGroup button').classList.contains('selected') && document.querySelector('#parksGroup button').classList.contains('selected')) {
                    console.log('Select pill from both sets of options')
                }
            })

            // Add-to-Cart from recommended product
            helper.live('.filter-container .product-placement-detail-modal__cart-button', "click", function () {

                if (dataLayerACT == true) {
                    // for goal
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205_add_to_cart_from_recommended_product_oct_11",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    });
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205_add_to_cart_from_all_products_on_tickets_page",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    });
                    // for dimension
                    window.optimizely = window.optimizely || [];
                    window.optimizely.push({
                        "type": "user",
                        "attributes": {
                            "SEA205_Add_to_Cart_from_recommended_product": "yes"
                        }
                    });

                    dataLayerACT = false;
                }

            });
            // Add-to-Cart from non recommended product
            helper.live('.product-catalog-card__order-button', "click", function () {
                if (dataLayerACT == true) {
                    // for goal
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205__add_to_cart_from_other_products_on_the_page_non",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    });
                    // any product of page
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205_add_to_cart_from_all_products_on_tickets_page",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    });
                    // for dimension
                    window.optimizely = window.optimizely || [];
                    window.optimizely.push({
                        "type": "user",
                        "attributes": {
                            "SEA205_Add_to_Cart_from_other_products_non_recommended_product": "yes"
                        }
                    });
                    dataLayerACT = false;
                }

            });
            // for any product inside the model
            helper.live('#-Accordion .product-placement-detail-modal__cart-button', "click", function () {
                if (dataLayerACT == true) {
                    // for goal
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205__add_to_cart_from_other_products_on_the_page_non",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    });
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205_add_to_cart_from_all_products_on_tickets_page",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    });
                    dataLayerACT = false;
                }
            });
            // anual pass click
            helper.live('#result a', "click", function (event) {
                if (event.target.innerText = "Annual Passes") {
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205_click_on_the_annual_passes_link_in_the_wizard_",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    });
                }
            });
        }

        /* Variation Init */
        function init() {
            helper.log('Log inside from init');
            _$('body').addClass(variation_name)
            //user Engage with Wizard
            helper.waitForElement('.filter-container', function () {
                const filterContainer = document.querySelector('.filter-container .full-width-callout');
                function logEngagement(event) {
                    // for goal 
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "sea205__engage_with_wizard",
                        tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                        }
                    });
                    // for dimension
                    window.optimizely = window.optimizely || [];
                    window.optimizely.push({
                        "type": "user",
                        "attributes": {
                            "SEA205_Engage_with_Wizard": "yes"
                        }
                    });
                }
                ['click', 'focus',].forEach(eventType => {
                    filterContainer.addEventListener(eventType, logEngagement, true);
                });
            }, 50, 15000)




            new DataLayerHelper(
                window.dataLayer,
                dataLayerListener.bind(this),
                true
            );
        }
        if (!window.goalclickAdded205) {
            window.goalclickAdded205 = true
            eventHandlerT221()
        }

        /* Initialise variation */
        helper.waitForElement("body", init, 50, 5000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
