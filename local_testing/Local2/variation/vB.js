(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "TT-163";
        /* all Pure helper functions */
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                if (document && document.querySelector(selector)) {
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
            document.querySelector("body").classList.add(variation_name);
        }
        var test163Interval = setInterval(function () {
            waitForElement('body', init, 10, 15000);
        }, 10);
        setTimeout(function () {
            clearInterval(test163Interval);
        }, 5000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();