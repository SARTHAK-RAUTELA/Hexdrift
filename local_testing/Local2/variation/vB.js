(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT-157";
        /* Helper function to wait for an element */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector) && document.querySelectorAll(selector).length > 0) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }
        /* Live event listener helper */
        function live(selector, event, callback, context) {
            context = context || document;
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            Element.prototype.matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            addEvent(context, event, function (e) {
                var el = e.target || e.srcElement;
                while (el && el !== context && !(el.matches && el.matches(selector))) {
                    el = el.parentElement;
                }
                if (el && el.matches(selector)) {
                    callback.call(el, e);
                }
            });
        }
        /* Filters */
        var filter = `
            <div class="tt_filter">
                <ul>
                    <li class="active">Recommended</li>
                    <li>Most reviewed</li>
                    <li>Highest ratings</li>
                </ul>
            </div>
        `;
        /* Recommended filter function */
        function recommended() {
            document.querySelectorAll('[class*="pro-list-results-front-door"] [class*="pro-list-results-front-door"]:first-child > div.ph3 > div').forEach(function (card) {
                card.classList.forEach(function (className) {
                    if (className.startsWith('order-')) {
                        card.classList.remove(className);
                    }
                });
            });
        }
        /* Most Reviewed filter function */
        function mostreview() {
            function getUndefinedPNumber(card) {
                const undefinedP = card.querySelector('[class*="hideAtOrBelow"] .undefined > p:last-child');
                if (undefinedP) {
                    const textContent = undefinedP.textContent.trim();
                    const reviewNumber = textContent.match(/\d+(\.\d+)?/);
                    if (reviewNumber) {
                        return parseFloat(reviewNumber[0]);
                    }
                }
                return null;
            }
            let cardsArray = [];
            document.querySelectorAll('[class*="pro-list-results-front-door"] [class*="pro-list-results-front-door"]:first-child > div.ph3 > div').forEach(function (card) {
                const reviewNumber = getUndefinedPNumber(card);
                if (reviewNumber) {
                    cardsArray.push({ card, reviewNumber });
                }
            });
            cardsArray.sort(function (a, b) {
                return b.reviewNumber - a.reviewNumber;
            });
            cardsArray.forEach(function (item, index) {
                item.card.classList.forEach(className => {
                    if (className.startsWith('order-')) {
                        item.card.classList.remove(className);
                    }
                });
                item.card.classList.add(`order-${index + 1}`);
            });
        }
        /* Highest Ratings filter function */
        function mostrating() {
            // Function to extract the rating number from [class*="hideAtOrBelow"] .green p
            function getGreenPNumber(card) {
                const greenP = card.querySelector('[class*="hideAtOrBelow"] .green p');
                if (greenP) {
                    const textContent = greenP.textContent.trim();
                    const ratingNumber = textContent.match(/\d+(\.\d+)?/); // Match only the number
                    if (ratingNumber) {
                        return parseFloat(ratingNumber[0]); // Convert the number to float
                    }
                }
                return null; // Return null if no number is found
            }

            // Function to extract the review count from [class*="hideAtOrBelow"] .undefined > p:last-child
            function getReviewCount(card) {
                const undefinedP = card.querySelector('[class*="hideAtOrBelow"] .undefined > p:last-child');
                if (undefinedP) {
                    const textContent = undefinedP.textContent.trim();
                    const reviewNumber = textContent.match(/\d+/); // Match only the number (integer reviews)
                    if (reviewNumber) {
                        return parseInt(reviewNumber[0], 10); // Convert the number to integer
                    }
                }
                return 0; // Return 0 if no review count is found
            }

            // Create an array to store the cards with their rating numbers and review count
            let cardsArray = [];

            document.querySelectorAll('[class*="pro-list-results-front-door"] > div > div > div.ph3 > div').forEach(function (card, index) {
                console.log(`Processing card ${index + 1}`);

                // Extract the rating and review count
                const ratingNumber = getGreenPNumber(card);
                const reviewCount = getReviewCount(card);

                // If a rating number is found, store it in the array with the card and review count
                if (ratingNumber !== null) {
                    cardsArray.push({ card, ratingNumber, reviewCount });
                }
            });

            // Sort the cards based on the rating number first, and if ratings are equal, sort by the review count
            cardsArray.sort(function (a, b) {
                // First, compare the rating numbers (descending order)
                if (b.ratingNumber !== a.ratingNumber) {
                    return b.ratingNumber - a.ratingNumber;
                }
                // If the ratings are the same, compare the review counts (also descending order)
                return b.reviewCount - a.reviewCount;
            });

            // Add a CSS class to each card based on its position in the sorted array
            cardsArray.forEach(function (item, index) {
                // Remove any existing order-related class to avoid conflicts on reordering
                item.card.classList.forEach(className => {
                    if (className.startsWith('order-')) {
                        item.card.classList.remove(className); // Remove classes like order-1, order-2, etc.
                    }
                });

                // Add the new order class based on the index (1 for highest priority, 2 for second, etc.)
                item.card.classList.add(`order-${index + 1}`);
            });


        }


        /* Initialize the variation */
        function init() {
            document.querySelector("body").classList.add(variation_name);
            if (document.querySelectorAll('[class*="pro-list-results-front-door"] [class*="pro-list-results-front-door"]>div > div').length > 3) {
                if (document.querySelector('#pro_list_header + div')) {
                    if (!document.querySelector(".tt_filter")) {
                        document.querySelector('#pro_list_header + div').insertAdjacentHTML('afterend', filter);
                    }
                }
            }
            function setActiveClass(element) {
                // Remove 'active' class from all <li> elements
                document.querySelectorAll(".tt_filter ul li").forEach(function (li) {
                    li.classList.remove("active");
                });
                // Add 'active' class to the clicked <li>
                element.classList.add("active");
            }
            function addclassonboyd() {
                document.querySelector("body").classList.add('orderitem');
            }
            function recommendedclass() {
                document.querySelector("body").classList.remove('orderitem');
            }

            live(".tt_filter ul li:first-child", "click", function () {
                recommended();
                setActiveClass(this);
                recommendedclass()
            });

            live(".tt_filter ul li:nth-child(2)", "click", function () {
                mostreview();
                setActiveClass(this);
                addclassonboyd()
            });

            live(".tt_filter ul li:nth-child(3)", "click", function () {
                mostrating();
                setActiveClass(this);
                addclassonboyd()
            });

        }
        /* Initialize the script after hydration */
        function thumbtackTest144(list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    clearInterval(test144Interval);
                    waitForElement("body", init, 50, 15000);
                    window.isHydrated = true;
                }
            });
        }
        if (!window.isHydrated) {
            var test144Interval = setInterval(function () {
                waitForElement("body", init, 50, 15000);
            }, 50);
            setTimeout(function () {
                clearInterval(test144Interval);
            }, 3000);
            const observer = new PerformanceObserver(thumbtackTest144);
            observer.observe({ entryTypes: ["mark"] });
        } else {
            waitForElement("body", init, 50, 15000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();