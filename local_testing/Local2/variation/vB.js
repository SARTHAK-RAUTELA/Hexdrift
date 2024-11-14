(function() {
    var currentPageLoc = window.location.href;

    /**
     * =================================================================
     * Library Functions
     * =================================================================
     */

    /**
     * Waits for the specified element to be present in the DOM and then triggers the specified function.
     * @param {string} selector - The CSS selector of the element to wait for.
     * @param {function} trigger - The function to trigger once the element is found.
     */
    function waitForElement(selector, trigger) {
        var interval = setInterval(function() {
            if (document.querySelector(selector)) {
                clearInterval(interval);
                trigger();
            }
        }, 50);
        setTimeout(function() {
            clearInterval(interval);
        }, 15000);
    }

    /**
     * Attaches an event listener to elements that match the given selector, even for dynamically added elements.
     * @param {string} selector - The CSS selector to match elements.
     * @param {string} event - The event type (e.g., 'click').
     * @param {function} callback - The function to call when the event is triggered.
     * @param {Element} [context] - The context within which to search for matching elements. Defaults to the entire document.
     */
    function live(selector, event, callback, context) {
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
                while (el && el.matches && el !== context && !(found = el.matches(selector)))
                    el = el.parentElement;
                if (found) callback.call(el, e);
            });
        }
        live(selector, event, callback, context);
    }

    /**
     * Sends a Google Analytics event.
     * @param {string} eventCategory - The category of the event.
     * @param {string} eventAction - The action associated with the event.
     * @param {string} eventLabel - The label associated with the event.
     */
    function trackGAEvent(eventCategory, eventAction, eventLabel) {
        if ("ga" in window && "getAll" in window.ga) {
            ga.getAll()[0].send("event", {
                eventCategory: eventCategory,
                eventAction: eventAction,
                eventLabel: eventLabel,
            });
        }
    }

    /**
     * Executes a callback once the dataLayer is loaded.
     * @param {function} callback - The function to execute when the dataLayer is loaded.
     */
    function onDataHelperLoad(callback) {
        var waitForDatalayer = setInterval(function() {
            if (window && window.dataLayer) {
                clearInterval(waitForDatalayer);
                callback();
            }
        }, 50);
        setTimeout(function() {
            clearInterval(waitForDatalayer);
        }, 15000);
    }

    /**datalayer helper */
    var g = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/;

    function h(a) {
        return null == a ?
            String(a) :
            (a = g.exec(Object.prototype.toString.call(Object(a)))) ?
            a[1].toLowerCase() :
            "object";
    }

    function k(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b);
    }

    function m(a) {
        if (!a || "object" != h(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !k(a, "constructor") && !k(a.constructor.prototype, "isPrototypeOf"))
                return !1;
        } catch (b) {
            return !1;
        }
        for (var c in a);
        return void 0 === c || k(a, c);
    }
    /* Copyright 2012 Google Inc. All rights reserved. */
    function n(a, b, c) {
        this.b = a;
        this.f = b || function() {};
        this.d = !1;
        this.a = {};
        this.c = [];
        this.e = p(this);
        r(this, a, !c);
        var d = a.push,
            e = this;
        a.push = function() {
            var b = [].slice.call(arguments, 0),
                c = d.apply(a, b);
            r(e, b);
            return c;
        };
    }
    window.DataLayerHelper = n;
    n.prototype.get = function(a) {
        var b = this.a;
        a = a.split(".");
        for (var c = 0; c < a.length; c++) {
            if (void 0 === b[a[c]]) return;
            b = b[a[c]];
        }
        return b;
    };
    n.prototype.flatten = function() {
        this.b.splice(0, this.b.length);
        this.b[0] = {};
        s(this.a, this.b[0]);
    };

    function r(a, b, c) {
        for (a.c.push.apply(a.c, b); !1 === a.d && 0 < a.c.length;) {
            b = a.c.shift();
            if ("array" == h(b))
                a: {
                    var d = b,
                        e = a.a;
                    if ("string" == h(d[0])) {
                        for (var f = d[0].split("."), u = f.pop(), d = d.slice(1), l = 0; l < f.length; l++) {
                            if (void 0 === e[f[l]]) break a;
                            e = e[f[l]];
                        }
                        try {
                            e[u].apply(e, d);
                        } catch (v) {}
                    }
                }
            else if ("function" == typeof b)
                try {
                    b.call(a.e);
                } catch (w) {}
            else if (m(b))
                for (var q in b) s(t(q, b[q]), a.a);
            else continue;
            c || ((a.d = !0), a.f(a.a, b), (a.d = !1));
        }
    }

    function p(a) {
        return {
            set: function(b, c) {
                s(t(b, c), a.a);
            },
            get: function(b) {
                return a.get(b);
            },
        };
    }

    function t(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c;
    }

    function s(a, b) {
        for (var c in a)
            if (k(a, c)) {
                var d = a[c];
                "array" == h(d) ?
                    ("array" == h(b[c]) || (b[c] = []), s(d, b[c])) :
                    m(d) ?
                    (m(b[c]) || (b[c] = {}), s(d, b[c])) :
                    (b[c] = d);
            }
    }

    /**
     * =================================================================
     * GA Events
     * =================================================================
     */

    // Pro Page
    if (currentPageLoc.indexOf("https://www.thumbtack.com/pro") != -1) {
        // Get Leads Hero CTA -> .relative.bg-white .mv2 [data-test="get-started-button"]
        // Location Field - Hero Form -> .relative.mv2+div+.relative.mv2 input
        live(
            '.relative.bg-white .mv2 [data-test="get-started-button"], .relative.mv2+div+.relative.mv2 input',
            "click",
            function(e) {
                trackGAEvent("Competitive Advantage V2", "click", "Get Leads Hero CTA");
            }
        );

        // Service Field - Hero Form
        live(" #new-pro-lp-cs", "click", function(e) {
            trackGAEvent("Competitive Advantage V2", "click", "Service Field - Hero Form");
        });

        // Get Leads - Sticky CTA
        live('.fixed [data-test="get-started-button"]', "click", function(e) {
            trackGAEvent("Competitive Advantage V2", "click", "Get Leads - Sticky CTA");
        });

        // Get Leads - Bottom Image CTA
        live("h2+button .Fu-ioshlo_Bv6bF9AaQbF", "click", function(e) {
            trackGAEvent("Competitive Advantage V2", "click", "Get Leads - Bottom Image CTA");
        });
    }

    /**
     * =================================================================
     * Custom Trigger
     * =================================================================
     */

    var regex = "https://www.thumbtack.com/.*/.*/.*|/service/",
        pageUrl = currentPageLoc,
        alreadyFire = false,
        alreadyFireSP = false,
        alreadyFireNP = false;

    // Inactive state more then 2sec

    /****** LP Page ******/
    var userInactive;

    function userInactiveTime() {
        // If modalInactivityTimer option set
        class InactivityCountdown {
            constructor(callback = () => {}, duration = 10) {
                this.timer; // to hold setTimeout ID
                this.active = false; // remember timer state
                this.callback = callback; // function to run when countdown completes
                this.duration = duration; // time in seconds to wait
                this.sprung = false;
            }

            start() {
                // If timer is not active, start it
                if (this.active === false) {
                    this.active = true;

                    this.timer = setTimeout(() => {
                        this.callback();
                        this.sprung = true;
                    }, this.duration * 1000);

                    // If timer is already active, reset it
                } else {
                    this.reset();
                }
            }

            stop() {
                // If timer is active, stop it
                if (this.active === true) {
                    this.active = false;

                    clearTimeout(this.timer);
                }
            }

            // Reset timer by stopping and restarting it
            reset() {
                this.stop();
                this.start();
            }
        }

        const modalTrigger = new InactivityCountdown(() => {
            if (userInactive == true) return;

            userInactive = true;
        }, 10);
        modalTrigger.start();
        ["click", "keydown", "touchstart"].forEach(function(eventType) {
            window.addEventListener(eventType, function(event) {
                if (
                    event.target.closest("a") ||
                    event.target.closest("button") ||
                    event.target.closest("input")
                ) {
                    modalTrigger.reset();
                }
            });
        });
    }

    function checkLpPage() {
        if (pageUrl.match(regex)) {
            /**
             * page scroll > 50% and the scrollup
             */
            document.addEventListener("mouseout", function(e) {
                if (!e.toElement && !e.relatedTarget && !alreadyFire && userInactive == true) {
                    alreadyFire = true;
                    console.log("test exit intent new");
                    window["optimizelyEdge"] = window["optimizelyEdge"] || [];
                    window["optimizelyEdge"].push({
                        type: "page",
                        pageName: "state_pages_with_manual",
                    });
                }
            });

            //trigger user inactive state
            userInactiveTime();
        }
    }

    /****** SP Page ******/
    var userInactiveOnSP;

    function userInactiveTimeOnServicePage() {
        // If modalInactivityTimer option set
        class InactivityCountdown {
            constructor(callback = () => {}, duration = 45) {
                this.timer; // to hold setTimeout ID
                this.active = false; // remember timer state
                this.callback = callback; // function to run when countdown completes
                this.duration = duration; // time in seconds to wait
                this.sprung = false;
                this.isOtherModalFired = false;
            }

            //check other modal opened
            isAlreadyOtherModalOpend() {
                var modalOpened = false;
                var modals = document.querySelectorAll('[aria-label="Modal"] > div');

                if (modals.length > 0) {
                    modals.forEach(function(modal) {
                        var modalOpacity = window.getComputedStyle(modal).opacity;
                        if (modalOpacity == 1) {
                            modalOpened = true;
                        }
                    });
                }

                return modalOpened;
            }

            start() {
                if (this.isOtherModalFired) {
                    this.duration = 1;
                }

                // If timer is not active, start it
                if (this.active === false) {
                    this.active = true;

                    this.timer = setTimeout(() => {
                        if (!this.isAlreadyOtherModalOpend()) {
                            this.callback();
                            this.sprung = true;
                        } else {
                            this.isOtherModalFired = true;
                            this.reset();
                        }
                    }, this.duration * 1000);

                    // If timer is already active, reset it
                } else {
                    this.reset();
                }
            }

            stop() {
                // If timer is active, stop it
                if (this.active === true) {
                    this.active = false;

                    clearTimeout(this.timer);
                }
            }

            // Reset timer by stopping and restarting it
            reset() {
                this.stop();
                this.start();
            }
        }

        const modalTrigger = new InactivityCountdown(() => {
            if (userInactiveOnSP == true) return;

            userInactiveOnSP = true;
        }, 30);
        modalTrigger.start();
    }

    function checkServicePage() {
        if (pageUrl.match(regex)) {
            /**
             * page scroll > 50% and the scrollup
             */
            document.querySelector("body").addEventListener("mousemove", function(e) {
                if (!alreadyFireSP && userInactiveOnSP == true) {
                    alreadyFireSP = true;
                    console.log("servicePage exit intent");
                    window["optimizelyEdge"] = window["optimizelyEdge"] || [];
                    window["optimizelyEdge"].push({
                        type: "page",
                        pageName: "21098500546_tt_service_pages_",
                    });
                }
            });

            //trigger user inactive state
            userInactiveTimeOnServicePage();
        }
    }

    /****** NP Page ******/
    var userInactiveOnNP;

    function userInactiveTimeOnNP() {
        // If modalInactivityTimer option set
        class InactivityCountdown {
            constructor(callback = () => {}, duration = 45) {
                this.timer; // to hold setTimeout ID
                this.active = false; // remember timer state
                this.callback = callback; // function to run when countdown completes
                this.duration = duration; // time in seconds to wait
                this.sprung = false;
                this.isOtherModalFired = false;
            }

            //check other modal opened
            isAlreadyOtherModalOpend() {
                var modalOpened = false;
                var modals = document.querySelectorAll('[aria-label="Modal"] > div');

                if (modals.length > 0) {
                    modals.forEach(function(modal) {
                        var modalOpacity = window.getComputedStyle(modal).opacity;
                        if (modalOpacity == 1) {
                            modalOpened = true;
                        }
                    });
                }

                return modalOpened;
            }

            start() {
                if (this.isOtherModalFired) {
                    this.duration = 1;
                }

                // If timer is not active, start it
                if (this.active === false) {
                    this.active = true;

                    this.timer = setTimeout(() => {
                        if (!this.isAlreadyOtherModalOpend()) {
                            this.callback();
                            this.sprung = true;
                        } else {
                            this.isOtherModalFired = true;
                            this.reset();
                        }
                    }, this.duration * 1000);

                    // If timer is already active, reset it
                } else {
                    this.reset();
                }
            }

            stop() {
                // If timer is active, stop it
                if (this.active === true) {
                    this.active = false;

                    clearTimeout(this.timer);
                }
            }

            // Reset timer by stopping and restarting it
            reset() {
                this.stop();
                this.start();
            }
        }

        const modalTrigger = new InactivityCountdown(() => {
            if (userInactiveOnNP == true) return;
            //console.log("inactive state 5 second");

            window["optimizelyEdge"] = window["optimizelyEdge"] || [];
            window["optimizelyEdge"].push({
                type: "page",
                pageName: "21098500546_exit_intent_excluding_",
            });

            userInactiveOnNP = true;
        }, 5);
        modalTrigger.start();

        ["click", "keydown", "touchstart"].forEach(function(eventType) {
            window.addEventListener(eventType, function(event) {
                if (
                    event.target.closest("a") ||
                    event.target.closest("button") ||
                    event.target.closest("input")
                ) {
                    modalTrigger.reset();
                }
            });
        });
    }

    function checkNpPage() {
        if (pageUrl.match(regex)) {
            document.addEventListener("mouseout", function(e) {
                if (!e.toElement && !e.relatedTarget && !alreadyFireNP && userInactiveOnNP == true) {
                    alreadyFireNP = true;
                    console.log("Np exit intent");
                    window["optimizelyEdge"] = window["optimizelyEdge"] || [];
                    window["optimizelyEdge"].push({
                        type: "page",
                        pageName: "21098500546_exit_intent_excluding_",
                    });
                }
            });

            //trigger user inactive state
            userInactiveTimeOnNP();
        }
    }

    /**
     * Checks if the current page is a landing page (LP page) based on the presence of the 'LpPageView' event in the dataLayer.
     * If the event exists, it triggers the 'checkLpPage' function.
     * Additionally, it triggers Optimizely Edge events based on specific LP page URLs and event types.
     * Also, triggers Optimizely Edge events for all LP and non-LP pages, including specific NP page URLs.
     * Finally, triggers Optimizely Edge event for Service Page (SP PageView).
     */
    onDataHelperLoad(function() {
        var bmListener = function(model, message) {
            var currentUrl = window.location.href;

            // LP Page
            if (message && message.event == "LpPageView") {
                console.log("lp page match");
                checkLpPage();

                // LP page view (TT-098 | Book A Service FD Module)
                if (
                    currentUrl.match(
                        "https://www.thumbtack.com/.*/.*/(appliance-repair|plumbing|drain-cleaning-plumbers)"
                    )
                ) {
                    console.log("TT: 98 lp page match");
                    window["optimizelyEdge"] = window["optimizelyEdge"] || [];
                    window["optimizelyEdge"].push({
                        type: "page",
                        pageName: "21098500546_tt098_landing_pages_",
                    });
                }
            }

            // LP Page or Np page
            if (
                (message && message.event == "LpPageView") ||
                (message && message.event == "NpPageView")
            ) {
                console.log("lp page match || np page match");
                window["optimizelyEdge"] = window["optimizelyEdge"] || [];
                window["optimizelyEdge"].push({
                    type: "page",
                    pageName: "21098500546_tt__all_pages_nps__lps_",
                });

                // Np page
                if (message && message.event == "NpPageView") {
                    checkNpPage();

                    // NP page with (TT-098 | Book A Service FD Module)
                    if (
                        currentUrl.includes("www.thumbtack.com/k/appliance-repair/near-me") ||
                        currentUrl.includes("www.thumbtack.com/k/plumbers/near-me") ||
                        currentUrl.includes("www.thumbtack.com/k/drain-cleaning-plumbers/near-me") ||
                        currentUrl.includes("www.thumbtack.com/k/licensed-plumbers/near-me/") ||
                        currentUrl.includes("www.thumbtack.com/k/master-plumbers/near-me") ||
                        currentUrl.includes("www.thumbtack.com/k/bathroom-plumbers/near-me")
                    ) {
                        console.log("Console message: URL matched:", currentUrl);
                        console.log("TT: 98 NP page match");
                        window["optimizelyEdge"] = window["optimizelyEdge"] || [];
                        window["optimizelyEdge"].push({
                            type: "page",
                            pageName: "21098500546_tt098__near_me_pages_",
                        });
                    }
                }
            }

            // SP page view
            if (message && message.event == "SpPageView") {
                console.log("SpPageView page match");
                window["optimizelyEdge"] = window["optimizelyEdge"] || [];
                window["optimizelyEdge"].push({
                    type: "page",
                    pageName: "Service_page_12",
                });
                checkServicePage();
            }
        };
        new DataLayerHelper(dataLayer, bmListener, true);
    });

    // Click on Popup Modal Close Button
    function clickOnModal() {
        window["optimizelyEdge"] = window["optimizelyEdge"] || [];
        window["optimizelyEdge"].push({
            type: "page",
            pageName: "223322",
        });

        window["optimizelyEdge"].push({
            type: "page",
            pageName: "21098500546_tt__rf_tca_exit_intent_callback_form_mweb",
        });
    }

    // Service page goal
    waitForElement("body", function() {
        if (document.body && !document.body.classList.contains("tt_global")) {
            document.body.classList.add("tt_global");
            // Click on popup modal close button
            live(
                '[data-testid="request-flow-modal--open"] button[aria-label="Close"]',
                "click",
                clickOnModal
            );
        }
    });
})();


// The following code is used for manual activation of test 158.

try {

    var urlobject = {
        "/k/handyman/near-me": [
            328405356611,
            7183074494,
            932960133,
            1443963532,
            356457776089,
            1157756512,
            218909059684,
            359310821,
            7801925573,
            289878774,
            1711768210,
            286606524,
            770406202,
            857958513,
            289852764,
            3067547062,
            1711773790,
            89093037,
            653966100237,
            95270741120,
            246689671,
            44150212,
            154548391,
            7801924313,
            298124304862,
            324409992162,
            68603172187,
            13500042,
            289873644,
            430015493909,
            5507948586,
            11867757593,
            289873974,
            102073904,
            797985059940,
            353762584253,
            295100473133,
            102073984,
            4181881892,
            334097592896,
            473122237653,
            11438131535,
            11867702873,
            89094657,
            3629287883,
            346090655506,
            1444001632,
            1444019272,
            2944454009,
            5225004628,
            11438255825,
            3629282483,
            1987701207,
            297580637455,
            4376055002,
            353795694215,
            541859215619,
            1045714630,
            770410492,
            323176680170,
            377222323156,
            375471298279,
            335491628293,
            289852464,
            178195763,
            289856844,
            914382893035,
            375471302359,
            257948570521,
            7172035935,
            346070225676,
            11866301843,
            411125793007
        ],
        "/k/commercial-cleaning/near-me": [
            414575787594,
            339696824819,
            338830195831,
            3403164683,
            338830196791,
            296627631010,
            300045526955,
            2225190958683,
            315474535667,
            1438063534,
            7280659871,
            40700930,
            314759772876,
            602605922,
            298574927001,
            7159706687,
            388909110218,
            316971992100,
            308370574719,
            5127797254,
            344258168817,
            4401936926,
            424188538067,
            324347615438,
            424188535427,
            882313130,
            90520765494,
            602600312,
            297151653505,
            2233444683052,
            369478754132,
            40697510,
            297627036861,
            3403166123
        ],
        "/k/home-painters/near-me": [
            296552074969,
            2798796068,
            167240916292,
            796718527140,
            371850084153,
            2803238468,
            2798793428,
            338905956439,
            360753044568,
            1559966798,
            370512238523,
            1494251064840,
            410537911612,
            478249209767,
            303363206578,
            371750966591,
            397168613181,
            2798763848,
            376440929213,
            680789224762,
            379106871275,
            338905955439,
            1559989778,
            610429669351,
            1559990708,
            2803219028,
            2798772908,
            357260217834,
            374893077742,
            5009609284,
            326841622494,
            474731182224,
            12970000445,
            385355900783,
            317163901909,
            5944908165,
            1174960940,
            412369838149,
            570723941962,
            334970917400,
            300658770436,
            352795599772,
            311050772146,
            863613136553,
            918885645809,
            13105718747,
            2431877447,
            2431114187,
            333821419133,
            2151346414,
            19438235323,
            311230308870,
            333250866440,
            300250003913,
            929512014854,
            2151349174,
            2431113587,
            294737438336,
            333361294554,
            352556392204,
            5508034326,
            2126324205,
            869597772159,
            296940870142,
            309581873510,
            891449449116,
            307025870391,
            1546266939,
            300659402556,
            2431116347,
            299099981949,
            2596842448,
            12202054609,
            299255016858,
            311230306710,
            300349984448,
            1921702261,
            515476327672,
            893744884554,
            4401018587,
            832435516023,
            298707088750,
            2431115927,
            342072895894,
            12297637670,
            341930413859,
            1117994448,
            434622647676,
            903279091817,
            344381794977,
            10802053415,
            314686468319,
            393659556395,
            405909816890,
            306151322155,
            460400692548,
            358443955581,
            2238998153241,
            12202055419,
            321628724302,
            302629082561,
            304147968894,
            324132000841,
            491510304215,
            310461640495,
            310255787663,
            364555569047,
            1704983968,
            301149150716,
            323200801175,
            12297493310,
            2803306688,
            358443960381,
            357358260904,
            342072895414,
            443761769,
            301154753948,
            406282780997,
            412637564808,
            5981282532,
            351956895727,
            294737441216,
            341434174974,
            2809539953,
            680186998062,
            307466221098,
            2431114667,
            310492965748,
            450262692195,
            1117995378,
            1117993398,
            297152834371,
            1100225030,
            1102897811747,
            1006182583,
            297152834331,
            2019157944,
            305921110726,
            297062257191,
            298057193676,
            261550041,
            927281232674,
            338905958839,
            1472010087,
            914731292,
            365054174,
            1735365718280,
            297984177267,
            297062259031,
            294532653302,
            305048430466,
            2796220388,
            352186993380,
            298079373025,
            2157787533,
            1360995877,
            289534884,
            297351558911,
            12202111489,
            295568738806,
            489232273859,
            311505614815,
            297150838756,
            297351538311,
            311230300950,
            5230790473,
            1168164719892,
            641089230853,
            296474375000,
            502314223152,
            300659403516,
            297351556271,
            406389816237,
            295851257680,
            309581873230,
            910141127463,
            2431116827,
            322534773507,
            297837024905,
            11873049111,
            297351538551,
            296474372760,
            297351533751,
            321885411064,
            326728905244,
            19438960723,
            391266483759,
            296224855606,
            12202110769,
            2307392776538,
            295173793830,
            6553542103,
            353399521876,
            297842954839,
            346402713052,
            1546269339,
            826376319817,
            295811670430,
            1721504252631,
            295811671670,
            11638092628,
            329525631769,
            297351544231,
            296343246888,
            297736357085,
            295811670190,
            355875941648,
            2112016226,
            297351534871,
            1522023805,
            6635555913,
            297351534911,
            297351549551,
            300659402636,
            410917502342,
            297351550071,
            297351533191,
            321769674210,
            1724922197237,
            832075179058,
            1016255217118,
            380902907,
            641802729809,
            298544658943,
            328917565156,
            13926430055,
            11491641126,
            2431870967,
            297351548391,
            11638142578,
            295811669430,
            326172709572,
            295851246120,
            357298301515,
            12297480170,
            824923449995,
            297351555831,
            2809549373,
            12312837326,
            258465593,
            258465533,
            312832055972,
            759416657697,
            1621852998,
            297150848876,
            326008718604,
            905107315848,
            1244735624,
            297150842796,
            305921108846,
            378618932103,
            357308985518,
            934824523,
            431434100607,
            357308985278,
            379106870875,
            642509688683,
            1343022410089,
            371850078913,
            643001286685,
            376440929013,
            830583847128,
            472619778903,
            2798811548,
            2798786168,
            1186255734367,
            371850082233,
            568227541354,
            490568632312,
            374643351595,
            317513438083,
            2175602373,
            67753033497,
            411137836220,
            326841622294,
            710278288500,
            3673356180,
            305682527235,
            378005910,
            385355899423,
            378005940,
            12969933215,
            1302478457999,
            6635573133,
            338121661657,
            710893944901,
            346336343194,
            1117997538,
            317569071506,
            10802053325,
            369798968398,
            638521868061,
            1718947797016
        ],
        "/k/movers/near-me": [
            400704430,
            155867902860,
            127113550094,
            245916736,
            326005894731,
            54691820,
            323904755900,
            245913076,
            475825110125,
            117986663,
            647100398528,
            329316966884,
            138518910510,
            20719843,
            1983145495,
            338790188780,
            1343934614,
            1343929094,
            113148941,
            733147266,
            49228810,
            1578640476,
            61250486,
            1366667044,
            733139586,
            334186377,
            10757692,
            582760213,
            733146186,
            20021791,
            100496962,
            296342011090,
            838152325,
            3527674783,
            304974257227,
            320898699,
            10757182,
            304337320,
            96708690,
            135891134476,
            174585179,
            155867881500,
            387990787158,
            1399939072,
            298090250343,
            124203724387,
            9170462480,
            4156654791,
            659385981076,
            1059991069347,
            408151480077,
            10025121,
            174585259,
            1295463347
        ],
        "/k/furniture-assembly/near-me": [
            418691083876,
            304269017200,
            303759702478,
            391940059130,
            355950037811,
            315275009981,
            457586702767,
            26193598420,
            391940059370,
            338635540469,
            310232526850,
            297963310505,
            310887479747,
            304269018160,
            297963306185,
            559584203900,
            577688431867,
            295868918776,
            426276389470,
            304269025400,
            350746672041,
            295375946839,
            297963306225,
            29111219791,
            309485351750,
            863293593747,
            391957924446,
            340016804556,
            298818256266,
            297963307425,
            3921404921,
            2421684433,
            309485352150,
            332083162988,
            297963314545,
            297963306465,
            309485352190,
            96145776,
            309485351510,
            922464429961,
            330074931030,
            4122704031,
            297963314145,
            297438435261,
            298247056750,
            426892673974,
            933245203438,
            334549755316,
            404024230000,
            328195093354,
            404024230040,
            308977013496,
            818865219265,
            308977013416,
            308977013256,
            69966903547,
            1712616633321,
            822296072318,
            330335234319,
            331400659191,
            318484395783,
            331843800863,
            297438447821,
            295868919776,
            295868919816,
            318484409743,
            888915535343,
            308977009336,
            889498923301,
            384203442608,
            260912612827,
            308977009416,
            568046637992,
            308977009176,
            568046635872,
            310887479907,
            309702407038,
            297438447301,
            354720428354,
            331875980633,
            784285735615,
            309159065466,
            306272524031,
            331537961508,
            446599798016,
            309702407718,
            1480588435874,
            2420250793,
            2421684313,
            45446892472,
            333808773568,
            1285932172233,
            316952782942,
            302646916694,
            3175584863,
            1001026266884,
            257134877,
            839241218538,
            295060263053,
            354979678974,
            40553615628,
            295060271693,
            298818254626,
            298247056710,
            56974761,
            350629095567,
            329135328933,
            331537959828,
            355925725087,
            782200975169,
            330035930776,
            331218867001
        ],
        "/k/junk-removal/near-me": [
            378664330446,
            5529882442,
            360761099245,
            3833574404,
            13523957438,
            355283371639,
            6844537173,
            81503201622,
            788809844395,
            369957086839,
            323709508753,
            6844377573,
            333016232334,
            7139091866,
            371360384111,
            297578430888,
            341198592222,
            13057205426,
            831037759366,
            706277956717,
            297928440668,
            3368320342,
            314828803671,
            314828803831,
            13057347266,
            370110721174,
            6844527153,
            1078528036,
            305307452629,
            1078517536,
            1078545406,
            307136755895,
            508325371912,
            1078528006,
            1209536549,
            341198592622,
            11594560091,
            13057205966,
            10722248054,
            400343159414,
            10722248234,
            297373029343,
            401957425196,
            295961091999,
            415040617084,
            831037758206,
            297373029063,
            772284426860,
            7796346640,
            323709504713,
            295654276486,
            82966592514,
            372284261035,
            296665251765,
            367508937562,
            321674320475,
            354315342126,
            350103482127
        ],
        "/k/tv-wall-mount-install/near-me": [
            456486244784,
            1397148482631,
            1235018255997,
            38172866052,
            462219333317,
            477882484541,
            583530177099,
            13948350205,
            333105209732,
            478251507727,
            648764292900,
            600956443816,
            404024230480,
            549049659772,
            308773001017,
            333105209212,
            2342698503507,
            301157312769,
            11701509985,
            2345647045831,
            2341357959510,
            2181567667657,
            394854328684,
            436799986034,
            2341837178091,
            2345488800195,
            2343187533746,
            854402108138,
            299546773428,
            36431358204,
            396019795560,
            31584365201,
            539909775064,
            297614771430,
            394306003176,
            350560951848,
            3299145219,
            303814495810,
            11473402202,
            2148927166,
            12985571627,
            428609043311,
            930750112302,
            303955273583,
            355372898071,
            599105802927,
            312127413342,
            340268330043,
            750847581111,
            549049660732,
            340839003553,
            314304139163,
            12307768281,
            298365702913,
            297610649001,
            316726288482,
            33456709448,
            11388781714,
            677465074459,
            954669877647,
            1318904262718,
            49052317069,
            103031414716,
            300943114963,
            549049660772,
            549049660292,
            51646686355,
            858940258261,
            125995604441,
            401228259748,
            903885205820,
            367437194877,
            2368834774746,
            1397148482151,
            584777946370,
            456682709881,
            648274449312,
            404200707491,
            371062818437,
            356247900671
        ],
        "/k/fence-installation/near-me": [
            328921047515,
            5509167142,
            5508917122,
            357063835811,
            676703331026,
            334027659030,
            230047174,
            230046094,
            790006345417,
            1648436574920,
            375256240535,
            298144419780,
            5509121242,
            5509171552,
            179292973964,
            5507972346,
            13923978358,
            299956811926,
            5433361253,
            3800384106,
            3718168897,
            5509213042,
            860896606,
            5507972286,
            1423573874384,
            1636678719,
            1272020126,
            501365735,
            662619229,
            4970036209,
            821003982414,
            360388665791,
            12901839472,
            5661427043,
            399708396696,
            300249990193,
            5661474083,
            323157882394,
            4584290199,
            1164808817,
            535507512451,
            529049076930,
            298877080211,
            5508865732,
            319578731234,
            12296072750,
            9009238643,
            1272019916,
            297035323405,
            1663419350575,
            396990915,
            300196222721,
            353686662630,
            367438188,
            367438278,
            686484033009,
            299593735911,
            5507954706
        ],
        "/k/gate-companies/near-me/": [
            298144421420,
            356632215007,
            339312554044,
            298242568528,
            495296149913,
            429134887606,
            298144419300,
            306185956315,
            298144427980,
            318622407815
        ],
        "/k/roofing/near-me": [
            495094221481,
            3423005025,
            295503715369,
            311618449089,
            5534923162,
            301697200507,
            5534935582,
            358265618822,
            5534752252,
            6824905661,
            10024189280,
            1174976330,
            4978673393,
            382376116510,
            488322851232,
            1172388845,
            2748481700,
            3275332468,
            5236087114,
            2748525140,
            5534928652,
            363976399675,
            3721180997,
            4169850976,
            3912973012,
            4235996416,
            2977036552,
            300923561978,
            2008590342402,
            4199618956,
            890100010039,
            398477204310,
            2544133092,
            3081175104,
            5220958337,
            363976395755,
            347843244,
            947823655658,
            2224821370001,
            1728059201961,
            301697200307,
            383406634023,
            365215920842,
            828907506711,
            295503714209,
            6844419033
        ],
        "/k/professional-cleaning-services/near-me": [
            299999146759,
            1130613756,
            649193356,
            297985702020,
            298759174068,
            351738937647,
            1999756301,
            328383916,
            301522280138,
            2302118449,
            69038526,
            3124403329,
            323099239848,
            361389133582,
            89113777,
            404413950450,
            440063050464,
            428945156381,
            385163408629,
            11067663,
            153176235171,
            346552497525,
            54869121,
            89114037,
            1085612328,
            335816407323,
            298574926441,
            301377220735,
            1061667009,
            323099321939,
            1600218429000,
            298339759145,
            122452501,
            301377220535,
            256106603,
            516071592922,
            286601356,
            82158495400,
            276133342,
            26784735829,
            10755482,
            4247949787,
            320577175369,
            437764709177,
            395751210128,
            680851605552,
            361389115142,
            406076572995,
            556947142052,
            303147438123,
            368637221470,
            45685583530,
            1335783572,
            296618143401,
            278331579,
            343583884516,
            297842494558
        ],
        "/k/deep-cleaning/near-me": [
            298759174068,
            1391792644922,
            390372169144,
            3034023457,
            299602097254,
            300045514475,
            364469705739,
            298195409729,
            794312755355,
            329530977515,
            3803703403,
            969844309891,
            300045519835,
            300045519595,
            295778204526,
            296603306627,
            341004032053,
            311111360305,
            300045520795,
            329530978035,
            4298099902,
            679381623795,
            297512333426,
            726411855538,
            315474584067,
            29670597127,
            300792918888,
            335816416683,
            326390014924,
            298574938041,
            705950189264,
            6282999330,
            312169784350,
            515851502352,
            364729257250,
            313600007740,
            22874685631,
            300984786904,
            335816419563,
            301423032898,
            399106875594,
            309257733001,
            317454083648,
            300792192688,
            298574934201,
            297674654588,
            300045529155,
            360016336299,
            482612531945,
            458965980652,
            834886932638,
            454777535949,
            298195415169,
            329530977315,
            2343467272213,
            358938016505,
            349646460879,
            2342740589410,
            894561281703,
            300045528155,
            392370611709,
            300045528195,
            894561282463,
            5159038604,
            691229121510,
            1380601203095,
            831848254496,
            50096861120,
            298195412849,
            298195412289,
            1072385976418,
            2043422123,
            4401888446,
            1394294369908,
            296439074526,
            296633696590,
            589985365611
        ],
        "/k/house-cleaning/near-me": [
            1405890412,
            365217277411,
            180247970887,
            467458683496,
            434710311063,
            312202516770,
            395858808159,
            312052776150,
            304580631048,
            335816407083,
            295917780419,
            340714842170,
            3803637103,
            301009647763,
            295917780379,
            305760031620,
            335816411683,
            333175891830,
            304114294228,
            3802569159,
            1085612328,
            335799615818,
            394993298822,
            307697602521,
            2101921160,
            28400838855,
            297177426670,
            871964629585,
            19955398074,
            312566735003,
            2173483654035,
            295753741419,
            313195231898,
            10026065185,
            306662376190,
            383580458048,
            300045520795,
            540735789518,
            297674658148,
            528789323273,
            313197160771,
            867578178,
            10026065725,
            17891696788,
            2224267123,
            297562800953,
            5127832234,
            312566735203,
            313197160971,
            1936569322795,
            299207171936,
            304447305092,
            12096466035,
            941338020870,
            52682467356,
            799961384543,
            1440855112,
            348811377321,
            299350037922,
            77657491477,
            298574943521,
            308829015057,
            830639375956,
            797005137786,
            20180541455,
            935019204,
            95243404130,
            152093823,
            901640288112,
            89114157,
            324226274154,
            351766437572,
            5371637246,
            401660182942,
            77657491837,
            142071723,
            315654259662,
            817169746773,
            411177905646,
            44247512,
            44247532,
            425442605462,
            677651511359,
            77662074997,
            7411781697,
            387579140826,
            335805695403,
            298574935801,
            311672357679,
            89314737,
            297512330106,
            327170455,
            7285670007,
            299207171976,
            297674649548,
            326390015204,
            22874470351,
            805924269259,
            355687948924,
            142071763,
            2148418666,
            333987324602,
            298574926721,
            908411031247,
            487828188848,
            372705681822,
            678610248130,
            399106898634,
            614526790739,
            335805696403,
            908288425177,
            295283855220,
            1390430095,
            416591824442,
            298574941801,
            2224267303,
            816755424866,
            327171295,
            344800054732,
            142464607692,
            340714845730,
            488506449731,
            813086565,
            377527227,
            473121538505,
            593623425309,
            416591826402,
            298677771028,
            415476965,
            286601356,
            446050539,
            301832423196,
            1748063023,
            1690730361,
            276133192,
            301832424716,
            3219266963,
            1390411015,
            10755352,
            349317460473,
            355246086600,
            342464639011,
            357169712341,
            297842494958,
            258462563,
            498209104004,
            828487523935,
            985694037734,
            786873726884,
            487828188688,
            2208740021,
            603769691,
            297842523038,
            301392644561,
            2208737681,
            374798519491,
            770164006,
            786873726924,
            985694038014,
            301392642921,
            175134316,
            2474782736,
            835163438,
            2208739421,
            1072385975898,
            997841624617,
            1440856732,
            3802461763,
            2254368448444,
            39334792173,
            383161907731,
            299207141896,
            297674630828,
            297562788233,
            297562787913,
            352978630787,
            799961382863,
            52497321876,
            9163290650,
            488071996752,
            9163112810,
            867570018,
            387438699296,
            786873713684,
            2208736181,
            528789322953,
            929240191334,
            314956551275,
            359042743,
            299869225373,
            1405908952,
            355910712224,
            783762824355,
            411890374926,
            414681228605,
            357969456659,
            300620608555,
            769114997993,
            355222663400,
            2025431896079,
            2871167012,
            107990471,
            767469432379,
            357969457139,
            9163038380,
            2097593483,
            20536382,
            64248239741,
            26786552029,
            3130392639
        ],
        "/k/housekeeping/near-me": [
            304580631048,
            314637988938,
            296025225562,
            433674239644,
            21419564364,
            28400838855,
            5158396004,
            311672357679,
            313101126953,
            2208738401,
            488302573392,
            333103027635,
            6924190074,
            8250972653,
            354919346,
            4969945707,
            314090274685,
            102932751,
            95243404730,
            316152920292,
            12759230596,
            351766431732,
            1578651395,
            449945752233,
            351766438452,
            351766431092,
            429829930692,
            516071594522,
            2208742061,
            7376991664,
            5158425824,
            571167886466
        ],
        "/k/maids/near-me": [
            82157254840,
            5371717886,
            2814597510,
            5371667246,
            5371721306,
            298916029577,
            5051137527,
            44247502,
            694598593,
            446173449,
            694589773,
            3744111097,
            2044533421,
            934999194,
            1464666527,
            333780604044,
            13082977925,
            312566735163,
            306031028574,
            44247542,
            20536052,
            12802134977,
            55938479041,
            2279972969416,
            296431060059,
            73346494000,
            335816414563,
            295431834136,
            89314777,
            60864311,
            65809244270,
            374311921157,
            1163594301,
            606508575764,
            645379061,
            69045631238,
            5085975268,
            2512938540,
            393228502750,
            694604053,
            694603723,
            2512939020,
            2190860015260,
            297975270129,
            5507713372,
            4802024857,
            390451942458,
            4958875594,
            2814629370,
            299285950942,
            2145127839,
            297260441215,
            301257594417,
            291711867,
            694592593,
            694598953
        ],
        "/k/move-out-cleaning/near-me": [
            309090211630,
            309090214270,
            949151708594,
            309257731361,
            339286462988,
            295269833893,
            306634370591,
            309090211350,
            434463741347,
            694598593,
            297177426670,
            377227456201,
            844651902867,
            312048447326,
            298968547638,
            306634370391,
            303916102688,
            455965063596,
            710703260053,
            1619853860582,
            312048438126,
            298968546638,
            298968547598,
            414366329001,
            484892876543,
            61118185409,
            7999535329,
            300792205888,
            420361137737,
            60109081813,
            428140468756,
            363801447262,
            298968546918,
            455965064116,
            16559586575,
            868456310093,
            2476919132,
            301832420116,
            434540883052,
            2475061972,
            301832419356,
            2475062272,
            298574939921,
            454796759709,
            306951560393,
            1312022691972,
            309090212790,
            25406297386,
            31722737066,
            391726088879,
            10896948604,
            2576268707,
            488457838953,
            427203435810,
            355910712464,
            301392639801,
            296875044673,
            301949688181,
            467468690376,
            889831861426,
            853465095,
            2475061312,
            13302650163,
            309257722521,
            943374473433,
            1187630910645,
            839930132097,
            651108625890,
            603768311,
            367038457815,
            295269844973,
            295269845213,
            295269832253,
            323081204294,
            824944969121,
            1633727035108,
            357598090769,
            821304997172,
            388197981509,
            715415859481,
            1066465745017
        ],
        "/k/home-organizers/near-me/": [
            2176887054701,
            1883246035560,
            1603925715352,
            1603925717992,
            299070283384,
            307356084132,
            335356275728,
            2407702091197,
            2342678520609,
            1064194785481,
            2008198975616,
            851816590542,
            853979964845,
            2342269627575,
            413534879496,
            295083844062,
            491934070997,
            295083833462,
            307070698227,
            348550490547,
            337456240228,
            416211331415,
            415719250965,
            390981262075,
            308803490340,
            295834807889,
            299207154616,
            5051584493,
            317963110308,
            400490011116,
            335356276488,
            330121656135,
            307356084892,
            1656979653051,
            305501067014,
            2341440665026,
            913942237606,
            2345627393024,
            305501059894,
            2344578884130,
            2341231265003,
            299070286024,
            299070288624
        ],
        "/k/24-hour-plumbers/near-me": [
            50198310,
            102970996,
            102971696,
            116741836,
            477118730,
            532285826,
            779363146,
            779366266,
            779384026,
            983220456,
            1091301006,
            1485278298,
            4773560615,
            4773602135,
            6031755646,
            7437165934,
            16722962961,
            296825166709
        ],
        "/k/emergency-electricians/near-me": [
            791986862,
            792093602,
            1048796092,
            1067756062,
            4567969728,
            4568059488,
            13235859254,
            14694153989,
            16630667991,
            16647260301,
            295968590340,
            299131098398,
            299625349083,
            300877388572,
            300877417892,
            301226506738,
            301226509578,
            303187324297
        ],
        "/k/locksmiths/near-me": [
            407847507,
            484498648,
            484498708,
            696085065,
            896314822,
            1023459643,
            1145399729,
            1762840589,
            2400092752,
            12082276405,
            25673948979,
            296118077929,
            296129016128,
            296298529104,
            298280182259,
            298857928941,
            305294972076,
            361557020077
        ]
    }


    var url = window.location.href;
    var match = url.match(/kwd-(\d+)-/);
    var pagePath = window.location.pathname;

    if(match){
        if (window.location.href.includes("https://www.thumbtack.com/") && match && match[1]) {
            console.log('KWD:', match[1]);
            var kwId = match[1];
            if (kwId && pagePath) {
    
                if (urlobject[pagePath].includes(Number(kwId))) {
                    // activate the test here 
                    console.log("test 158 activated")
                    window['optimizelyEdge'] = window['optimizelyEdge'] || [];
                    window['optimizelyEdge'].push({
                        type: "page",
                        pageName: "21098500546_tt158_nplp_pages_"
                    });
                    console.log("conditon mateched for the etes")
                } else {
                    window['optimizelyEdge'] = window['optimizelyEdge'] || [];
                    window['optimizelyEdge'].push({
                        type: "page",
                        pageName: "21098500546_tt__160_nps__lps"
                    });
                    console.log("thumbtack test 160 activated with the kwid and excluded from test 158--")
                }
    
            }
        }
    }else{
        window['optimizelyEdge'] = window['optimizelyEdge'] || [];
                    window['optimizelyEdge'].push({
                        type: "page",
                        pageName: "21098500546_tt__160_nps__lps"
                    });
                    console.log("thumbtack test 160 activated without kwid page--")
    }
    

} catch (error) {
    console.log("error on test activating based on KWid")
}