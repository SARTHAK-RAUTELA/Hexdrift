(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

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
                    console && console.log(this);
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
            };
            return function (selector) {
                return new bm(selector);
            };
        });


        var listli = '' +
            '  Home < div class = "homepage-hero_textCarousel__03Wd1" > < ul class = "homepage-hero_scroll__mBWrd" > < li > improvement, < /li><li> repair,</li > < li > inspection, < /li><li> cleaning,</li > < li > improvement, < /li></ul > < /div><br>made easy.';

        var helper = _$();
        /* Variation Init */
        function init() {
            document.querySelector('[class*="homepage-hero_mainSection"] [class*=homepage-hero_heavy]').innerHTML = listli;
            console.log('init');
        }

        /* Initialise variation */
        helper.waitForElement("body", init, 50, 5000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();