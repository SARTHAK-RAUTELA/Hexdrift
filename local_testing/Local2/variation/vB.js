(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT-165";
        /* all Pure helper functions */
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
    
        /* Variation Init */
        function init() {
            document.addEventListener('click', function(event) {
                const button = event.target.closest('[data-test="pro-list-result"] button');
                if (button) {
                    event.preventDefault(); // Default action rokna
                    
                    const targetElement = document.querySelector('[class*="hero-header-filters_wrap"] .mt3 [data-test="hero-filters-cta"]');
                    if (targetElement) {
                        targetElement.click(); // Target element par click trigger karna
                    }
                }
            });
        }
        /* Initialise variation */
        function thumbtackTest165(list, observer) {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === "mark" && entry.name === "afterHydrate") {
                    observer.disconnect();
                    clearInterval(test144Interval);
                    waitForElement('body', init, 500, 4000);
                    window.isHydrated = true;
                }
            });
        }
        if (!window.isHydrated) {
            var test144Interval = setInterval(function () {
                waitForElement('body', init, 500, 4000);
            }, 700);
            setTimeout(function () {
                clearInterval(test144Interval);
            }, 3000);
            var observer = new PerformanceObserver(thumbtackTest165);
            observer.observe({
                entryTypes: ["mark"]
            });
        } else {
            waitForElement('body', init, 500, 4000);
        }
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
  })();