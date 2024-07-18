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


function dataLayerlistioner(callback) {
    /**datalayer helper */
    var g = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/;

    function h(a) {
        return null == a ?
            String(a) :
            (a = g.exec(Object.prototype.toString.call(Object(a)))) ?
                a[1].toLowerCase() :
                'object';
    }

    function k(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b);
    }

    function m(a) {
        if (!a || 'object' != h(a) || a.nodeType || a == a.window) return !1;
        try {
            if (
                a.constructor &&
                !k(a, 'constructor') &&
                !k(a.constructor.prototype, 'isPrototypeOf')
            )
                return !1;
        } catch (b) {
            return !1;
        }
        for (var c in a);
        return void 0 === c || k(a, c);
    }
    /*
  Copyright 2012 Google Inc. All rights reserved. */
    function n(a, b, c) {
        this.b = a;
        this.f = b || function () { };
        this.d = !1;
        this.a = {};
        this.c = [];
        this.e = p(this);
        r(this, a, !c);
        var d = a.push,
            e = this;
        a.push = function () {
            var b = [].slice.call(arguments, 0),
                c = d.apply(a, b);
            r(e, b);
            return c;
        };
    }
    window.DataLayerHelper = n;
    n.prototype.get = function (a) {
        var b = this.a;
        a = a.split('.');
        for (var c = 0; c < a.length; c++) {
            if (void 0 === b[a[c]]) return;
            b = b[a[c]];
        }
        return b;
    };
    n.prototype.flatten = function () {
        this.b.splice(0, this.b.length);
        this.b[0] = {};
        s(this.a, this.b[0]);
    };

    function r(a, b, c) {
        for (a.c.push.apply(a.c, b); !1 === a.d && 0 < a.c.length;) {
            b = a.c.shift();
            if ('array' == h(b))
                a: {
                    var d = b,
                        e = a.a;
                    if ('string' == h(d[0])) {
                        for (
                            var f = d[0].split('.'), u = f.pop(), d = d.slice(1), l = 0; l < f.length; l++
                        ) {
                            if (void 0 === e[f[l]]) break a;
                            e = e[f[l]];
                        }
                        try {
                            e[u].apply(e, d);
                        } catch (v) { }
                    }
                }
            else if ('function' == typeof b)
                try {
                    b.call(a.e);
                } catch (w) { }
            else if (m(b))
                for (var q in b) s(t(q, b[q]), a.a);
            else continue;
            c || ((a.d = !0), a.f(a.a, b), (a.d = !1));
        }
    }

    function p(a) {
        return {
            set: function (b, c) {
                s(t(b, c), a.a);
            },
            get: function (b) {
                return a.get(b);
            }
        };
    }

    function t(a, b) {
        for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c;
    }

    function s(a, b) {
        for (var c in a)
            if (k(a, c)) {
                var d = a[c];
                'array' == h(d) ?
                    ('array' == h(b[c]) || (b[c] = []), s(d, b[c])) :
                    m(d) ?
                        (m(b[c]) || (b[c] = {}), s(d, b[c])) :
                        (b[c] = d);
            }
    }
    var feListener = function (model, message) {
        callback(model, message)
    }
    var DataLayerHelperMethod = setInterval(function () {
        if (typeof DataLayerHelper != 'undefined') {
            clearInterval(DataLayerHelperMethod);
            new DataLayerHelper(dataLayer, feListener, true);
        }
    }, 30);
    setTimeout(function () {
        clearInterval(DataLayerHelperMethod);
    }, 15000);
}

(function () {
    try {
        /**
         * setup Team
         */
        //console.log('Inside global script code main');
        // LIBRARY FUNCTIONS
        var lib = {
            live(selector, event, callback, context) {
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
                                    nodes = (node.parentNode || node.document).querySelectorAll(
                                        selector
                                    ),
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
            getCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0)
                        return c.substring(nameEQ.length, c.length);
                }
                return null;
            },
            waitForElement(selector, trigger, delayInterval, delayTimeout) {
                var interval = setInterval(function () {
                    if (
                        document &&
                        document.querySelector(selector) &&
                        document.querySelectorAll(selector).length > 0
                    ) {
                        clearInterval(interval);
                        trigger();
                    }
                }, delayInterval);
                setTimeout(function () {
                    clearInterval(interval);
                }, delayTimeout);
            },
            /**
             * Data layer helper
             */
            onDataHelperLoad(callback) {
                var waitForDatalayer = setInterval(function () {
                    if (window && window.dataLayer) {
                        clearInterval(waitForDatalayer);
                        callback();
                    }
                }, 50);
                setTimeout(function () {
                    clearInterval(waitForDatalayer);
                }, 15000);
            },

            waitForPageLoad(trigger, delayInterval, delayTimeout) {
                var interval = setInterval(function () {
                    if (document.readyState === "complete") {
                        clearInterval(interval);
                        trigger();
                    }
                }, delayInterval);
                setTimeout(function () {
                    clearInterval(interval);
                }, delayTimeout);
            }


        };

        /* push code revenue manually*/
        var recordTransaction = {
            transactionEvenListner() {
                if (!window.transactionEvenListnerActivated) {
                    window.transactionEvenListnerActivated = true;
                    dataLayerlistioner(function (model, message) {
                        if ((message.category === "transaction" || message.category === "Transaction" || message.category === "TRANSACTIION") && (message.action === "success" || message.action === "Success" || message.action === "SUCCESS")) {
                            setTimeout(() => {
                                var revenue = message.ecommerce.purchase.actionField.revenue;
                                var products_cnt = message.ecommerce.purchase.products.length;
                                window._conv_q = window._conv_q || [];
                                _conv_q.push(["pushRevenue", revenue, products_cnt, "100031748"]);
                            }, 500);

                        }
                    })
                }
            }
        };
        if (window.location.href.indexOf('checkout/finalise.php') != -1) {
            recordTransaction.transactionEvenListner();
        }

        var experiments = {
            // Experiments

            Mag028() {
                if (window.location.href.includes("https://www.mymagazine.co.uk/") && window.location.href.includes("/mysubscriptionsDashboard")) {
                    document.addEventListener("DOMContentLoaded", function () {
                        var image = document.querySelector('body .headerImage > img[alt="The Week Logo"]');
                        if (!image) {
                            lib.waitForElement('[id^="viewRenewalOffrBtn"]', function () {

                                window.Mag028 = 1;
                                window._conv_q = window._conv_q || [];
                                window._conv_q.push(["executeExperiment", "100043047"]);


                                console.log("Mag_55")
                            }, 50, 15000);


                        }
                    });




                }
            },
            Mag050() {
                if (window.location.href.includes("https://www.mymagazine.co.uk/") && window.location.href.includes("/mysubscriptionsDashboard")) {
                    //    console.log('dom not Loaded');

                    lib.waitForPageLoad(function () {
                        var image = document.querySelector('body .headerImage > img[alt="The Week Logo"]');
                        if (!image) {
                            // console.log('inside');
                            lib.waitForElement('#renewalOffersSection', function () {

                                window.Mag050 = 1;
                                window._conv_q = window._conv_q || [];

                                window._conv_q.push(["executeExperiment", "100043947"]);

                                //  console.log("Mag_50")
                            }, 50, 15000);
                        }
                    }, 50, 15000);
                }
            },

            Mag043() {
                if (window.location.href.includes("https://www.magazinesdirect.com/") && !window.location.href.includes("https://checkout.magazinesdirect.com/checkout") && !window.location.href.includes("https://www.magazinesdirect.com/your-basket/")) {
                    setTimeout(function () {
                        if (Number(document.querySelector(".your-basket .basket-count").innerHTML) > 0) {
                            console.log("test 43 global")
                            window.Mag043 = 1;
                            window._conv_q = window._conv_q || [];
                            window._conv_q.push(["executeExperiment", "100043223"]);
                            // console.log("Experiment 43 added---------------------");
                        }
                    }, 2000)
                }
            },
            Mag052() {
                if (window.location.href.includes("https://www.magazinesdirect.com/") && !window.location.href.includes("https://checkout.magazinesdirect.com/checkout")) {
                    lib.waitForElement("#navbar-toggler", function () {
                        lib.live("#navbar-toggler", "click", function () {
                            setTimeout(function () {
                                if (!window.mag52_activated) {
                                    window.Mag052 = 1;
                                    window.mag52_activated = true;
                                    window._conv_q = window._conv_q || [];
                                    window._conv_q.push(["executeExperiment", "100043948"]);
                                    // console.log("Experiment 52 added---------------------");
                                }
                            }, 100);
                        })
                    }, 50, 15000)
                }
            },

            Mag042() {
                if (window.location.href.includes("https://www.magazinesdirect.com/") && !window.location.href.includes("https://checkout.magazinesdirect.com/checkout")) {
                    lib.waitForElement(
                        ".your-basket .basket-count",
                        function () {
                            fetch("https://www.magazinesdirect.com/your-basket/index.tjson")
                                .then((response) => {
                                    if (!response.ok) {
                                        throw new Error("Network response was not ok");
                                    }
                                    return response.json();
                                })
                                .then((data) => {
                                    // Do something with the data
                                    if (data.itemsCount > 0) {
                                        console.log("test 42 global");
                                        window.Mag042 = 1;
                                        window._conv_q = window._conv_q || [];
                                        window._conv_q.push(["executeExperiment", "100043997"]);
                                        window._conv_q.push(["executeExperiment", "100044103"]);
                                        window._conv_q.push(["executeExperiment", "100044104"]);
                                        // console.log("Experiment 42 added---------------------");
                                    }
                                })
                                .catch((error) => {
                                    console.error("There was a problem with the fetch operation:", error);
                                });
                        },
                        50,
                        15000
                    );
                }
            },

            Mag060(){
             if(window.location.href.includes("https://www.magazinesdirect.com/") && !window.location.href.includes("https://checkout.magazinesdirect.com/checkout")  ){
                if(window.location.href.includes('your-basket')){
                    lib.waitForElement(".checkoutButtons .paypalForm button", function () {
                                if (!window.mag060_activated) {
                                    window.Mag060 = 1;
                                    window.mag060_activated = true;
                                    window._conv_q = window._conv_q || [];
                                    // convert experiment id
                                    window._conv_q.push(["executeExperiment", "100044125"]);
                                    // console.log("Experiment 60 added---------------------");
                                }
                            
                        
                    }, 50, 15000)
                }

             }
            }


        };

        //  activate test 34
        experiments.Mag028();
        experiments.Mag050();
        experiments.Mag043();
        experiments.Mag052();
        experiments.Mag042();
        experiments.Mag060();



    } catch (e) {
        if (debug) console.log(e, "Error in Global JavaScript");
    }
})();













(window.Mag060 == 1)