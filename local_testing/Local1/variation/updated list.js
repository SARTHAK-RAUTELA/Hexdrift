(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT-155";
        /* Helper function to extract numbers and services */
        function extractNumbersWithPlus(content) {
            const numberMatch = content.match(/(\d+)\+?/);
            return numberMatch ? numberMatch[0] : null;
        }

        function extractServices(content) {
            // Match "Find a" or "Find an" (optional), then extract the profession, ignoring "near you" or any location.
            const services = content.match(/(?:Find (?:a|an)\s+)?(.*?)(?:\s+near\s+\w+|\s+near\s+you|$)/i);
            return services && services[1] ? services[1].trim() : null;
        }

        /* all Pure helper functions */
        function waitForElement(selector, trigger) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, 50);
            setTimeout(function () {
                clearInterval(interval);
            }, 15000);
        }

        /* Variation Init */
        function init() {
            document.querySelector("body").classList.add(variation_name);

            // Removing "professional" from the first selector
            waitForElement('[class*="hero-header_filters"] [class*="Type_title3"]', function () {
                const elements = document.querySelectorAll('[class*="hero-header_filters"] [class*="Type_title3"]');

                elements.forEach(element => {
                    if (element.textContent.includes('professional')) {
                        element.textContent = element.textContent.replace('professional', '').trim();
                    }
                });
            });

            // Removing "professional" from the additional selector you mentioned
            waitForElement('[class*="hero-header_heroContainer"] [class*="hero-header_flexHeaderContentTitle"]', function () {
                const flexHeaderElements = document.querySelectorAll('[class*="hero-header_heroContainer"] [class*="hero-header_flexHeaderContentTitle"]');

                flexHeaderElements.forEach(element => {
                    if (element.textContent.includes('professional')) {
                        element.textContent = element.textContent.replace('professional', '').trim();
                    }
                });
            });

            // Additional text update
            waitForElement('[class*="hero-header_filters"] p', function () {
                document.querySelector('[class*="hero-header_filters"] p').innerHTML = "Confirm your location to find expert guidance in your area.";
            });
        }

        var test144Interval = setInterval(function () {
            waitForElement("body", init);
        }, 50);

        setTimeout(function () {
            clearInterval(test144Interval);
        }, 15000);

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();
