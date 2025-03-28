(function () {
    try {
        /* Main variables */
        var debug = 0;
        var variation_name = "TT-168"; // Variation name for tracking

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

        // Function to add event listeners that work across all browsers (including IE 8)
        function live(selector, event, callback, context) {
            // Helper function to add event listeners for IE 8 and other browsers
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler); // IE 8
                else el.addEventListener(type, handler); // Other browsers
            }

            // Polyfill for matches method to ensure it works across browsers
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

            // Live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found,
                        el = e.target || e.srcElement;
                    // Loop through parent elements to find a match
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e); // Call the callback if a match is found
                });
            }
            live(selector, event, callback, context); // Bind the event
        }
        
        /* Variation Init */
        function init() {
            // Add variation class to the body
            document.querySelector("body").classList.add(variation_name);

            // Check if text content includes 'review' and add class to parent
            document.querySelectorAll('.mb5').forEach(parent => {
                const titleElement = parent.querySelector('[class*="Type_title3"]');
                if (titleElement && titleElement.textContent.toLowerCase().includes('review')) {
                    parent.classList.add('cre_reviwe'); // Add class for 'review'
                }
            });

            // Move the 'review' section after the hero header
            document.querySelectorAll('.cre_reviwe').forEach(section => {
                const target = document.querySelector('[class*="hero-header_root"]');
                if (target && section) {
                    target.after(section); // Append the section after hero header
                }
            });
        
            // Get source and target elements
            let sourceHeading = document.querySelector("#pro_list_header span");
            let targetHeading = document.querySelector(".cre_reviwe [class*='Type_title3']");
        
            // Wait for the element to appear and modify the text
            waitForElement('#pro_list_header span', function() {
                if (window.location.href.includes("www.thumbtack.com/k")) {
                    if (sourceHeading && targetHeading) {
                        let text = sourceHeading.childNodes[0].textContent.trim().toLowerCase();
                        
                        // Ensure 'on Thumbtack' is not already present before modifying
                        if (!targetHeading.textContent.includes("on Thumbtack")) {
                            let newText;
            
                            // Check if "top X" pattern exists
                            if (/^top \d+\s+/.test(text)) {
                                newText = text.replace(/^top \d+\s+/, "Reviews for ");
                            } else {
                                newText = "Reviews for " + text;
                            }
            
                            targetHeading.textContent = newText + " on Thumbtack";
                        }
                    }
                }
            }, 50, 10000);
            

            // Add "on Thumbtack" for specific URL
            if (window.location.href.includes("www.thumbtack.com/ga")) {
                let targetHeading = document.querySelector(".cre_reviwe [class*='Type_title3']");
                if (targetHeading && !targetHeading.textContent.includes("on Thumbtack")) {
                    targetHeading.textContent += " on Thumbtack"; // Append "on Thumbtack"
                }
            }

            // Hide review section if less than 2 carousel items are found
            let carouselItems = document.querySelectorAll('[class*="carousel_carousel"] [class*="carousel_row"] > div');
            let creReview = document.querySelector(".cre_reviwe");
            if (creReview && carouselItems.length < 2) {
                creReview.style.display = "none"; // Inline hide the review section
            }
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