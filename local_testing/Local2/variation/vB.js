(function () {
    try {
        /* Main variables */
        var debug = 0;
        var variation_name = "TT-171"; // Variation name for tracking

        /* All Pure helper functions */

        // Function to wait for an element to appear in the DOM
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                // Check if the element exists and trigger callback
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger(); // Call the trigger function once the element is found
                }
            }, delayInterval); // Check every delayInterval milliseconds
            setTimeout(function () {
                clearInterval(interval); // Stop checking after delayTimeout
            }, delayTimeout);
        }



        /* Variation Init */
        function init() {
            // Add variation class to the body
            document.querySelector("body").classList.add(variation_name);


            waitForElement('.hero_header_parent .hero_header', function () {
                const desktopHeader = document.querySelector('.hero_header_parent .hero_header');
                if (desktopHeader) {
                    desktopHeader.innerHTML = 'Match with top pros to get your projects done';
                }
            }, 50, 15000);


            waitForElement('.hero_header_parent_mobile .hero_header_mobile', function () {
                const mobileHeader = document.querySelector('.hero_header_parent_mobile .hero_header_mobile');
                if (mobileHeader) {
                    mobileHeader.innerHTML = 'Match with top pros to get your projects done';
                }
            }, 50, 15000);



        }

        /* Initialise variation */
        function thumbtackTest144(list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect(); // Stop observing
                    clearInterval(test144Interval); // Clear interval
                    waitForElement("body", init, 50, 15000); // Initialize the variation after hydration
                    window.isHydrated = true;
                }
            });
        }

        // Check hydration status and initiate
        if (!window.isHydrated) {
            var test144Interval = setInterval(function () {
                waitForElement("body", init, 50, 15000); // Wait for body to load
            }, 50);
            setTimeout(function () {
                clearInterval(test144Interval); // Stop the interval after 3 seconds
            }, 3000);
            const observer = new PerformanceObserver(thumbtackTest144);
            observer.observe({ entryTypes: ["mark"] }); // Start observing performance marks
        } else {
            waitForElement("body", init, 50, 15000); // If already hydrated, initialize immediately
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name); // Log errors if debug is enabled
    }
})();
