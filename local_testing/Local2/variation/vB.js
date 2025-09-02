(function() {
    try {
        /* main variables */
        var debug = 1;
        var variation_name = "swiftGoals_60";

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
                (function(ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function(selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function(e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
        }

        function waitForElement(selector, trigger) {
            var interval = setInterval(function() {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function() {
                clearInterval(interval);
            }, 15000);
        }

        function pushConvertGoal_60(goalId) {
            window._conv_q = window._conv_q || [];
            _conv_q.push(["triggerConversion", goalId]);
        }

        function CustomGoals_60() {
            // Outbound Partner Clicks (all outbound clicks on all partners)
            live("body .rt-aff-link", "mousedown", function() {
            //    console.log("Outbound Partner Clicks (all outbound clicks on all partners)  ");
                pushConvertGoal_60("100036557");
            });

            // Outbound Partner Clicks - Liberty Mutual - Both Listings
            live('[data-unique="outbound-partner-clicks-Liberty-Mutual-Listing-Only"] a.rt-aff-link', "mousedown", function() {
            //    console.log("Outbound Partner Clicks - Liberty Mutual - Both Listings");
                pushConvertGoal_60("100036554");
            });


            // Outbound Partner Clicks  - Lemonade
            live('[data-unique="outbound-partner-clicks-Lemonade-Listing-Only"] a.rt-aff-link', "mousedown", function() {
            //    console.log("Outbound Partner Clicks  Lemonade");
                pushConvertGoal_60("100036555");
            });


            // Outbound Partner Clicks - State Farm
            live('[data-unique="outbound-partner-clicks-State-Farm-Listing-Only"] a.rt-aff-link', "mousedown", function() {
            //    console.log("Outbound Partner Clicks - State Farm");
                pushConvertGoal_60("100036556");
            });

        


        }

        waitForElement("body", function() {
        //    console.log("body found goals added");
            if (!window.TheSwiftestGoalsAdded_60) {
                CustomGoals_60();
                window.TheSwiftestGoalsAdded_60 = true;
            }
        });
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();